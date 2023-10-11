<template>
  <div :class="tclass">
    <input
      type="radio"
      :id="label"
      name="radio"
      :checked="checked"
      :disabled="disabled"
    /><label :for="label" style="vertical-align: middle"><slot></slot></label>
  </div>
</template>
<script>
export default {
  name: "t-radio",
};
</script>
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  checked: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
});
const tclass = [
  `t-radio`,
  `t-radio-${props.size}`,
  props.border ? `t-radio-border` : "",
];
</script>
<style lang="scss" scoped>
.t-radio {
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
  &-border {
    padding: 14px 6px;
    border: 1px solid #dcdfe6;
  }
}
</style>
