<template>
    <div>
        <!-- Left Panel -->
        <aside id="left-panel" class="left-panel">
            <nav class="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" class="main-menu collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <router-link to="/"><i class="menu-icon fa fa-laptop"></i>旅游课设 </router-link>
                        </li>
                        <li class="menu-title">菜单列表</li><!-- /.menu-title -->
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-cogs"></i>网站信息</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><router-link to="/routes"><i class="fa fa-puzzle-piece"></i>路线管理</router-link></li>
                                <li><router-link to="/developSite"><i class="fa fa-id-badge"></i>地点管理</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-table"></i>消息管理</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><router-link to="/message"><i class="fa fa-table"></i>路线评价</router-link></li>
                                <li><router-link to="/myReply"><i class="fa fa-table"></i>我的回复</router-link></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="menu-icon fa fa-th"></i>订单管理</a>
                            <ul class="sub-menu children dropdown-menu">
                                <li><router-link to="/"><i class="menu-icon fa fa-th"></i>退款处理</router-link></li>
                                <li><router-link to="/order"><i class="menu-icon fa fa-flag-o"></i>订单详情</router-link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
        <div id="right-panel" class="right-panel">
            <header id="header" class="header">
                <div class="top-left">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="./"><img src="../static/images/logo.png" alt="Logo"></a>
                        <a class="navbar-brand hidden" href="./"><img src="../static/images/logo2.png" alt="Logo"></a>
                    </div>
                </div>
                <div class="top-right">
                    <div class="header-menu">
                        <div class="user-area dropdown float-right">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="user-avatar rounded-circle" src="../static/images/admin.jpg" alt="User Avatar">
                            </a>
                            <div class="user-menu dropdown-menu">
                                <a class="nav-link" href="#"><i class="fa fa -cog"></i>Settings</a>
                                <a class="nav-link" href="#"><i class="fa fa-power -off"></i>Logout</a>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
            <div class="content">
                <router-view/>
            </div>
            <div class="clearfix"></div>
            <footer class="site-footer">
                <div class="footer-inner bg-white">
                    <div class="row">
                        <div class="col-sm-6">
                            Copyright &copy; 2018 Ela Admin
                        </div>
                        <div class="col-sm-6 text-right">
                            More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
    @import "../../node_modules/normalize.css";
    @import "../../node_modules/bootstrap/dist/css/bootstrap.css";
    @import "../../node_modules/font-awesome/css/font-awesome.min.css";
    @import "../../node_modules/pixeden-stroke-7-icon/pe-icon-7-stroke/dist/pe-icon-7-stroke.min.css";
    @import "../../node_modules/flag-icon-css/css/flag-icon.min.css";
    @import "../static/css/cs-skin-elastic.css";
    @import "../static/css/style.css";
    @import "../../node_modules/chartist/dist/chartist.css";
    @import "../../node_modules/jqvmap/dist/jqvmap.min.css";
    #weatherWidget .currentDesc {
        color: #ffffff!important;
    }
    .traffic-chart {
        min-height: 335px;
    }
    #flotPie1 td {
        padding:3px;
    }
    #flotPie1 table {
        top: 20px!important;
        right: -10px!important;
    }
</style>