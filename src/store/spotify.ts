import { readable, writable } from "svelte/store";

// export const state = writable<null | string>(null);
export const state = readable<null | string>(null, (set) => {
    set((Math.random() + 1).toString(36).substring(7));
    return () => {};
});

export const accessToken = writable<null | string>(null);
export const currentUser = writable<null | User>(null);