<template>
  <div class="progress my-5">
    <div class="barOverflow">
      <div
        class="bar"
        :style="`transform: rotate(${45 + localProgress * 1.8}deg);`"
      ></div>
      <div
        v-if="hasTarget"
        :class="[
          'target-line border-t-3',
          'border-dashed',
          { 'border-t-black': isBorderBlack, 'border-t-white': !isBorderBlack },
        ]"
        :style="`top: ${targetAttrs?.targetLine.top}px; left: ${targetAttrs?.targetLine.left}px; transform: rotate(${targetAttrs?.targetLine.rotate}deg);`"
      ></div>
    </div>
    <div
      v-if="hasTarget"
      class="target-copy"
      :style="`top: ${targetAttrs?.targetCopy.top}px; left: ${targetAttrs?.targetCopy.left}px;`"
    >
      <p class="text-sm">Target</p>
      <p class="text-sm font-bold">{{ target }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

interface TargetAttributes {
  targetLine: {
    top: number
    left: number
    rotate: number
  }
  targetCopy: {
    top: number
    left: number
  }
}

const props = defineProps<{
  progress: number
  target: number
  hasTarget: boolean
}>()

const targetAttrs = computed(() => {
  const attrs = ref<TargetAttributes | null>(null)

  switch (props.target) {
    case 80:
      attrs.value = {
        targetLine: {
          top: 74,
          left: 180,
          rotate: 144,
        },
        targetCopy: {
          top: 20,
          left: 250,
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

const isBorderBlack = computed(() => localProgress.value <= props.target)

const localProgress = ref(0)

function setProgress(p: number) {
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
  position: relative;
  overflow: hidden;
  width: 272px;
  height: 130px;
}
.bar {
  position: absolute;
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
