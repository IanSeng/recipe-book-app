import { ADD_INGREDIENT } from './shopping-list.actions';
import { Action } from '@ngrx/store';
import { Ingredient } from '../../shared/ingredient.model';

const initialState = {
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 2),
    ]
};

export function shoppingListReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: [...state.ingredients, action]
            }
    }
}
