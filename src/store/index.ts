import { createStore } from 'vuex'
import state from './state'
import * as mutations from './mutations'
import { actions } from './actions'
import type { Ingredient, Meal } from '@/types'

export interface rootState {
  searchedMeals: Meal[]
  mealsByLetter: Meal[]
  mealsByIngredient: Meal[]
  ingredient: Ingredient
}
const store = createStore<rootState>({
  state,
  mutations,
  actions
})

export default store
