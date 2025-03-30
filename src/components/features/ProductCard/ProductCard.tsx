import React, { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { Check, EuroIcon, Mail, ShoppingCart } from 'lucide-react';

import { addProduct } from 'slices/basketSlice';
import { RoutePaths } from 'routes/routePaths.ts';
import { ButtonType, HeadingType } from 'constants/enum.ts';

import { Button } from 'components/ui/Button';
import { Heading } from 'components/ui/Heading';

import { highlightText } from './textUtils.tsx';
import { content } from './content.ts';
import {
    Footer,
    Details,
    Container,
    PriceBlock,
    StyledLink,
    EmailBlock,
    StyledImage,
    ImageWrapper,
    DescriptionBlock,
} from './ProductCard.styles.ts';
import type { ProductCardProps } from './ProductCard.types.ts';

export const ProductCard: React.FC<ProductCardProps> = forwardRef<
    HTMLLIElement,
    ProductCardProps
>(
    (
        { image, title, price, email, searchTerm, isSelected, description },
        ref,
    ) => {
        const dispatch = useDispatch();

        const handleAddToBasket = () => {
            if (!isSelected) {
                dispatch(
                    addProduct({
                        title,
                        image,
                        description,
                    }),
                );
            }
        };

        return (
            <Container ref={ref}>
                <ImageWrapper>
                    <StyledImage src={`/img/${image}`} alt={title} />
                </ImageWrapper>

                <Details>
                    <div>
                        <EmailBlock>
                            <Mail
                                style={{
                                    width: '0.8rem',
                                    height: '0.8rem',
                                }}
                            />
                            <span data-testid="email">
                                {highlightText(email, searchTerm)}
                            </span>
                        </EmailBlock>
                        <Heading type={HeadingType.H3}>
                            <StyledLink
                                to={RoutePaths.PRODUCT.replace(':id', 'iphone')}
                                data-testid="title"
                            >
                                {highlightText(title, searchTerm)}
                            </StyledLink>
                        </Heading>
                        <DescriptionBlock>
                            <span data-testid="description">
                                {highlightText(description, searchTerm)}
                            </span>
                        </DescriptionBlock>
                        <PriceBlock>
                            <EuroIcon
                                style={{
                                    width: '1.1rem',
                                    height: '1.1rem',
                                }}
                            />
                            <span data-testid="price">
                                {highlightText(
                                    Number(price).toFixed(2),
                                    searchTerm,
                                )}
                            </span>
                        </PriceBlock>
                    </div>

                    <Footer>
                        <Button
                            width={'11rem'}
                            type={
                                isSelected
                                    ? ButtonType.SELECTED
                                    : ButtonType.DEFAULT
                            }
                            onClick={handleAddToBasket}
                        >
                            {isSelected ? (
                                <>{content.buttonSelected}</>
                            ) : (
                                <>
                                    <ShoppingCart
                                        style={{
                                            width: '0.9rem',
                                            height: '0.9rem',
                                        }}
                                    />
                                    {content.button}
                                </>
                            )}
                        </Button>
                        {isSelected && (
                            <Check
                                style={{
                                    color: '#22c55e',
                                    width: '1.25rem',
                                    height: '1.25rem',
                                }}
                            />
                        )}
                    </Footer>
                </Details>
            </Container>
        );
    },
);
