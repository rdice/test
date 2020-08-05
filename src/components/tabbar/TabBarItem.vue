<template>
  <div :style="isActiveColor" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon1"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
     
    };
  },
  computed: {
    isActiveColor() {
      return this.$route.path==this.path? { color: "red" } : {};
    },
    isActive(){
        return this.$route.path==this.path?true:false
    }
  },
  created() {},
  methods: {
    itemClick() {
        this.$router.push(this.path)
    }
  }
};
</script>
<style >
</style>