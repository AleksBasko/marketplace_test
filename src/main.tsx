import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { store } from 'store/store.ts';

import { App } from './App.tsx';

async function enableMocking() {
    const { worker } = await import('./mocks/browser');
    await worker.start();
}

enableMocking().then(() => {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </StrictMode>,
    );
});
