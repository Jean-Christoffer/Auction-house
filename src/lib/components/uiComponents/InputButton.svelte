<input
class="custom-style inline-block box-border text-center uppercase text-white text-sm outline-none ml-[-10px] mt-7"

type={inputType}
value={buttonText}
  />
<script>
  /**
   * @type {string}
   */
   export let inputType;
   /**
    * @type {string}
    */
   export let buttonText
</script>
<style lang="postcss">
.custom-style {
    vertical-align: top;
    width: 150px;
    height: 40px;
    background-color: #202020;
    border: 1px solid #202020;
}
</style>