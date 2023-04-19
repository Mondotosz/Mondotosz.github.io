<script setup lang="ts">
type Props = {
  to: string;
  icon: string;
  text: string;
  active: boolean;
};

defineProps<Props>();
</script>

<template>
  <li class="grid w-full">
    <NuxtLink
      :to="to"
      class="flex items-center justify-center gap-4 px-6 py-4 rounded-lg bg-gradient-to-br hover:from-primary-600 hover:to-primary-400 hover:text-white focus:outline-none focus:from-primary-600 focus:to-primary-400 focus:text-white"
      :class="{
        'from-accent-600 to-accent-400 text-white': active,
        'from-base-400 to-base-200 text-base-900': !active,
      }">
      <Icon :name="icon" class="w-6 h-6" />
      <span class="text-xl">{{ text }}</span>
    </NuxtLink>
  </li>
</template>
