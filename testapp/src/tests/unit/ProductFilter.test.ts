import { describe, it, expect } from 'vitest';
import { filterProducts } from '../../lib/utils';
import type { Product } from '../../types/types';

const PRODUCTS: Product[] = [
    { id: 1, name: 'Apple iPhone', category: 'Electronics' },
    { id: 2, name: 'Sofa', category: 'Furniture' },
    { id: 3, name: 'Nike Shoes', category: 'Fashion' },
];

describe('filterProducts', () => {
    it('filters by search query (case-insensitive)', () => {
        const res = filterProducts(PRODUCTS, 'apple', []);
        expect(res).toHaveLength(1);
        expect(res[0].name).toContain('Apple');
    });

    it('filters by single category', () => {
        const res = filterProducts(PRODUCTS, '', ['Fashion']);
        expect(res).toHaveLength(1);
        expect(res[0].category).toBe('Fashion');
    });

    it('filters by search + category', () => {
        const res = filterProducts(PRODUCTS, 'shoes', ['Fashion']);
        expect(res).toHaveLength(1);
    });

    it('returns empty array when no match', () => {
        const res = filterProducts(PRODUCTS, 'xyz', ['Furniture']);
        expect(res).toHaveLength(0);
    });
});
