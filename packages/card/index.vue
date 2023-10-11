<template>
  <div :class="tclass">
    <slot name="header"></slot>
    <div class="header"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "t-card",
};
</script>
<script setup>
const props = defineProps({
  shadow: {
    type: String,
    default: "always",
  },
});
const tclass = [`t-card`, `t-card-${props.shadow}`];
</script>
<style lang="scss" scoped>
.t-card {
  border: 1px solid #e4e7ed;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  .header {
    border: 1px solid #e4e7ed;
  }
  &-hover {
    box-shadow: none;
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
  &-never {
    box-shadow: none;
  }
}
</style>
