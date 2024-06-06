<script>
  let urlToShorten = "";

  const buttonStyle =
    "bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-10 rounded";
</script>

<div class="md:flex md:items-center mb-6">
  <div class="md:w-1/3">
    <label
      for="url-to-shorten"
      class="block text-gray-500 font-bold md:text-right pr-4"
    >
      URL to shorten
    </label>
  </div>
  <div class="md:w-1/3">
    <input
      bind:value={urlToShorten}
      id="url-to-shorten"
      type="text"
      placeholder="example://www.mysite.com"
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
    />
  </div>
</div>

<div class="md:flex md:items-center mt-10 justify-center">
  <button type="button" class={buttonStyle}>Shorten</button>
</div>
