<template>
  <div :class="tclass">
    <button :disabled="props.disabled"><slot></slot></button>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "normal",
  },
});
const tclass = computed(() => {
  return [
    `t-button`,
    props.plain == true
      ? `t-button-${props.type}-plain`
      : `t-button-${props.type}`,
    props.round == true ? `t-button-round` : "",
    props.disabled == true ? `t-button-disabled` : "",
    props.text == true ? `t-button-text-${props.type}` : "",
    `t-button-${props.size}`,
  ];
});
</script>
<script>
export default {
  name: "t-button",
};
</script>
<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.t-button {
  button {
    padding: 8px 15px;
    border-radius: 4px;
    font-size: 14px;
    color: #fbfefa;
  }
  &-large {
    button {
      font-size: 16px;
      padding: 12px 19px;
    }
  }
  &-small {
    button {
      font-size: 12px;
      padding: 5px 11px;
    }
  }
}
.t-button-round {
  button {
    border-radius: 40px;
  }
}
.t-button-disabled {
  button {
    opacity: 0.6;
    pointer-events: none;
    // cursor: not-allowed;
  }
}
.t-button-default {
  button {
    background: #ffffff;
    color: #76787b;
    border: 1px solid #dcdfe6;
    &:hover {
      background-color: #ecf5ff;
      color: #4aa3ff;
      border: 1px solid #c6e2ff;
    }
  }
}
.t-button-default-plain {
  button {
    background: #ffffff;
    color: #76787b;
    border: 1px solid #dcdfe6;
    &:hover {
      color: #47a1ff;
      border: 1px solid #47a1ff;
    }
  }
}
.t-button-success {
  button {
    background: #67c23a;
    &:hover {
      opacity: 0.8;
    }
  }
}
.t-button-success-plain {
  button {
    background: #f0f9eb;
    color: #67c23a;
    border: 1px solid #b3e19d;
    &:hover {
      color: #fbfefa;
      background-color: #67c23a;
    }
  }
}
.t-button-primary {
  button {
    background: #409eff;
    &:hover {
      opacity: 0.8;
    }
  }
}
.t-button-primary-plain {
  button {
    background: #ecf5ff;
    color: #409eff;
    border: 1px solid #a0cfff;
    &:hover {
      color: #fbfefa;
      background-color: #409eff;
    }
  }
}
.t-button-warning {
  button {
    background: #e6a23c;
    &:hover {
      opacity: 0.8;
    }
  }
}
.t-button-warning-plain {
  button {
    background: #fdf6ec;
    color: #e9ad53;
    border: 1px solid #f3d19e;
    &:hover {
      color: #fbfefa;
      background-color: #e6a23c;
    }
  }
}
.t-button-danger {
  button {
    background: #f56c6c;
    &:hover {
      opacity: 0.8;
    }
  }
}
.t-button-danger-plain {
  button {
    background: #fef0f0;
    color: #f56c6c;
    border: 1px solid #fab6b6;
    &:hover {
      color: #fbfefa;
      background-color: #f56c6c;
    }
  }
}
.t-button-info {
  button {
    background: #909399;
    &:hover {
      opacity: 0.8;
    }
  }
}
.t-button-info-plain {
  button {
    background: #f4f4f5;
    color: #999ca2;
    border: 1px solid #c8c9cc;
    &:hover {
      color: #fbfefa;
      background-color: #909399;
    }
  }
}
.t-button-text {
  &-default {
    button {
      color: #76787b;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #76787b;
      }
    }
  }
  &-primary {
    button {
      color: #409eff;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #409eff;
      }
    }
  }
  &-success {
    button {
      color: #67c23a;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #67c23a;
      }
    }
  }
  &-warning {
    button {
      color: #e6a23c;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #e6a23c;
      }
    }
  }
  &-danger {
    button {
      color: #f56c6c;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #f56c6c;
      }
    }
  }
  &-info {
    button {
      color: #909399;
      background: none;
      border: 0;
      &:hover {
        background: #f5f7fa;
        border: 0;
        color: #909399;
      }
    }
  }
}
</style>
