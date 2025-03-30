import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Container = styled.li`
    gap: 1.5rem;
    width: 100%;
    border: 1px solid #eee;
    display: flex;
    padding: 1.5rem;
    overflow: hidden;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    flex-direction: column;
    background-color: #fff;

    @media (min-width: 768px) {
        gap: 2rem;
        align-items: flex-start;
        flex-direction: row;
    }
`;

export const DescriptionBlock = styled.p`
    color: #6b7280;
    margin-bottom: 0.25rem;
`;

export const EmailBlock = styled.p`
    gap: 0.25rem;
    color: #4b5563;
    display: flex;
    font-size: 0.875rem;
    align-items: center;
    margin-bottom: 0.25rem;
`;

export const PriceBlock = styled.div`
    color: #0369a1;
    display: flex;
    font-size: 1.125rem;
    margin-top: 0.5rem;
    font-weight: 600;
    align-items: center;
`;

export const Details = styled.div`
    gap: 1.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
        align-items: flex-start;
    }
`;

export const Footer = styled.div`
    gap: 0.5rem;
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledImage = styled(LazyLoadImage).attrs({
    effect: 'blur',
})`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.375rem;

    @media (min-width: 768px) {
        width: 12rem;
        height: 12rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #e5e7eb;

    @media (min-width: 768px) {
        width: 12rem;
        height: 12rem;
    }
`;

export const HighlightedMark = styled.mark`
    background-color: yellow;
    border-radius: 4px;
    padding: 2px;
`;
