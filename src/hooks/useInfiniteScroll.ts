import { useCallback, useRef } from 'react';

export const useInfiniteScroll = (
    loading: boolean,
    hasMore: boolean,
    setPage: (cb: (prev: number) => number) => void,
) => {
    const observer = useRef<IntersectionObserver | null>(null);

    const lastItemRef = useCallback(
        (node: HTMLLIElement | null) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMore) {
                        setPage((prevPage) => prevPage + 1);
                    }
                },
                { threshold: 1.0 },
            );

            if (node) observer.current.observe(node);
        },
        [loading, hasMore],
    );

    return { lastItemRef };
};
