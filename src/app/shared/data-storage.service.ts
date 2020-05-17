import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler, HttpHeaders } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private reicpeService: RecipeService, private authService: AuthService) { }

    storeRecipes() {
        const recipes = this.reicpeService.getRecipes();
        this.http.put('https://learn-recipe-book.firebaseio.com/recipes.json', recipes).subscribe(
            response => {
                console.log(response);
            }
        );

    }

    fetchRecipes() {
        return this.http.get<Recipe[]>('https://learn-recipe-book.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                });
            }), tap(recipes => {
                this.reicpeService.setRecipes(recipes);
            }));
    }
}
