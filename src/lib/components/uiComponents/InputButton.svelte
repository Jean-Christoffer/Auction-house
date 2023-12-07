<input
class="
custom-style 
inline-block 
box-border 
text-center 
uppercase 
text-white 
text-sm 
outline-none 
ml-[-10px] 
mt-7 
cursor-pointer

"

type={inputType}
value={buttonText}
  />
<script lang="ts">

   export let inputType:'submit' | 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color' | 'file';

   export let buttonText:string
</script>
<style lang="postcss">
.custom-style {
    vertical-align: top;
    width: 150px;
    height: 40px;
    background-color: #202020;
    border: 1px solid #202020;
}
.custom-style:hover{
  background-color: rgb(255, 255, 255);
  color: black;
  
}
</style>