<script lang="ts">
    import clsx from "clsx";

    const className = clsx([
        "max-w-7xl",
        "my-16",
        "px-16",
        "py-8",
        "flex",
        "bg-secondary",
        "w-full",
        "rounded-lg",
        "text-center",
        "flex",
        "flex-col",
    ]);
</script>

<div class={className}>
    <slot />
</div>