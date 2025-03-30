import React from 'react';
import { useDispatch } from 'react-redux';
import { Trash2 } from 'lucide-react';

import { ButtonType } from 'constants/enum.ts';
import { AppDispatch } from 'store/store.ts';
import { removeProduct } from 'slices/basketSlice.ts';

import { Button } from 'components/ui/Button';

import {
    Container,
    Description,
    Title,
    ImageWrapper,
    StyledImage,
} from './BasketCard.styles.ts';
import type { BasketCardProps } from './BasketCard.types.ts';

export const BasketCard: React.FC<BasketCardProps> = ({
    title,
    image,
    description,
}) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleRemove = () => {
        dispatch(removeProduct(title));
    };

    return (
        <Container>
            <ImageWrapper>
                <StyledImage src={`/img/${image}`} alt={title} />
            </ImageWrapper>
            <div>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </div>
            <Button type={ButtonType.ERROR} onClick={handleRemove}>
                <Trash2
                    style={{
                        width: '1rem',
                        height: '1rem',
                    }}
                />
            </Button>
        </Container>
    );
};
