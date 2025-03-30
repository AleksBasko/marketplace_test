import { Ref } from 'react';

import { ItemInterface } from 'types/item.types.ts';

export type ProductCardProps = ItemInterface & {
    searchTerm: string;

    ref?: Ref<HTMLLIElement>;
    isSelected?: boolean;
};
