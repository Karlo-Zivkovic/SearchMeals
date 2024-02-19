import type { Ingredient, Meal } from '@/types'
import type { rootState } from '.'

export function setSearchedMeals(state: rootState, meals: Meal[]) {
  state.searchedMeals = meals || []
}

export function setMealsByLetter(state: rootState, meals: Meal[]) {
  state.mealsByLetter = meals || []
}

export function setMealsByIngredients(state: rootState, meals: Meal[]) {
  state.mealsByIngredient = meals || []
 }

export function setIngredient(state: rootState, ingredient: Ingredient) {
  state.ingredient = ingredient
}
