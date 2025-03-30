import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { PackageSearch } from 'lucide-react';

import { useItems } from 'hooks/useItems.ts';
import { RootState } from 'store/store.ts';
import { HeadingType } from 'constants/enum.ts';
import { useDebounce } from 'hooks/useDebounce.ts';
import { useInfiniteScroll } from 'hooks/useInfiniteScroll.ts';

import { Search } from 'components/features/Search';
import { Heading } from 'components/ui/Heading';
import { ProductCard } from 'components/features/ProductCard';

import { content } from './content';
import {
    AllProducts,
    Container,
    EmptyResult,
    Header,
} from './MainPage.styles.ts';

export const MainPage: React.FC = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const debouncedSearchValue = useDebounce(searchValue);
    const { items, setPage, hasMore, loading } = useItems(debouncedSearchValue);
    const { lastItemRef } = useInfiniteScroll(loading, hasMore, setPage);

    const products = useSelector((state: RootState) => state.basket.products);

    return (
        <Container>
            <Header>
                <PackageSearch
                    style={{
                        width: '2rem',
                        height: '2rem',
                    }}
                />
                <Heading type={HeadingType.H2}>{content.title}</Heading>
            </Header>
            <Search value={searchValue} onSearch={setSearchValue} />
            {items.length ? (
                <>
                    <AllProducts>
                        {items.map((item, index) => {
                            const isSelected = products.some(
                                (product) => product.title === item.title,
                            );
                            return (
                                <ProductCard
                                    key={item.title}
                                    ref={
                                        index === items.length - 1
                                            ? lastItemRef
                                            : null
                                    }
                                    isSelected={isSelected}
                                    searchTerm={searchValue}
                                    {...item}
                                />
                            );
                        })}
                    </AllProducts>
                    {loading && <p>Loading more items...</p>}
                </>
            ) : (
                <EmptyResult>
                    <p>{content.emptyResults}</p>
                </EmptyResult>
            )}
        </Container>
    );
};
