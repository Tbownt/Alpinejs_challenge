import { Cookie } from './cookies.js';

function GeneralEventsHtmx() {
    const csrfToken = Cookie.get('csrftoken');
    const CLIENT_ERROR_STATUS_CODE = '4';
    const SERVER_ERROR_STATUS_CODE = '5';

    htmx.on('htmx:configRequest', event => {
        if (csrfToken) event.detail.headers['X-CSRFToken'] = csrfToken;
    });

    htmx.on('htmx:beforeRequest', event => {
        if (event.target instanceof HTMLFormElement) {
            for (const btn of event.target.querySelectorAll('button[type=submit].btn')) {
                btn.classList.add('btn--loading');
            }
        }
    });

    htmx.on('htmx:responseError', event => {
        const xhr = event.detail.xhr;
        const initialNumberStatus = xhr.status.toString().charAt(0);

        if (initialNumberStatus === CLIENT_ERROR_STATUS_CODE) {
            alert(`Client error ${xhr.status}: ${xhr.responseURL}`);
            window.location.reload();
        } else if (initialNumberStatus === SERVER_ERROR_STATUS_CODE) {
            alert(`Server error ${xhr.status}: ${xhr.responseURL}`);
            window.location.reload();
        }
    });
}

export { GeneralEventsHtmx };
