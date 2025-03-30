import { render, screen, fireEvent } from '@testing-library/react';

import { Search } from 'components/features/Search';

vi.mock('lucide-react', () => ({
    Search: () => <svg data-testid="search-icon" />,
}));

describe('Search Component', () => {
    test('renders input with placeholder and search icon', () => {
        render(<Search value="" onSearch={() => {}} />);

        const input = screen.getByPlaceholderText(/Search/i);
        expect(input).toBeInTheDocument();

        const icon = screen.getByTestId('search-icon');
        expect(icon).toBeInTheDocument();
    });

    test('calls onSearch when input changes', () => {
        const mockOnSearch = vi.fn();
        render(<Search value="" onSearch={mockOnSearch} />);

        const input = screen.getByPlaceholderText(/Search/i);

        fireEvent.change(input, { target: { value: 'Polaroid' } });

        expect(mockOnSearch).toHaveBeenCalledTimes(1);
        expect(mockOnSearch).toHaveBeenCalledWith('Polaroid');
    });
});
