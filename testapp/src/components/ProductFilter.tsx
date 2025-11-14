import { useMemo, useState, type JSX } from 'react';
import './ProductFilter.css';
import type { Product } from '../types/types';
import { filterProducts } from '../lib/utils';

const PRODUCTS: Product[] = [
    { id: 1, name: 'iPhone 13', category: 'Electronics' },
    { id: 2, name: 'Dell Laptop', category: 'Electronics' },
    { id: 3, name: 'Dining Table', category: 'Furniture' },
    { id: 4, name: 'Sofa Set', category: 'Furniture' },
    { id: 5, name: 'Running Shoes', category: 'Fashion' },
];

export default function ProductFilter(): JSX.Element {
    const [query, setQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    // Candidate must implement filterProducts in src/lib/utils.ts and use it here
    const filteredProducts = useMemo(
        () => filterProducts(PRODUCTS, query, selectedCategories),
        [query, selectedCategories]
    );

    // TODO: implement toggling logic for categories
    const handleCategoryToggle = (category: string) => {
        // Candidate implements toggle: add or remove from selectedCategories
    };

    // derive categories from PRODUCTS (should be dynamic)
    const categories = Array.from(new Set(PRODUCTS.map((p) => p.category)));

    return (
        <div className="pf-container" data-testid="product-filter">
            <h2>Product Filter</h2>

            {/* Search Bar */}
            <input
                placeholder="Search products..."
                className="pf-search"
                aria-label="Search products"
            />

            {/* Category Checkboxes */}
            <div className="pf-categories" role="group" aria-label="Categories">
                {categories.map((cat) => (
                    <label key={cat} className="pf-category">
                        <input
                            type="checkbox"
                        // candidate must wire checked / onChange to selectedCategories
                        />
                        {cat}
                    </label>
                ))}
            </div>

            {/* Product Grid */}
            <div className="pf-grid">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                        <div className="pf-card" key={p.id} data-testid="product-card">
                            <div className="pf-card-name">{p.name}</div>
                            <div className="pf-card-cat">{p.category}</div>
                        </div>
                    ))
                ) : (
                    <div className="pf-empty" role="status">
                        No products found
                    </div>
                )}
            </div>
        </div>
    );
}
