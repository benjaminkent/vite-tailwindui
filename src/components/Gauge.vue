<template>
  <div class="progress my-5">
    <div class="barOverflow">
      <div
        class="bar"
        :style="`transform: rotate(${45 + progress * 1.8}deg);`"
      ></div>
      <div
        :class="[
          'target-line border-t-3',
          'border-dashed',
          { 'border-t-black': isBorderBlack, 'border-t-white': !isBorderBlack },
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

const progress = ref(0)

function setProgress(p: number) {
  progress.value = p
}

const isBorderBlack = computed(() => progress.value <= 80)

onMounted(() => {
  setTimeout(() => {
    setProgress(50)
  }, 1)
})
</script>

<style scoped lang="scss">
.progress {
  position: relative;
  float: left;
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
  // border-top: 3px dashed white;
  width: 68px;
  position: absolute;
  top: 74px;
  right: 21px;
  transform: rotate(144deg);
}
</style>
