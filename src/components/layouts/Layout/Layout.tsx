import React from 'react';

import { Header } from 'components/layouts/Header';

import { Container } from './Layout.styles.ts';
import { LayoutProps } from './Layout.types.ts';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Container>
            <Header />
            <div>{children}</div>
        </Container>
    );
};
