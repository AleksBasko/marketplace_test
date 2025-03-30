import styled from 'styled-components';

export const Container = styled.button`
    top: 0.4rem;
    right: 0.4rem;
    color: #9ca3af;
    width: 2rem;
    height: 2rem;
    border: none;
    cursor: pointer;
    position: absolute;
    background: none;
    transition: color 0.2s ease;

    &:hover {
        color: #6b7280;
    }
`;
