<template>
    <div>
       <el-button>默认按钮ddddddddddddd</el-button>
        <div class="container">
            <h1>111</h1>
            <h2>222</h2>
            <h3>3333</h3>
            <a href="#">这个是带连接的标签</a>
        </div>
        <div class="fc">这个是颜色</div>
    </div>
</template>
<script>
var mixin = {
    created() {
        console.log("混入了一个方法")
    },
}

export default {
    name:'Elem',
   mixins:[mixin]
}
</script>
<style lang="scss">
$font-color:#e43;
.fc{
    color: $font-color;
}
</style>