import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingBasket } from 'lucide-react';

import { RootState } from 'store/store.ts';

import { BasketCard } from './components/BasketCard';

import { content } from './content.ts';
import {
    EmptyBasket,
    Header,
    List,
    ListWrapper,
    Title,
} from './Basket.styles.ts';

export const Basket: React.FC = () => {
    const products = useSelector((state: RootState) => state.basket.products);

    return (
        <div>
            <Header>
                <ShoppingBasket
                    style={{
                        width: '1.5rem',
                        height: '1.5rem',
                    }}
                />
                <Title>{content.title}</Title>
            </Header>

            <List>
                {products.length ? (
                    <ListWrapper>
                        {products.map((item) => (
                            <BasketCard key={item.title} {...item} />
                        ))}
                    </ListWrapper>
                ) : (
                    <EmptyBasket>{content.emptyBasket}</EmptyBasket>
                )}
            </List>
        </div>
    );
};
