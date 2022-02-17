<template>
  <div class="progress my-5">
    <div class="barOverflow">
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.progress {
  position: relative;
  float: left;
  text-align: center;
}
.barOverflow {
  /* Wraps the rotating .bar */
  position: relative;
  overflow: hidden; /* Comment this line to understand the trick */
  width: 272px;
  height: 130px; /* Half circle (overflow) */
  margin-bottom: -14px; /* bring the numbers up */
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 272px;
  height: 272px; /* full circle! */
  border-radius: 50%;
  box-sizing: border-box;
  border: 70px solid #eee; /* half gray, */
  border-bottom-color: #0bf; /* half azure */
  border-right-color: #0bf;
  transform: rotate(45deg);
}
</style>
