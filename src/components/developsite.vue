<template>
    <div>
        <div class="header">
            <router-link class="choice" to="/developSite/developed">当前已开发的地点</router-link>
            <router-link class="choice" to="/developSite/developNew">开发新地点</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "developsite"
    }
</script>

<style scoped>
    .header{
        display: flex;
        font-size: 21px;
        color: #c0c0c0;
        font-weight: 400;
        margin-bottom: 30px;
    }
    .header .choice{
        margin-right: 20px;
        cursor: pointer;
    }
</style>