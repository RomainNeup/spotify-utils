<script lang="ts">
    import clsx from "clsx";

    export let color: "white" | "primary" | "secondary" = "white";
    export let size: "small" | "medium" | "large" = "medium";
    export let plain: boolean = false;
    export let onClick: () => void = () => {};

    const className = clsx([
        "leading-none",
        "rounded-lg",
        "border",
        "w-fit"
    ],
    {
        "py-2 px-4": size === "small",
        "py-3 px-6": size === "medium",
        "py-4 px-8": size === "large",
        "border-primary": color === "primary",
        "border-secondary": color === "secondary",
        "border-white": color === "white",
        "text-white hover:bg-white hover:text-secondary": color === "white" && !plain,
        "text-primary hover:bg-primary hover:text-secondary": color === "primary" && !plain,
        "text-secondary hover:bg-secondary hover:text-primary": color === "secondary" && !plain,
        "text-secondary bg-primary hover:text-primary": color === "primary" && plain,
        "text-primary bg-secondary hover:text-secondary": color === "secondary" && plain,
        "text-secondary bg-white hover:text-white": color === "white" && plain,
        "hover:bg-transparent": plain,
    });
</script>

<button class={className} on:click={onClick}>
    <slot />
</button>