<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-zinc-800"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="pr-5">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    item.current.value
                      ? 'bg-lime-800 text-white'
                      : 'text-gray-200 hover:bg-lime-600',
                    'group flex items-center px-3 py-3 text-base font-medium rounded-r-md',
                  ]"
                >
                  <fa-icon
                    :icon="item.icon"
                    class="mr-4 flex-shrink-0 h-6 w-6 text-lime-300"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow pt-5 bg-zinc-800 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
            alt="Workflow"
          />
        </div>
        <div class="mt-5 flex-1 flex flex-col">
          <nav class="flex-1 pr-5 pb-4">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.to"
              :class="[
                item.current.value
                  ? ' bg-lime-800 text-white'
                  : 'text-gray-200 hover:bg-lime-600',
                'group flex items-center px-3 py-3 text-sm font-medium rounded-r-md',
              ]"
            >
              <fa-icon
                :icon="item.icon"
                class="mr-3 flex-shrink-0 h-6 w-6 text-lime-300"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </nav>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div class="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  class="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </div>
            </form>
          </div>
          <div class="ml-4 flex items-center md:ml-6">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <main>
        <div>
          <div class="mx-auto px-4 sm:px-6 md:px-8 py-3 bg-slate-500">
            <h1 class="text-2xl font-semibold text-white capitalize">
              {{ pageName }}
            </h1>
          </div>
          <div class="mx-auto p-4 sm:px-6 md:px-8">
            <slot></slot>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import {
  Dialog,
  DialogOverlay,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { BellIcon, MenuAlt2Icon, XIcon } from '@heroicons/vue/outline'
import { SearchIcon } from '@heroicons/vue/solid'

const sidebarOpen = ref(false)
const route = useRoute()
const pageName = computed(() => route.name)
const path = computed(() => route.path)

const navigation = [
  {
    name: 'Dashboard',
    to: '/',
    icon: ['fas', 'chart-line'],
    current: ref(false),
  },
  {
    name: 'Projects',
    to: '/projects',
    icon: ['fas', 'diagram-project'],
    current: ref(false),
  },
  {
    name: 'Reports',
    to: '/reports',
    icon: ['fas', 'file-lines'],
    current: ref(false),
  },
  {
    name: 'Components',
    to: '/components',
    icon: ['fas', 'code'],
    current: ref(false),
  },
]

watchEffect(() => {
  navigation.forEach((navItem) => {
    if (navItem.to === path.value) {
      navItem.current.value = true
      return
    }

    navItem.current.value = false
  })
})
</script>
