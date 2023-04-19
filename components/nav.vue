<template>
  <nav class="flex justify-center w-full p-4 shadow-sm bg-base-800">
    <ul class="flex w-full max-w-full gap-6 md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <NavLink to="/" icon="iconoir:large-suitcase" text="Resume" :active="$route.path == '/'" />
      <NavLink to="/projects" icon="iconoir:folder" text="Projects" :active="$route.path == '/projects'" />
      <NavLink to="/interests" icon="iconoir:bright-star" text="Interests" :active="$route.path == '/interests'" />
    </ul>
  </nav>
</template>
