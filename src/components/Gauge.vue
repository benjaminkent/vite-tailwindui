<template>
  <div class="progress my-5">
    <div class="barOverflow">
      <div
        class="bar"
        :style="`transform: rotate(${45 + progress * 1.8}deg);`"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const progress = ref(0)

function setProgress(p: number) {
  progress.value = p
}

onMounted(() => {
  setTimeout(() => {
    setProgress(80)
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
</style>
