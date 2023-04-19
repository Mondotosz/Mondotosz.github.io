<template>
  <footer class="flex justify-center w-full px-6 py-4 text-white bg-base-800">
    <div
      class="flex flex-col-reverse w-full max-w-full gap-6 md:flex-row md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <!-- Credits -->
      <div class="flex flex-col items-center flex-grow gap-2 md:items-start">
        <h2 class="font-medium">Made with</h2>
        <div
          class="flex flex-row flex-wrap justify-center gap-3 md:justify-start">
          <NuxtLink to="https://tailwindcss.com/" class="flex items-center">
            <Icon name="logos:tailwindcss-icon" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink to="https://nuxtjs.org/" class="flex items-center">
            <Icon name="logos:nuxt-icon" class="w-8 h-8" />
          </NuxtLink>
          <NuxtLink to="https://vuejs.org/" class="flex items-center">
            <Icon name="logos:vue" class="w-8 h-8" />
          </NuxtLink>
        </div>
      </div>

      <!-- Socials -->
      <div
        class="flex items-center justify-center flex-grow gap-6 md:gap-3 md:justify-end">
        <!-- GitHub -->
        <NuxtLink to="https://github.com/mondotosz">
          <Icon name="fa6-brands:github" class="w-12 h-12" />
        </NuxtLink>
        <!-- LinkedIn -->
        <NuxtLink
          to="https://www.linkedin.com/in/k%C3%A9nan-augsburger-16855817b/">
          <Icon name="fa6-brands:linkedin" class="w-12 h-12" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
