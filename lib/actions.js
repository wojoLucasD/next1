'use server';

import { revalidatePath } from "next/cache";
import { saveMeal } from "./meals";
import { redirect } from "next/dist/server/api-utils";

function isInvalidText(text) {
    return !text || text.trim() === '';
}

 export async function ShareMeal(prevState, formData) {
    'use server';
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        description: formData.get('description'),
        image: formData.get('image'),
        instructions: formData.get('instructions'),
        creator: formData.get('creator'),
        creator_email: formData.get('email'),
    };

    if (isInvalidText(meal.title) || 
    isInvalidText(meal.summary) || 
    isInvalidText(meal.description) || 
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) || 
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes('@') || 
    !meal.image || meal.image.size === 0
    ) {
        return {
            message: 'Invalid input'
        };
    }

    await saveMeal(meal);
    revalidatePath('/meals', '/layout');
    redirect('/meals');

}