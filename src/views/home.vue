<template>
  <div>
    <button @click="add">增加</button>
    <button @click="del">减少</button>
    <div>{{$store.getters.computedNum}}</div>
    <div>{{datacount}}</div>
    <div>{{count}}</div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: "home",
  data() {
    return {
      datacount: this.$store.state.count,
    };
  },
  computed: {
    ...mapState({
      count:'count'
    })
  },
  methods: {
    add() {
      this.$store.commit("madd");
    },
    del() {
      this.$store.commit("mdel");
    },
  },
};
</script>
<style >
</style>