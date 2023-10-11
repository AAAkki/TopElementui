<template>
  <div :class="tclass">
    <input
      type="checkbox"
      :checked="checked"
      :id="label"
      :disabled="disabled"
    /><label :for="label" style="vertical-align: middle">{{ label }}</label>
  </div>
</template>
<script>
export default {
  name: "t-checkbox",
};
</script>
<script setup>
const props = defineProps({
  checked: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const tclass = ["t-checkbox", `t-checkbox-${props.size}`];
</script>
<style lang="scss" scoped>
.t-checkbox {
  font-size: 14px;
  input {
    vertical-align: middle;
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
  &-large {
    font-size: 16px;
    input {
      width: 16px;
      height: 16px;
    }
  }
  &-small {
    font-size: 12px;
    input {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
