import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { GlobalStyle } from 'assets/styles/globalStyles.ts';

import { MainPage } from 'pages/MainPage';
import { NotFound } from 'pages/NotFound';
import { ProductPage } from 'pages/ProductPage';

import { Layout } from 'components/layouts/Layout';

import { RoutePaths } from 'routes/routePaths.ts';

export const App: React.FC = () => {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <Routes>
                    <Route path={RoutePaths.MAIN} element={<MainPage />} />
                    <Route
                        path={RoutePaths.PRODUCT}
                        element={<ProductPage />}
                    />
                    <Route path={RoutePaths.NOT_FOUND} element={<NotFound />} />
                </Routes>
            </Layout>
        </>
    );
};
