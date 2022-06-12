import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recipe from "./pages/Recipe";
import newRecipe from "./pages/newRecipe";
import Intro from "./pages/Intro";


import {FC} from "react";

interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'intro-route',
        title: 'Intro',
        path: '/',
        enabled: true,
        component: Intro
    },
    {
        key: 'home-route',
        title: 'Home',
        path: '/home',
        enabled: true,
        component: Home
    },
    {
        key: 'favorites-route',
        title: 'Favorites',
        path: '/favorites',
        enabled: true,
        component: Favorites
    },
    {
        key: 'recipe-route',
        title: 'Recipe',
        path: '/recipe',
        enabled: true,
        component: Recipe
    },
    {
        key: 'new-recipe-route',
        title: 'New Recipe',
        path: '/new-recipe',
        enabled: true,
        component: newRecipe
    }
]