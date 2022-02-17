<template>
  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="(component, index) in components"
      :key="index"
      class="col-span-1 bg-white rounded-lg shadow flex flex-col items-center py-5"
    >
      <h1 class="text-xl font-bold mb-5">{{ component.name }}</h1>
      <component :is="component.component" v-bind="component.props" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import Gauge from '@components/Gauge.vue'

const components = [
  {
    name: 'Gauge',
    component: Gauge,
    props: {
      progress: 50,
      target: 34,
    },
  },
]
</script>
