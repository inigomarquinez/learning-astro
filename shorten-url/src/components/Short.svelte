<script>
  const shortioDomain = import.meta.env.PUBLIC_SHORTIO_DOMAIN;
  const shortioApiKey = import.meta.env.PUBLIC_SHORTIO_API_KEY;

  let urlToShorten = "";
  let urlResult = "";
  let show = false;

  const fetchUrl = async () => {
    if (urlToShorten.length > 0) {
      const options = {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          Authorization: shortioApiKey,
        },
        body: JSON.stringify({
          domain: shortioDomain,
          originalURL: urlToShorten,
        }),
      };
      const response = await fetch("https://api.short.io/links", options);
      const data = await response.json();
      urlResult = data.shortURL;
      show = true;
    }
  };

  const copy = () => navigator.clipboard.writeText(urlResult);

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
  <button type="button" class={buttonStyle} on:click={fetchUrl}>Shorten</button>
</div>

{#if show}
  <div class="md:flex md:flex-col md:items-center mt-10 justify-center">
    <input readonly bind:value={urlResult} class="text-5xl text-pink-500" />
    <button class={buttonStyle + " my-5"} on:click={copy}>Copy</button>
  </div>
{/if}
