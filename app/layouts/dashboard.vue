<!-- layouts/dashboard.vue -->
<template>
  <div class="flex h-screen w-full bg-[#F9FBF7] overflow-hidden">
    <SharedSidebar /> <!-- Komponen sidebar yang baru kita buat -->
    
    <main class="flex-1 overflow-y-auto">
      <slot /> <!-- File dashboard/index.vue akan dirender di sini -->
    </main>
  </div>
</template>