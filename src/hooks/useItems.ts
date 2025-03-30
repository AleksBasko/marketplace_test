import { useEffect, useRef, useState } from 'react';

import { ItemInterface } from 'types/item.types.ts';

export const useItems = (searchValue: string) => {
    const [items, setItems] = useState<ItemInterface[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const isFirstFetchDone = useRef(false);

    const fetchItems = async (pageNumber: number, searchQuery = '') => {
        if (loading || !hasMore) return;
        setLoading(true);

        try {
            const res = await fetch(
                `/api/items?page=${pageNumber}&search=${searchQuery}`,
            );
            const data = await res.json();

            if (pageNumber === 1) {
                setItems(data.items);
            } else {
                setItems((prev) => [...prev, ...data.items]);
            }

            setHasMore(data.hasMore);
        } catch (error) {
            console.error('Error fetching items:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!isFirstFetchDone.current) {
            isFirstFetchDone.current = true;
            fetchItems(1);
        }
    }, []);

    useEffect(() => {
        setPage(1);
        setHasMore(true);
        fetchItems(1, searchValue);
    }, [searchValue]);

    useEffect(() => {
        if (page > 1) fetchItems(page, searchValue);
    }, [page]);

    return { items, setPage, hasMore, loading, fetchItems };
};
