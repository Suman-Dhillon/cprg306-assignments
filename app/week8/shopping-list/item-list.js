"use client"

import Item from './item';
import { useState } from 'react';

export default function ItemList({ items , onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const copyItems = [...items];

    const sortedItems = [...copyItems].sort((a, b) => {
        if (sortBy === 'name'){
            return a.name.localeCompare(b.name);
        }
        else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    const handleSortByName = () => {
        setSortBy('name');
    };

    const handleSortByCategory = () => {
        setSortBy('category');
    }
    

    return (
    <>
        <div>
            <label htmlFor = "sort">Sort by: </label>
            <button onClick={handleSortByName} className = "bg-orange-500 p-1 m-2 w-28">Name</button>
            <button onClick={handleSortByCategory} className = "bg-orange-500 p-1 m-2 w-28">Category</button>
        </div>
        {sortedItems.map((item) => (
        <Item
            key = {item.id}
            item={item}  // Pass the entire item object
            onSelect={onItemSelect}
        />
        ))}
    </>
    )
}
