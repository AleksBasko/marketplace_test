import styled from 'styled-components';

export const Header = styled.div`
    gap: 0.25rem;
    color: #075985;
    display: flex;
    padding: 1.5rem 3rem 1.25rem 1.5rem;
    align-items: flex-end;
    border-bottom: 1px solid #e5e7eb;
`;

export const Title = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
`;

export const EmptyBasket = styled.p`
    color: #6b7280;
    padding: 1.5rem;
    text-align: center;
`;

export const List = styled.div`
    padding: 1.5rem;
    min-height: 8rem;
    max-height: 70vh;
    overflow-y: auto;
`;

export const ListWrapper = styled.ul`
    gap: 1.25rem;
    display: flex;
    flex-direction: column;
`;
