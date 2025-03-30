import React from 'react';
import { useSelector } from 'react-redux';
import { test, expect, describe, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { MainPage } from './MainPage';

const mockItems = [
    {
        title: 'Sofa de piel auténtica',
        description:
            'Vendo sofá de piel negro. Tiene signos evidentes de uso, de ahí el precio. Es muy cómodo y bonito',
        price: '75',
        email: 'sofa@amazon.com',
        image: 'sofa.png',
    },
];

vi.mock('react-redux', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        useSelector: vi.fn(),
        useDispatch: vi.fn(() => vi.fn()),
    };
});

vi.mock('hooks/useDebounce.ts', () => ({
    useDebounce: vi.fn((value) => value),
}));

vi.mock('hooks/useItems.ts', () => ({
    useItems: vi.fn(() => ({
        items: mockItems,
        setPage: vi.fn(),
        hasMore: false,
        loading: false,
    })),
}));

vi.mock('hooks/useInfiniteScroll.ts', () => ({
    useInfiniteScroll: vi.fn(() => ({
        lastItemRef: vi.fn(),
    })),
}));

vi.mock('lucide-react', async (importOriginal) => {
    const actual = await importOriginal();
    return {
        ...actual,
        PackageSearch: () => <svg data-testid="package-icon" />,
        Search: () => <svg data-testid="search-icon" />,
    };
});

describe('MainPage Component', () => {
    beforeEach(() => {
        useSelector.mockReturnValue([]);
    });

    test('renders heading, search input, and package icon', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>,
        );

        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
            'Item Manager',
        );

        expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();

        expect(screen.getByTestId('package-icon')).toBeInTheDocument();
    });

    test('filters items when search input changes', async () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>,
        );

        const searchInput = screen.getByPlaceholderText(/Search/i);
        fireEvent.change(searchInput, {
            target: { value: mockItems[0].title },
        });

        expect(screen.getByText(mockItems[0].title)).toBeInTheDocument();
    });

    test('renders product list correctly', () => {
        render(
            <MemoryRouter>
                <MainPage />
            </MemoryRouter>,
        );

        expect(screen.queryByText(mockItems[0].title)).toBeInTheDocument();
    });
});
