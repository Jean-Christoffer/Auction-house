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

<script>
  /**
   * @type {string}
  */
export let inputValue = ""
  /**
   * @type {string}
  */
export let inputType = "text"
  /**
   * @type {oninput}
  */
export let handleInput


</script>
<style lang="postcss">
.custom-style {
    vertical-align: top;
    width: 234px;
    height: 40px;
    border: 1px solid #d2d2d2;
}
</style>