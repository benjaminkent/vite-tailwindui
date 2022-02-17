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
      ></div>
    </div>
    <div v-if="hasTarget" class="target">
      <p class="text-sm">Target</p>
      <p class="text-sm font-bold">{{ target }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const props = defineProps<{
  progress: number
  target: number
  hasTarget: boolean
}>()

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
  top: 74px;
  right: 21px;
  transform: rotate(144deg);
}
.target {
  position: absolute;
  right: -15px;
  top: 20px;
}
.target-line {
  width: 68px;
  position: absolute;
  top: 46px;
  left: 52px;
  transform: rotate(61deg);
}
.target {
  position: absolute;
  left: -160px;
  top: -30px;
}
</style>
