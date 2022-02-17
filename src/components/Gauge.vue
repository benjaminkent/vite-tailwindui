<template>
  <div class="progress">
    <div class="barOverflow">
      <div class="bar"></div>
    </div>
    <span>10</span>%
  </div>

  <div class="progress">
    <div class="barOverflow">
      <div class="bar"></div>
    </div>
    <span>100</span>%
  </div>

  <div class="progress">
    <div class="barOverflow">
      <div class="bar"></div>
    </div>
    <span>34</span>%
  </div>

  <div class="progress">
    <div class="barOverflow">
      <div class="bar"></div>
    </div>
    <span>56.5</span>%
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.progress {
  position: relative;
  margin: 4px;
  float: left;
  text-align: center;
}
.barOverflow {
  /* Wraps the rotating .bar */
  position: relative;
  overflow: hidden; /* Comment this line to understand the trick */
  width: 90px;
  height: 45px; /* Half circle (overflow) */
  margin-bottom: -14px; /* bring the numbers up */
}
.bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
  height: 90px; /* full circle! */
  border-radius: 50%;
  box-sizing: border-box;
  border: 5px solid #eee; /* half gray, */
  border-bottom-color: #0bf; /* half azure */
  border-right-color: #0bf;
}
</style>
