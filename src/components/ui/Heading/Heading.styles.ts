import styled, { css } from 'styled-components';

import { HeadingType } from 'constants/enum';

const commonHeadingStyles = css`
    color: #2c3e50;
    margin: 0;
    font-weight: bold;
`;

export const HeadingStyled = {
    [HeadingType.H1]: styled.h1`
        ${commonHeadingStyles};
        font-size: 2rem;
    `,
    [HeadingType.H2]: styled.h2`
        ${commonHeadingStyles};
        color: #075985;
        font-size: 1.5rem;
    `,
    [HeadingType.H3]: styled.h3`
        ${commonHeadingStyles};
        color: #0369a1;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    `,
    [HeadingType.H4]: styled.h4`
        ${commonHeadingStyles};
        font-size: 1.125rem;
    `,
    [HeadingType.H5]: styled.h5`
        ${commonHeadingStyles};
        font-size: 1rem;
    `,
};
