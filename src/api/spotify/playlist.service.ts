import { get } from "svelte/store";
import { accessToken, currentUser } from "../../store/spotify";
import API from "./API";

export default class PlaylistService {
    public static getPlaylists(offset: number = 0): Promise<Playlist[]> {
        return API.get<PlaylistResponse>("me/playlists", {
            headers: {
                Authorization: `Bearer ${get(accessToken)}`
            },
            params: {
                offset
            }
        })
            .then((response) => {
                if (response.data.next) {
                    return PlaylistService.getPlaylists(offset + 20)
                        .then((next) => response.data.items.concat(next));
                }
                return response.data.items;
            });
    }

    public static getPlaylistItems(playlistId: string, offset: number = 0): Promise<PlaylistItem[]> {
        return API.get<TrackResponse>(`playlists/${playlistId}/tracks`, {
            headers: {
                Authorization: `Bearer ${get(accessToken)}`
            },
            params: {
                offset
            }
        })
            .then((response) => {
                if (response.data.next) {
                    return PlaylistService.getPlaylistItems(playlistId, offset + 100)
                        .then((next) => {
                            return response.data.items.concat(next);
                        });
                }
                return response.data.items;
            });
    }
}