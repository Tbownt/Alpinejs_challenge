import Alpine from '../../node_modules/alpinejs/dist/module.esm.js';
import htmx from '../../node_modules/htmx.org/dist/htmx.esm.js';

import { GeneralEventsHtmx } from '../utils/general-events-htmx.js';

function Common(callback = undefined) {
    const activePage = document.querySelector('body').dataset.activePage;
    if (activePage) {
        for (const object of document.querySelectorAll(`.js-link-active[data-active-page="${activePage}"]`)) {
            object.classList.add(object.dataset.activeClass);
        }
    }

    window.htmx = htmx;
    GeneralEventsHtmx();

    if (callback) callback(Alpine);
    window.Alpine = Alpine;
    Alpine.start();
}

export { Common };
