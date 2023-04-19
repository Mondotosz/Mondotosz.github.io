<template>
  <div class="flex flex-col items-center justify-between w-full min-h-screen">
    <!-- Header -->
    <Nav />

    <!-- Main -->
    <main
      class="flex flex-col w-full max-w-full gap-6 grow md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
