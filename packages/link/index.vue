<template>
  <div :class="tclass">
    <a :href="href" :target="target"><slot></slot></a>
  </div>
</template>
<script>
export default {
  name: "t-link",
};
</script>
<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  target: {
    type: String,
    default: "_self",
  },
  href: {
    type: String,
    default: "javascript:;",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  notUnderline: {
    type: Boolean,
    default: false,
  },
});
const tclass = [
  `t-link`,
  `t-link-${props.type}`,
  props.disabled == true ? `t-link-disabled` : "",
  props.notUnderline == true ? `t-link-notUnderline` : "",
];
</script>
<style lang="scss" scoped>
.t-link {
  a {
    text-decoration: none;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }
  &-default {
    a {
      color: #76787b;
      &:hover {
        color: #46a1ff;
      }
    }
  }
  &-primary {
    a {
      color: #46a1ff;
    }
  }
  &-success {
    a {
      color: #67c23a;
    }
  }
  &-info {
    a {
      color: #909399;
    }
  }
  &-warning {
    a {
      color: #e6a23c;
    }
  }
  &-danger {
    a {
      color: #f56c6c;
    }
  }
  &-disabled {
    a {
      pointer-events: none;
      filter: alpha(opacity=50);
      -moz-opacity: 0.5;
      opacity: 0.5;
    }
  }
  &-notUnderline {
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
