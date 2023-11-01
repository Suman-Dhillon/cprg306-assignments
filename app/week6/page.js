"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems((items) => [...items, newItem]);
    };

    return (
        <div className = "bg-slate-950">
            <h1 className= "text-3xl text-white font-bold m-2">Shopping List</h1>
            <h2 className= "text-xl text-white font-bold m-2">Add New Item</h2>
            <NewItem onAddItem = {handleAddItem} />
            <ItemList items = {items}/>
        </div>
    )
};