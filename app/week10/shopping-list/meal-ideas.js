// meal-ideas.js

"use-client";

import { useState, useEffect } from "react";

// Define API Fetching Function
const fetchMealIdeas = async (ingredient) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    console.log('Error fetching meal ideas: ', error);
  }
}

export default function MealIdeas({ ingredient }) {
  // Define State Variables
  const [meals, setMeals] = useState([]);

  // Define Load function
  const loadMealIdeas = async () => {
    try {
      const response = await fetchMealIdeas(ingredient);
      setMeals(response || []);  // Ensure response is an array or use an empty array
    } catch (error) {
      console.log('Error loading meal ideas: ', error);
    }
  };

  // Define useEffect
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div class="flex-1 max-w-sm m-2">
      <h3 class="text-xl font-bold">Meal Ideas</h3>
      {!meals.length ? (
        <p>Select an ingredient to see meal ideas</p>
      ) : (
        <ul>
          {meals.map((meal) => (
            <li key={meal.idMeal} class="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
