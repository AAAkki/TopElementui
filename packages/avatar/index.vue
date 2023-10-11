<template>
  <div class="t-avatar">
    <img :src="src" alt="" ref="img" />
  </div>
</template>
<script>
export default {
  name: "t-avatar",
};
</script>
<script setup>
import { ref, onMounted } from "vue";
const img = ref(null);
onMounted(() => {
  img.value.style.width = props.size + "px";
  img.value.style.height = props.size + "px";
  img.value.style.objectFit = props.state;
});
const props = defineProps({
  size: {
    type: Number,
    default: 20,
  },
  src: {
    type: String,
    default: "",
  },
  shape: {
    type: String,
    default: "circle",
  },
  state: {
    type: String,
    default: '',
  },
});
const tclass = [`t-avatar`, `t-avatar-${props.shape}`];
</script>
<style lang="scss" scoped>
.t-avatar {
  &-circle {
    img {
      border-radius: 50%;
    }
  }
  &-square {
    img {
      border-radius: 0;
    }
  }
}
</style>
