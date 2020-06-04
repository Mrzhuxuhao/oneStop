<template>
    <div class="notFound">
        <div class="wrap">
            <div class="title">404</div>
            <div class="info">很抱歉, 您访问的页面可能搬家了！</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    components: {
    }
}
</script>
<style lang="scss" scoped>
.notFound{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrap {
    .title {
        color: #0983df;
        // prettier-ignore
        font-size: 50px;
        text-align: center;
        margin-bottom: 30px;
    }
    .info {
        color: #666;
    }
}
</style>

