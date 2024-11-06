import json
from django.http import Http404, JsonResponse
from django.shortcuts import render
from django.views import generic


class ProductListView(generic.TemplateView):
    template_name = 'list.html'

    def get(self, request, *args, **kwargs):
        product_filter = request.GET.get('filter', None)
        products = json.loads(open('products.json').read())['products']

        if product_filter:
            if not request.headers.get('HX-Request'):
                raise Http404('Should be an HTMX request')

            try:
                # Convertimos el filtro en una lista de números
                filter_ids = [int(f) for f in product_filter.split(',')]

                # Filtramos los productos que tengan un filterId que coincida con alguno de los valores
                products = [product for product in products if product['filterId'] in filter_ids]

                return render(
                    request,
                    'list.html',
                    {
                        'products': products,
                    },
                )

            except json.JSONDecodeError:
                return JsonResponse({'error': 'Invalid JSON payload'}, status=400)

        return render(
            request,
            'home.html',
            {
                'products': products,
            },
        )
