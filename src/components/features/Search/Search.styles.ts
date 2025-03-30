import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const SearchInput = styled.input`
    width: 100%;
    border: 1px solid #d1d5db;
    padding: 0.5rem 2.5rem 0.5rem 0.5rem;
    outline: none;
    font-size: 1rem;
    transition: box-shadow 0.2s ease;
    border-radius: 0.375rem;

    &:focus {
        box-shadow: 0 0 0 2px #38bdf8;
    }
`;
