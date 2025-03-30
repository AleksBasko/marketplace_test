import styled from 'styled-components';

export const ModalOverlay = styled.div`
    inset: 0;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
`;

export const ModalContent = styled.div`
    width: 100%;
    position: relative;
    max-width: 36rem;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    margin-left: 1rem;
    margin-right: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
`;
