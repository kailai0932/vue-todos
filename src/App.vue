<template>
    <div id="app">
        <div class="tabs">
            <ul>
                <li>
                    <router-link :to="{name : 'Home'}" tag="li">
                        <div><img src="./assets/images/home.svg"></div>
                        <div>首页</div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import './assets/less/site.less'
    export default {
        name: 'app',
    }
</script>