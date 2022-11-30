<script lang="ts">
    import { accessToken } from "../../../store/spotify";


    if (window.location.pathname === "/callback") {
        const params = new URLSearchParams(window.location.hash.slice(1));
        accessToken.set(params.get("access_token"));
        window.history.pushState("", "", "/");
    }
</script>