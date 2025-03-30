import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from 'store/store.ts';
import { RoutePaths } from 'routes/routePaths.ts';

import { Modal } from 'components/ui/Modal';
import { Basket } from 'components/features/Basket';
import { Button } from 'components/ui/Button';

import { content } from './content.ts';
import { Container, Logo } from './Header.styles.ts';

export const Header: React.FC = () => {
    const [isBasketOpen, setIsBasketOpen] = useState(false);
    const products = useSelector((state: RootState) => state.basket.products);

    return (
        <Container>
            <Link to={RoutePaths.MAIN}>
                <Logo>{content.companyName}</Logo>
            </Link>
            <Button onClick={() => setIsBasketOpen(true)}>
                {`${content.button} (${products.length})`}
            </Button>

            {isBasketOpen && (
                <Modal
                    isOpen={isBasketOpen}
                    onCloseModal={() => setIsBasketOpen(false)}
                >
                    <Basket />
                </Modal>
            )}
        </Container>
    );
};
