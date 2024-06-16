<template>
  <p class="text-purple-700">{{ testVar }} test component</p>
</template>

<script setup lang="ts">
const { testVar } = useTestStore();
</script>
