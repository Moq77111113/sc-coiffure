<script>
  let email = "";
  let honey = "";
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("form-name", "contact");
    formData.append("ilovehoney", honey); // Hidden field
    formData.append("email", email);

    try {
      const response = await fetch("/incoming", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      // Handle the response as needed
      if (response.ok) {
        alert("Merci pour votre inscription !");
        email = "";
      } else {
        alert("Oops! Une erreur est survenue.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Oops! Une erreur est survenue.");
    }
  };
</script>

<form
  class="m-auto flex w-full flex-col items-center justify-center gap-2 sm:max-w-md sm:flex-row sm:gap-0"
  name="contact"
  method="POST"
  on:submit|preventDefault={handleSubmit}
  data-netlify="true"
  netlify-honeypot="ilovehoney"
>
  <input type="hidden" name="form-name" value="contact" />
  <input type="text" name="ilovehoney" bind:value={honey} class="hidden" />

  <input
    bind:value={email}
    class="w-full rounded-md border bg-white px-4 py-2 text-black placeholder-gray-400 text-xs focus:outline-none sm:rounded-r-none"
    type="email"
    name="email"
    placeholder="Entrez votre email"
    required
  />

  <button
    type="submit"
    class="w-md m-auto rounded-md border bg-primary px-4 py-2 text-white hover:bg-accent focus:outline-none sm:w-auto sm:rounded-l-none"
  >
    S'inscrire
  </button>
</form>
