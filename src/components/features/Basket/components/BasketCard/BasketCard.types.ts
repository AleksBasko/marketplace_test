import type { ItemInterface } from 'types/item.types.ts';

export type BasketCardProps = Pick<
    ItemInterface,
    'title' | 'image' | 'description'
>;
