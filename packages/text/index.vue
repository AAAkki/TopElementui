<template>
  <div :class="tclass">
    <text><slot></slot></text>
  </div>
</template>

<script>
export default {
  name: "t-text",
};
</script>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "",
  },
  truncated: {
    type: Boolean,
    default: false,
  },
});
const tclass = [
  `t-text`,
  `t-text-${props.type}`,
  `t-text-${props.size}`,
  props.truncated == true ? `t-text-truncated` : "",
];
</script>
<style lang="scss" scoped>
.t-text {
  text {
    font-size: 14px;
  }
  &-primary {
    text {
      color: #46a1ff;
    }
  }
  &-success {
    text {
      color: #67c23a;
    }
  }
  &-info {
    text {
      color: #909399;
    }
  }
  &-warning {
    text {
      color: #e6a23c;
    }
  }
  &-danger {
    text {
      color: #f56c6c;
    }
  }
  &-large {
    text {
      font-size: 16px;
    }
  }
  &-small {
    text {
      font-size: 12px;
    }
  }
  &-truncated {
    width: 100px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
  }
}
</style>
