<script lang="ts">
    import clsx from "clsx";
    export let color: "white" | "primary" = "white";
    export let truncate: boolean = false;

    const className = clsx([
        "text-xl",
        "font-bold",
    ], {
        "truncate": truncate,
        "text-white": color === "white",
        "text-primary": color === "primary",
    });
</script>

<h2 class={className}>
    <slot />
</h2>
