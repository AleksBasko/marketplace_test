import React from 'react';
import { ButtonType } from 'constants/enum.ts';

import { Container } from './Button.styles.ts';
import type { ButtonProps } from './Button.types.ts';

export const Button: React.FC<ButtonProps> = ({
    type = ButtonType.DEFAULT,
    width,
    children,
    onClick,
}) => {
    const ButtonStyled = Container[type];

    return (
        <ButtonStyled width={width} onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};
