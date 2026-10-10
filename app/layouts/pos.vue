<!-- layouts/pos.vue - POS pakai sidebar tapi main area full height -->
<template>
  <div class="flex h-screen w-full bg-[#F9FBF7] overflow-hidden">
    <SharedSidebar />
    <main class="flex-1 overflow-hidden">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// POS Layout - with sidebar, overflow-hidden agar panel kanan tidak scroll
</script>
