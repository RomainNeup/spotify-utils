<script lang="ts">
    import clsx from "clsx";
    import H2 from "../../components/texts/H2.svelte";

    export let name: string;
    export let description: string;
    export let image: string;
    export let tracks: Track[];

    const className = clsx([
        "bg-secondary",
        "rounded-lg",
        "overflow-x-hidden",
        "shrink-0",
        "w-72",
    ]);
    const popularityScore = () => {
        console.log(tracks);
        if (tracks)
            return Math.round(
                tracks.reduce((t, track) => track.popularity + t, 0) /
                tracks.length
            );
    };
</script>

<div class={className}>
    <img src={image} alt={name} class="w-72 h-72" />
    <div class="p-8">
        <H2 truncate>{name}</H2>
        <div class="mt-4">
            Popularity
            <div class="w-full bg-basic rounded-full h-fit mt-2">
                <div class="bg-primary h-full rounded-full text-center" style="width: {popularityScore()}%">
                    {popularityScore()}%
                </div>
            </div>
        </div>
    </div>
</div>
