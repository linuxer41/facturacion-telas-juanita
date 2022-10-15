import { authToken, user } from "$lib/core/store";
import { get } from "svelte/store";
import { goto } from "$app/navigation";


export async function load({routeId}) {
    authToken.load();
    user.load();
    console.log('load', routeId, !get(authToken));
    if((!get(authToken) || !get(user)) && routeId !== 'auth') {
        await goto('/auth');
    }
    
    return {
        title: 'Page',
    }
}