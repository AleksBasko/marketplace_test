import styled from 'styled-components';

export const Container = styled.div`
    gap: 1rem;
    display: flex;
    padding: 1.5rem 1.5rem 3rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    flex-direction: column;
    background-color: #fff;
`;

export const EmailBlock = styled.p`
    gap: 0.25rem;
    color: #4b5563;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
`;

export const PriceBlock = styled.div`
    color: #0369a1;
    display: flex;
    font-size: 1.125rem;
    margin-top: 0.5rem;
    font-weight: 600;
    align-items: center;
`;

export const DescriptionBlock = styled.p`
    color: #6b7280;
    font-size: 1.125rem;
    margin-bottom: 1rem;
`;
