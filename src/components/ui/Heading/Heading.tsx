import React from 'react';
import { HeadingType } from 'constants/enum';

import { HeadingStyled } from './Heading.styles';

import type { HeadingProps } from './Heading.types';

export const Heading: React.FC<HeadingProps> = ({
    type = HeadingType.H1,
    children,
}) => {
    const HeadingTag = HeadingStyled[type];

    return <HeadingTag>{children}</HeadingTag>;
};
