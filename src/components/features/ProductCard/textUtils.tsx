import { HighlightedMark } from './ProductCard.styles.ts';

export const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    return parts.map((part, index) =>
        part.toLowerCase() === searchTerm.toLowerCase() ? (
            <HighlightedMark key={index}>{part}</HighlightedMark>
        ) : (
            part
        ),
    );
};
