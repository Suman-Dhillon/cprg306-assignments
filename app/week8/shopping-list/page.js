"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems((items) => [...items, newItem]);
    };

    const handleItemSelect = (item) => {
        if (item && item.name) {
            const cleanedStr = item.name.replace(/[^a-z\s]+$/i, ' ').trim().split(',')[0].replace(' ', '_');
            setSelectedItemName(cleanedStr);
        }
    };
    

    return (
        <>
            <div className = "bg-slate-950">
                <h1 className= "text-3xl text-white font-bold m-2">Shopping List</h1>
                <div class="flex">
                    <div class="flex-1 max-w-sm m-2">
                        <h2 className= "text-xl text-white font-bold m-2">Add New Item</h2>
                        <NewItem onAddItem = {handleAddItem} />
                        <ItemList items = {items} onItemSelect={handleItemSelect}/>
                        <div class="flex-1 max-w-sm m-2">
                            <MealIdeas ingredient = {selectedItemName} />  
                        </div>  
                    </div>             
                </div>
            </div>
        </>
    )
};