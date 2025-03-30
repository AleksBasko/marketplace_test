import styled from 'styled-components';

export const Container = styled.div`
    max-width: 80rem;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;

    @media (min-width: 768px) {
        padding: 2rem 1.5rem;
    }

    @media (min-width: 1024px) {
        padding: 2rem;
    }
`;
