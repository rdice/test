<template>
    <div class="tabbar">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style >
    .tabbar{
        display: flex;
        justify-content: space-around;
    }
</style>