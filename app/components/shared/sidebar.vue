<script setup lang="ts">
import { useRoute } from '#imports'

const route = useRoute()

const isActive = (path: string) => {
  if (path === '/dashboard' && route.path === '/dashboard') return true
  if (path !== '/dashboard' && route.path.startsWith(path)) return true
  return false
}

const menuGroups = [
  {
    title: 'Utama',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: 'lucide:layout-dashboard' },
    ]
  },
  {
    title: 'Kasir',
    items: [
      { name: 'Point of Sale', path: '/pos', icon: 'lucide:monitor-smartphone', sub: [
        { name: 'Transaksi', path: '/pos/transactions', icon: 'lucide:receipt' },
      ]},
    ]
  },
  {
    title: 'Operasional',
    items: [
      { name: 'Inventaris', path: '/inventory', icon: 'lucide:package', sub: [
        { name: 'Pergerakan', path: '/inventory/movements', icon: 'lucide:arrow-right-left' },
        { name: 'Penyesuaian', path: '/inventory/adjustments', icon: 'lucide:file-diff' },
      ]},
      { name: 'Resep Menu', path: '/recipes', icon: 'lucide:book-open-check' },
      { name: 'Pengadaan', path: '/procurement', icon: 'lucide:shopping-basket' },
    ]
  },
  {
    title: 'Bisnis',
    items: [
      { name: 'Keuangan', path: '/finance', icon: 'lucide:landmark', sub: [] },
      { name: 'Monetisasi', path: '/monetization', icon: 'lucide:badge-dollar-sign', sub: [] },
    ]
  },
  {
    title: 'Sistem',
    items: [
      { name: 'Analitik', path: '/analytics', icon: 'lucide:bar-chart-3', sub: [
        { name: 'Food Cost', path: '/analytics/food-cost', icon: 'lucide:pie-chart' },
      ]},
      { name: 'Pengaturan', path: '/settings', icon: 'lucide:settings' },
    ]
  }
]

type MenuItem = { name: string; path: string; icon: string; sub?: { name: string; path: string; icon: string }[] }

// Track which parent items are expanded
const expanded = ref<Record<string, boolean>>({})

function toggleExpand(path: string) {
  expanded.value[path] = !expanded.value[path]
}

// Auto-expand parent if child is active
onMounted(() => {
  menuGroups.forEach(group => {
    group.items.forEach((item: MenuItem) => {
      if (item.sub && item.sub.some(s => route.path.startsWith(s.path))) {
        expanded.value[item.path] = true
      }
      // Also expand parent if parent itself is active and has sub
      if (item.sub && route.path.startsWith(item.path) && item.path !== '/dashboard') {
        expanded.value[item.path] = true
      }
    })
  })
})
</script>

<template>
  <aside class="flex h-screen w-60 flex-col border-r border-[#EDF0EB] bg-white font-['DM_Sans'] transition-all duration-300">
    <!-- Logo & Brand -->
    <div class="flex h-[76px] shrink-0 items-center border-b border-[#EDF0EB] px-6">
      <NuxtLink to="/dashboard" class="inline-flex items-center gap-2.5">
        <span class="flex size-8 items-center justify-center rounded-[9px] bg-[#173D32] text-white">
          <Icon name="lucide:blocks" class="size-[18px]" />
        </span>
        <span class="font-['Manrope'] text-[20px] font-extrabold tracking-[-0.06em] text-[#173D32]">
          fintera<span class="text-[#BD6337]">.</span>
        </span>
      </NuxtLink>
    </div>

    <!-- Navigation Menu -->
    <div class="flex-1 overflow-y-auto px-3 py-5 scrollbar-hide">
      <div v-for="(group, index) in menuGroups" :key="index" class="mb-5 last:mb-0">
        <h3 class="mb-1.5 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#A2AEA3]">
          {{ group.title }}
        </h3>
        <nav class="flex flex-col gap-0.5">
          <template v-for="item in group.items" :key="item.path">
            <!-- Parent item -->
            <div>
              <div class="flex items-center">
                <NuxtLink
                  :to="item.path"
                  :class="[
                    isActive(item.path)
                      ? 'bg-[#E8F0E8] text-[#1C513B] font-bold'
                      : 'text-[#687D70] hover:bg-[#F5F7F2] hover:text-[#214535] font-semibold'
                  ]"
                  class="flex flex-1 items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors"
                >
                  <Icon :name="item.icon" class="size-[17px] shrink-0" :class="isActive(item.path) ? 'text-[#1C513B]' : 'text-[#8A9A8E]'" />
                  <span class="flex-1">{{ item.name }}</span>
                </NuxtLink>
                <!-- Expand toggle if has sub -->
                <button
                  v-if="item.sub && item.sub.length"
                  @click="toggleExpand(item.path)"
                  class="mr-1 flex size-6 items-center justify-center rounded-md text-[#A2AEA3] hover:bg-[#F0F2EE] hover:text-[#617469] transition-colors"
                >
                  <Icon
                    :name="expanded[item.path] ? 'lucide:chevron-down' : 'lucide:chevron-right'"
                    class="size-3.5 transition-transform"
                  />
                </button>
              </div>

              <!-- Sub items -->
              <div v-if="item.sub && expanded[item.path]" class="ml-3 mt-0.5 flex flex-col gap-0.5 border-l border-[#EDF0EB] pl-2.5">
                <NuxtLink
                  v-for="sub in item.sub"
                  :key="sub.path"
                  :to="sub.path"
                  :class="[
                    isActive(sub.path)
                      ? 'bg-[#E8F0E8] text-[#1C513B] font-bold'
                      : 'text-[#8A9A8E] hover:bg-[#F5F7F2] hover:text-[#214535] font-medium'
                  ]"
                  class="flex items-center gap-2 rounded-lg px-3 py-1.5 text-[12px] transition-colors"
                >
                  <Icon :name="sub.icon" class="size-[14px] shrink-0" />
                  {{ sub.name }}
                </NuxtLink>
              </div>
            </div>
          </template>
        </nav>
      </div>
    </div>

    <!-- User Profile Snippet (Bottom) -->
    <div class="border-t border-[#EDF0EB] p-4">
      <div class="flex cursor-pointer items-center gap-3 rounded-xl border border-transparent p-2 transition-colors hover:border-[#EDF0EB] hover:bg-[#F9FBF7]">
        <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E5AA85] text-sm font-bold text-[#4A2810]">
          AJ
        </div>
        <div class="min-w-0 flex-1">
          <p class="truncate text-[13px] font-bold text-[#173D32]">Arka Jenar</p>
          <p class="truncate text-[11px] font-semibold text-[#8A9A8E]">Admin Outlet</p>
        </div>
        <Icon name="lucide:chevrons-up-down" class="size-4 shrink-0 text-[#A2AEA3]" />
      </div>
    </div>
  </aside>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>