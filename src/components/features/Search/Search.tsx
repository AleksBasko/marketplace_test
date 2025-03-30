import React, { ChangeEvent } from 'react';
import { Search as SearchIcon } from 'lucide-react';

import { content } from './content.ts';
import { Container, SearchInput } from './Search.styles.ts';
import type { SearchProps } from './Search.types.ts';

export const Search: React.FC<SearchProps> = ({ value, onSearch }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <Container>
            <SearchInput
                value={value}
                placeholder={content.placeholder}
                onChange={handleChange}
            />
            <SearchIcon
                style={{
                    position: 'absolute',
                    right: '0.75rem',
                    top: '0.4rem',
                    height: '1.25rem',
                    width: '1.25rem',
                    color: '#9ca3af',
                    pointerEvents: 'none',
                }}
            />
        </Container>
    );
};
