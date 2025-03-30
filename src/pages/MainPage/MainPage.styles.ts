import styled from 'styled-components';

export const Container = styled.div`
    gap: 2rem;
    display: flex;
    padding: 1.5rem 1rem 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    flex-direction: column;
    background-color: #fff;

    @media (min-width: 768px) {
        padding: 1.5rem 1.5rem 3rem;
    }
`;

export const AllProducts = styled.div`
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
`;

export const EmptyResult = styled.div`
    color: #6b7280;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

export const Header = styled.div`
    gap: 0.5rem;
    color: #075985;
    display: flex;
    align-items: center;
`;
