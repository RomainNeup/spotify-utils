<script lang="ts">
    import clsx from "clsx";
    import { currentUser } from "../../../store/spotify";
    import H1 from "../texts/H1.svelte";

    const className = clsx([
        "px-16",
        "py-8",
        "flex",
        "justify-between",
        "bg-secondary",
    ]);
</script>

<div class={className}>
    <H1 color="primary">Spotify Diff Checker</H1>
    {#if $currentUser && $currentUser.images.length > 0}
        <div class="flex space-x-4 items-center">
            <span class="h-fit">{$currentUser.display_name}</span>
            <img
                src={$currentUser.images[0].url}
                alt={$currentUser.display_name}
                class="h-8 w-8 rounded-full"
            />
        </div>
    {/if}
</div>
