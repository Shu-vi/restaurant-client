<template>
  <div class="main">
    <div class="main-content">
      <slot>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.main{
  background-color: #fff8e7;
}
.main-content{
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
  background-color: #ffce85;
  flex-direction: column;
}
</style>