"use client"

import Item from './item';
import { useState } from 'react';
import items from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
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
            <label for = "sort">Sort by: </label>
            <button onClick={handleSortByName} class = "bg-orange-500 p-1 m-2 w-28">Name</button>
            <button onClick={handleSortByCategory} class = "bg-orange-500 p-1 m-2 w-28">Category</button>
        </div>
        {sortedItems.map((item, index) => (
        <Item
        key = {index}
        name = {item.name}
        quantity= {item.quantity}
        category = {item.category}
        />
        ))}
    </>
    )
}
