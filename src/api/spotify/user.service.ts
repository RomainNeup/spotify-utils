import { get } from "svelte/store";
import { accessToken, state } from "../../store/spotify";
import API from "./API";

export default class UserService {
    public static authorize(): string {
        const scope = [
            "playlist-read-private",
            "playlist-read-collaborative",
            "playlist-modify-public",
            "playlist-modify-private",
        ];
        const params = new URLSearchParams({
            client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
            response_type: "token",
            redirect_uri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
            state: get(state),
            scope: scope.join(" "),
        });
        console.log(import.meta.env);
        return `${import.meta.env.VITE_SPOTIFY_AUTH_URL}?${params.toString()}`;
    }

    public static getUser(): Promise<User> {
        return API.get<User>("me", {
            headers: {
                Authorization: `Bearer ${get(accessToken)}`,
            }
        })
            .then(a => a.data);
    }
}