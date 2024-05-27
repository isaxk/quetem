import { browser } from "$app/environment";
import { writable } from "svelte/store";

export function createFavouritesStore() {
    var initial = [];

    if (browser && localStorage.favourites) {
        initial = JSON.parse(localStorage.favourites);
    }
    const favourites = writable(initial);

    function addFavourite(newItem: any) {
        favourites.update((v: Array<any>) => {
            return [...v, newItem];
        });
    }

    function removeFavourite(id: number) {
        favourites.update((v: Array<any>) => {
            const index = v.findIndex((obj) => obj.id == id);
            return v.toSpliced(index, 1);
        });
    }

    favourites.subscribe((v: Array<any>) => {
        console.log(favourites);
        if (browser) {
            localStorage.favourites = JSON.stringify(v);
        }
    });

    return {
        ...favourites,
        addFavourite,
        removeFavourite,
    };
}
