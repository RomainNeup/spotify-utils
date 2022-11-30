<script lang="ts">
    import UserService from "../../../api/spotify/user.service";
    import { accessToken } from "../../../store/spotify";
    import Button from "../../components/buttons/Button.svelte";
    import Body from "../../components/containers/Body.svelte";
    import H2 from "../../components/texts/H2.svelte";

    function authenticate() {
        const url = UserService.authorize();
        window.open(url, "_self");
    }
</script>

<Body>
    <H2>Duplication checker</H2>
    <p class="pt-8 pb-4">A bunch of Spotify utils. WIP</p>
    <div class="self-center">
        <Button onClick={authenticate} color="primary">Login with spotify</Button>
    </div>
</Body>
