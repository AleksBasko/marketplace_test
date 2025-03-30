import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, beforeEach, vi } from 'vitest';
import { Provider } from 'react-redux';
import basketReducer from 'slices/basketSlice';
import { configureStore } from '@reduxjs/toolkit';
import { MemoryRouter } from 'react-router-dom';

import { ProductCard } from './ProductCard';

vi.mock('./textUtils', () => ({
    highlightText: (text: string) => text,
}));

const setupStore = () => {
    return configureStore({
        reducer: { basket: basketReducer },
    });
};

describe('ProductCard Component', () => {
    let store;

    beforeEach(() => {
        store = setupStore();
    });

    const mockProps = {
        image: 'test-image.jpg',
        title: 'Test Product',
        price: '99.99',
        email: 'test@example.com',
        searchTerm: 'Test',
        isSelected: false,
        description: 'This is a test product.',
    };

    test('renders product details correctly', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <ProductCard {...mockProps} />
                </Provider>
            </MemoryRouter>,
        );

        expect(screen.getByTestId('email')).toBeInTheDocument();
        expect(screen.getByTestId('title')).toBeInTheDocument();
        expect(screen.getByTestId('price')).toBeInTheDocument();
        expect(screen.getByTestId('description')).toBeInTheDocument();
    });

    test('adds product to basket when button is clicked', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <ProductCard {...mockProps} />
                </Provider>
            </MemoryRouter>,
        );

        const addButton = screen.getByRole('button');
        fireEvent.click(addButton);

        const state = store.getState();
        expect(state.basket.products).toHaveLength(1);
        expect(state.basket.products[0]).toEqual({
            title: mockProps.title,
            image: mockProps.image,
            description: mockProps.description,
        });
    });

    test('displays selected state when isSelected is true', () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <ProductCard {...mockProps} isSelected={true} />
                </Provider>
            </MemoryRouter>,
        );

        expect(screen.getByText(/Added/i)).toBeInTheDocument();
    });
});
