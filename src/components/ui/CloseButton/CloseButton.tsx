import React from 'react';
import { X } from 'lucide-react';

import { Container } from './CloseButton.styles.ts';
import type { CloseButtonProps } from './CloseButton.types.ts';

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
    return (
        <Container onClick={onClick}>
            <X
                style={{
                    width: '1.25rem',
                    height: '1.25rem,',
                }}
            />
        </Container>
    );
};
