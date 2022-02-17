<template>
  <div class="progress mt-5">
    <div class="barOverflow grid grid-cols-3 grid-rows-3">
      <div
        class="bar col-start-1 col-end-4 row-start-1 row-end-4"
        :style="`transform: rotate(${45 + localProgress * 1.8}deg);`"
      ></div>
      <div
        class="text-2xl font-bold row-start-3 row-end-4 col-start-2 col-end-3 mt-2"
      >
        <h2>{{ localProgress }}</h2>
      </div>
    </div>
    <div
      v-if="hasTarget && target !== null"
      :class="[
        'target-line border-t-3',
        'border-dashed',
        { 'border-t-black': isBorderBlack, 'border-t-white': !isBorderBlack },
      ]"
      :style="`top: ${targetAttrs?.targetLine.top}px; left: ${targetAttrs?.targetLine.left}px; transform: rotate(${targetAttrs?.targetLine.rotate}deg);`"
    ></div>
    <div
      v-if="hasTarget && target !== null"
      class="target-copy"
      :style="`top: ${targetAttrs?.targetCopy.top}px; left: ${targetAttrs?.targetCopy.left}px;`"
    >
      <p class="text-sm">Target</p>
      <p class="text-sm font-bold">{{ target }}</p>
    </div>
    <div class="flex items-center mt-5 justify-center">
      <h1 :class="['text-lg', 'font-bold', 'mr-3', { 'ml-6': hasTrend }]">
        {{ title }}
      </h1>
      <div v-if="hasTrend">
        <fa-icon
          v-if="isTrendingUp"
          :icon="['fas', 'arrow-up']"
          class="text-green-500"
        />
        <fa-icon v-else :icon="['fas', 'arrow-down']" class="text-red-500" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { TargetAttributes } from '@interfaces'

const props = defineProps<{
  progress: number
  target: number | null
  hasTarget: boolean
  title: string
  isTrendingUp: boolean
  hasTrend: boolean
}>()

const targetAttrs = computed(() => {
  const attrs = ref<TargetAttributes | null>(null)

  switch (props.target) {
    case 80:
      attrs.value = {
        targetLine: {
          top: 74,
          left: 183,
          rotate: 144,
        },
        targetCopy: {
          top: 20,
          left: 248,
        },
      }
      break
    case 34:
      attrs.value = {
        targetLine: {
          top: 46,
          left: 52,
          rotate: 61,
        },
        targetCopy: {
          top: -30,
          left: 40,
        },
      }
      break
  }

  return attrs.value
})

const isBorderBlack = computed(() => localProgress.value <= (props.target ?? 0))

const localProgress = ref(0)

function setProgress(p: number) {
  if (p > 100) {
    localProgress.value = 100
    return
  }
  localProgress.value = p
}

onMounted(() => {
  setTimeout(() => {
    setProgress(props.progress)
  }, 1)
})
</script>

<style scoped lang="scss">
.progress {
  position: relative;
  text-align: center;
}
.barOverflow {
  overflow: hidden;
  width: 272px;
  height: 130px;
}
.bar {
  top: 0;
  left: 0;
  width: 272px;
  height: 272px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 70px solid #eee;
  border-bottom-color: #6b9f00;
  border-right-color: #6b9f00;
  transition: all 1s ease-in-out;
}
.target-line {
  width: 68px;
  position: absolute;
}
.target-copy {
  position: absolute;
}
</style>
