import type { ReactNode } from 'react';

import { ButtonType } from 'constants/enum.ts';

export interface ButtonProps {
    children: ReactNode;

    onClick: () => void;

    type?: ButtonType;
    width?: string;
}
