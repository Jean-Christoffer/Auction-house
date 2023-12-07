<input
  type={inputType}
  value={inputValue}
  on:input={handleInput}
 class=
 "
  custom-style
  inline-block
  box-border
  mt-7
  outline-none
  text-sm
  px-4" />

<script lang="ts">

export let inputValue:string = ""
export let inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color' | 'file'
 = "text"
export let handleInput: (event: Event) => void;


</script>
<style lang="postcss">
.custom-style {
    vertical-align: top;
    width: 234px;
    height: 40px;
    border: 1px solid #d2d2d2;
}
</style>