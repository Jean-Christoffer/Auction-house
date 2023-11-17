{#if $authStore.token}
    <h1>Hello {$authStore.userId}</h1>
{/if}
<script>
import {authStore } from "$lib/data/authstore"
</script>