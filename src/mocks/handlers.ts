import { http, HttpResponse } from 'msw';

import data from 'data/data.json';

export const handlers = [
    http.get('/api/items', ({ request }) => {
        const url = new URL(request.url);
        const page = Number(url.searchParams.get('page')) || 1;
        const searchQuery = url.searchParams.get('search')?.toLowerCase() || '';
        const perPage = 5;

        const filteredItems = data.items.filter(
            (item) =>
                item.title.toLowerCase().includes(searchQuery) ||
                item.description.toLowerCase().includes(searchQuery) ||
                item.price.toString().includes(searchQuery) ||
                item.email.toLowerCase().includes(searchQuery),
        );

        const start = (page - 1) * perPage;
        const end = start + perPage;
        const paginatedItems = filteredItems.slice(start, end);

        return HttpResponse.json({
            items: paginatedItems,
            hasMore: end < filteredItems.length,
        });
    }),
];
