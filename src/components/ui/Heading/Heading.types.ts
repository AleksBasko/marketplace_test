import type { ReactNode } from 'react';

import type { HeadingType } from 'constants/enum';

export interface HeadingProps {
    children: string | ReactNode;

    type?: HeadingType;
}
