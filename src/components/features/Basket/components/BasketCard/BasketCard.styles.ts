import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export const Container = styled.li`
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (min-width: 768px) {
        align-items: flex-start;
        flex-direction: row;
    }
`;

export const Title = styled.p`
    color: #0ea5e9;
    font-weight: 500;
`;

export const Description = styled.p`
    color: #6b7280;
    display: -webkit-box;
    overflow: hidden;
    font-size: 0.875rem;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

export const StyledImage = styled(LazyLoadImage).attrs({
    effect: 'blur',
})`
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 0.375rem;

    @media (min-width: 768px) {
        width: 6rem;
        height: 6rem;
    }
`;

export const ImageWrapper = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    background-color: #e5e7eb;

    @media (min-width: 768px) {
        width: 6rem;
        height: 6rem;
    }
`;
