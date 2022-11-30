<script lang="ts">
    import { onMount } from "svelte";
    import PlaylistService from "../../../api/spotify/playlist.service";
    import UserService from "../../../api/spotify/user.service";
    import { currentUser } from "../../../store/spotify";
    import SPlaylist from "./Playlist.svelte";

    let playlists: Playlist[] = [];
    onMount(() => {
        UserService.getUser().then((user) => {
            currentUser.set(user);
            PlaylistService.getPlaylists()
                .then((playlistResponse) => {
                    return playlistResponse.filter(
                        (playlist) => playlist.owner.id === user.id
                    );
                })
                .then((a) => {
                    const promises = [];
                    a.forEach((playlist) => {
                        promises.push(
                            PlaylistService.getPlaylistItems(playlist.id).then(
                                (tracks) => {
                                    playlist.tracks = tracks.map(
                                        (track) => track.track
                                    );
                                    playlists = [...playlists, playlist];
                                }
                            )
                        );
                    });
                    return Promise.all(promises);
                })
                .then(() => console.log(playlists));
        });
    });
</script>

<div class="flex max-w-6xl overflow-scroll space-x-8 my-16">
    {#each playlists as playlist}
        <SPlaylist
            name={playlist.name}
            description={playlist.description}
            image={playlist.images[0].url}
            tracks={playlist.tracks}
        />
    {/each}
</div>
