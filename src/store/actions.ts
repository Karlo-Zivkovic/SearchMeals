import type { ActionContext, ActionTree } from 'vuex/types/index.js'
import axiosClient from '../axiosClient'
import type { rootState } from '.'


export const actions: ActionTree<rootState, rootState> = {
  searchMeals(context: ActionContext<rootState, rootState>, keyword: string) {
    axiosClient.get(`search.php?s=${keyword}`).then(({ data }) => {
      context.commit('setSearchedMeals', data.meals)
    })
  },
  searchMealsByLetter(context: ActionContext<rootState, rootState>, letter: string) {
    axiosClient.get(`search.php?f=${letter}`).then(({ data }) => {
      context.commit('setMealsByLetter', data.meals)
    })
  },
  searchMealsByIngredient(context: ActionContext<rootState, rootState>, ingredient: string) {
    axiosClient.get(`filter.php?i=${ingredient}`).then(({ data }) => {
      context.commit('setMealsByIngredients', data.meals)
    })
  }
}
