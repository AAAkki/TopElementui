<template>
  <div :class="tclass">
    <label for="checkbox" style="vertical-align: middle">{{ activeText }}</label
    ><input
      type="checkbox"
      id="checkbox"
      ref="checkbox"
      :checked="checked"
      @click="change"
      style="vertical-align: middle"
      :disabled="disabled"
    /><label for="checkbox" style="vertical-align: middle">{{
      inactiveText
    }}</label>
  </div>
</template>
<script>
export default {
  name: "t-switch",
};
</script>
<script setup>
import { ref, onMounted } from "vue";
const checked = ref(false);
const checkbox = ref(null);
onMounted(() => {
  checkbox.value.style.background = props.offcolor;
});
const change = () => {
  checked.value = !checked.value;
  if (checked.value != true) {
    checkbox.value.style.background = props.offcolor;
  } else {
    checkbox.value.style.background = props.oncolor;
  }
};

const props = defineProps({
  oncolor: {
    type: String,
    default: "#409eff",
  },
  offcolor: {
    type: String,
    default: "#ccc",
  },
  activeText: {
    type: String,
    default: "",
  },
  inactiveText: { type: String, default: "" },
  size: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const tclass = [`t-switch`, `t-switch-${props.size}`];
</script>
<style lang="scss" scoped>
.t-switch {
  input {
    outline: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    position: relative;
    width: 40px;
    height: 20px;
    margin: 0 8px;
    background: #ccc;
    border-radius: 10px;
    transition: border-color 0.3s, background-color 0.3s;
    &::after {
      content: "";
      display: inline-block;
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background: #fff;
      box-shadow: 0, 0, 2px, #999;
      transition: 0.4s;
      top: 2px;
      position: absolute;
      left: 2px;
    }
    &:checked {
      background: #409eff;
    }
    &:checked::after {
      content: "";
      position: absolute;
      left: 55%;
      top: 2px;
    }
  }
  &-large {
    font-size: 16px;
    input {
      width: 50px;
      height: 24px;
      border-radius: 14px;
      &::after {
        width: 1.25rem;
        height: 1.25rem;
      }
    }
  }
  &-small {
    font-size: 12px;
    input {
      width: 30px;
      height: 16px;
      border-radius: 8px;
      &::after {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
  }
}
</style>
