<script lang="ts">
  import Navbar from "./lib/components/header/Navbar.svelte";
  import Presentation from "./lib/elements/home/Presentation.svelte";
  import Callback from "./lib/elements/authorization/Callback.svelte";
    import { accessToken } from "./store/spotify";
    import Playlists from "./lib/elements/spotify/Playlists.svelte";
</script>

<Callback />
<main>
  <Navbar />
  <div class="flex justify-center">
    {#if $accessToken}
      <Playlists />
    {:else}
      <Presentation />
    {/if}
  </div>
</main>
