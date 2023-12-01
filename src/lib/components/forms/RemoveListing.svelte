<div class="w-full max-w-xs  ">
 
    <form
    method="post"
    action="?/deleteAuction" 
    use:enhance
     class="  px-8 pt-6 pb-8 mb-4 customBg">

        <Button buttonText="Remove listing" warning={true}/>
     
    </form>


</div>
<script>
    
    import Button from "../uiComponents/Button.svelte";
    import {enhance} from "$app/forms"






</script>
<style lang="postcss">
    .customBg{
        background-color: #F2F2F2;
    }
    .customWidth{
        max-width: 250px;
        width: 100%;
    }
</style>