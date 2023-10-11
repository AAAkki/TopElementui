<template>
  <div class="t-icon">
    <span :class="tclass"></span>
  </div>
</template>
<script>
export default {
  name: "t-icon",
};
</script>
<script setup>
const props = defineProps({
  /**
   * 图标类型
   */
  type: {
    type: String,
    default: "",
  },
});
const tclass = [`iconfont icon-${props.type}`];
</script>
<style lang="scss" scoped>
@import url("./assest/iconfont.css");
.t-icon {
  display: flex;
  flex-direction: column;
  text-align: center;
  span {
    font-size: 40px;
  }
}
</style>
