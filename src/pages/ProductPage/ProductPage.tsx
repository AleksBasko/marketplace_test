import React from 'react';
import { EuroIcon, Mail } from 'lucide-react';

import { HeadingType } from 'constants/enum.ts';
import { Heading } from 'components/ui/Heading';

import { content } from './content';
import {
    Container,
    EmailBlock,
    DescriptionBlock,
    PriceBlock,
} from './ProductPage.styles.ts';

export const ProductPage: React.FC = () => {
    return (
        <Container>
            <Heading type={HeadingType.H2}>{content.title}</Heading>
            <div>
                <EmailBlock>
                    <Mail
                        style={{
                            width: '0.8rem',
                            height: '0.8rem',
                        }}
                    />
                    <span>{content.email}</span>
                </EmailBlock>
                <DescriptionBlock>{content.description}</DescriptionBlock>
                <PriceBlock>
                    <EuroIcon
                        style={{
                            width: '1.1rem',
                            height: '1.1rem',
                        }}
                    />
                    <span>{content.price}</span>
                </PriceBlock>
            </div>
        </Container>
    );
};
