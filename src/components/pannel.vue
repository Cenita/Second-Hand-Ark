<template>
    <div class="panel">
      <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "pannel"
  };
</script>

<style scoped>
  .panel{
    background: white;
    border-radius: 10px;
    width: 95%;
    margin: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #ececec;
  }
</style>
