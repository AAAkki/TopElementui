<template>
  <div :class="tclass">
    <input
      :type="showPassword != true ? 'text' : 'password'"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
      v-if="!showTextarea"
    />
    <textarea
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
      contenteditable
      v-else
    >
    </textarea>
  </div>
</template>

<script>
export default {
  name: "t-input",
};
</script>
<script setup>
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: String | Number,
  placeholder: String | Number,
  disabled: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  showTextarea: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "",
  },
});
const tclass = ["t-input", `t-input-${props.size}`];
const input = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>
<style lang="scss" scoped>
.t-input {
  input,
  textarea {
    width: 600px;
    outline: none;
    border: 1px solid #dcdfe6;
    padding: 8px;
    font-size: 16px;
    color: #a8abb2;
    &::-webkit-input-placeholder {
      color: #a8abb2;
    }
    &:hover {
      border: 1px solid #c0c4cc;
    }
    &:focus {
      border: 1px solid #409eff;
    }
  }
  textarea {
    resize: vertical;
  }
  &-large {
    input,
    textarea {
      padding: 12px;
      font-size: 18px;
    }
  }
  &-small {
    input,
    textarea {
      padding: 5px;
      font-size: 12px;
    }
  }
}
</style>
