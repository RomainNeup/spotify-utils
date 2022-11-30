<script lang="ts">
    import clsx from "clsx";
    export let color: "white" | "primary" = "white";

    const className = clsx([
        "text-3xl",
        "font-bold",
        color === "white" ? "text-white" : "text-primary",
    ]);
</script>

<h1 class={className}>
    <slot />
</h1>
