import styled, { css } from 'styled-components';
import { ButtonType } from 'constants/enum';

const commonStyles = css<{ width?: string }>`
    gap: 0.5rem;
    display: flex;
    width: ${({ width }) => width || 'max-content'};
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s ease;
    align-items: center;
    font-weight: 600;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.375rem;
    justify-content: center;
`;

export const Container = {
    [ButtonType.DEFAULT]: styled.button<{ width?: string }>`
        ${commonStyles};
        color: #fff;
        border-color: #0369a1;
        background-color: #0369a1;

        &:hover {
            background-color: #075985;
        }
    `,
    [ButtonType.SELECTED]: styled.button<{ width?: string }>`
        ${commonStyles};
        color: #1e293b;
        border-color: #94a3b8;
        background-color: #cbd5e1;

        &:hover {
            background-color: #94a3b8;
        }
    `,
    [ButtonType.ERROR]: styled.button<{ width?: string }>`
        ${commonStyles};
        color: #dc2626;
        border-color: #ef4444;
        background-color: #fef2f2;

        &:hover {
            background-color: #fee2e2;
        }
    `,
};
