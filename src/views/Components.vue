<template>
  <ul role="list" class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
    <li
      v-for="(component, index) in components"
      :key="index"
      class="col-span-1 bg-white rounded-lg shadow flex flex-col items-center py-5"
    >
      <h1 class="text-xl font-bold mb-7">{{ component.name }}</h1>
      <component :is="component.component" v-bind="component.props" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import Gauge from '@components/Gauge.vue'

const components = [
  {
    name: 'Gauge - No Target',
    component: Gauge,
    props: {
      progress: 42,
      target: null,
      hasTarget: false,
      title: 'Turnover (In Days)',
      isTrendingUp: true,
      hasTrend: false,
    },
  },
  {
    name: 'Gauge - 80% Target',
    component: Gauge,
    props: {
      progress: 70,
      target: 80,
      hasTarget: true,
      title: 'EIP',
      isTrendingUp: true,
      hasTrend: true,
    },
  },
  {
    name: 'Gauge - 34% Target',
    component: Gauge,
    props: {
      progress: 58,
      target: 34,
      hasTarget: true,
      title: 'WHS',
      isTrendingUp: false,
      hasTrend: true,
    },
  },
]
</script>
