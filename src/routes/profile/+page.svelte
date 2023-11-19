{#if profileData !== null}
    <h1>Welcome back {profileData.name}</h1>
    {:else}
    <h1>Please log in to see your profile</h1>
{/if}
<script>


export let data

   let profileData
   $: {
    if(data){
        profileData = data.props.data
    }else{
        profileData = null
    }
   }
  $: console.log(profileData)
</script>