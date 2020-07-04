<template>
    <!--路线管理-->
    <div>
        <div class="header">
            <div class="choice">当前已开发的路线</div>
            <div class="choice">待开发</div>
        </div>
        <div class="routes" v-if="routes">
            <div class="route row" v-on:mouseenter="showEdit($event)" v-on:mouseleave="hiddenEdit($event)" v-for="(route,index) in routes" :key="index">
                <div class="left col-md-2">
                    <img :src="route.route.routeImg" style="height: 100px;">
                </div>
                <div class="right col-md-10" style="position: relative">
                    <div class="title">{{route.route.routeName}}</div>
                    <div class="sites" style="margin-top: 10px">
                        <span>起点---></span>
                        <span v-for="(site,index) in route.sites" :key="index" :data-siteId="site.id"><span>{{site.siteName}}</span>----></span>
                        <span>终点</span>
                    </div>
                    <div class="price" style="margin-top: 10px">
                        价格:<span>{{route.route.routePrice}}</span>元
                    </div>
                    <button class="edit" @click="edit($event)" :data-routeId="route.route.id" data-toggle="modal" data-target="#exampleModal"><a>编辑</a></button>
                </div>
            </div>
        </div>

        <!--模态框-->
        <div style="z-index: 9999" class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">编辑路线</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group" style="display: none">
                                <label for="route-id" class="col-form-label">Recipient:</label>
                                <input type="text" class="form-control" id="route-id">
                            </div>
                            <div class="form-group">
                                <label for="route-name" class="col-form-label">线路名称</label>
                                <input type="text" class="form-control" id="route-name">
                            </div>
                            <div class="form-group">
                                <label for="site-list" class="col-form-label">景点列表</label>
                                <input type="text" class="form-control" id="site-list" v-model="changeIds" placeholder="请输入对应景点ID,如果多个ID请用;分隔开">
                            </div>
                            <div class="form-group">
                                <label for="route-price" class="col-form-label">路线价格</label>
                                <input type="text" class="form-control" id="route-price">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary" @click="changeRoute()">修改</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import Qs from 'qs';
    import Service from '../request/Service';
    export default {
        name: "routes",
        data(){
            return{
                routes:"",//路线的信息,
                changeIds:"",
            }
        },
        watch:{
            changeIds(value){
                this.changeIds=value;
                this.siteIds=value.replace(/;/g,"---")
            }
        },
        mounted:function(){
            let data = Qs.stringify({
                page: 1
            })
            let that = this
            Service.post("/getHotRoutes",data).then(response=>{
               that.routes = response.data.data;
            })
        },
        methods:{
            showEdit:function (e) {
               $(e.currentTarget).children().children("button.edit").css({
                   display: "block"
               })
            },
            hiddenEdit:function(e){
                $(e.currentTarget).children().children("button.edit").css({
                    display: "none"
                })
            },
            changeRoute:function(){
                let routeId = $("#route-id").val();
                let routeName = $("#route-name").val();
                let siteList = $("#site-list").val();
                let routePrice = $("#route-price").val();
                let data=Qs.stringify({
                    routeId:routeId,
                    routeName:routeName,
                    siteList:siteList,
                    routePrice:routePrice,
                })
                Service.post("/changeRoute",data).then(response=>{
                    if(response.data.code===200){
                        $("#exampleModal").modal("hide")
                        window.location.reload()
                    }else{
                        alert(response.data.msg)
                    }

                }).catch(function (error){
                    console.log(error)
                })
            },
            edit:function (e) {
                let title = $(e.currentTarget).siblings(".title").text();
                let sites = $(e.currentTarget).siblings('.sites').children();
                let site = this.getSite(sites);
                let price = $(e.currentTarget).siblings('.price').children("span").text();
                console.log(title,site,price)
                //获取景点的列表Id;
                let siteIds="";
                for(let  i = 0;i<site.length;i++){
                    siteIds= siteIds+""+site[i]+";"
                }
                siteIds = siteIds.substring(0,siteIds.length-1);
                $("#site-list").val(siteIds);
                $("#route-id").val($(e.currentTarget).attr("data-routeId"))
                $("#route-name").val(title);
                $("#route-price").val(price);
            },
            getSite:function(sites){
                let site = new Array();
                for(let i = 1;i<sites.length-1;i++){
                    site[i-1] = $(sites[i]).attr("data-siteId")
                    console.log(site[i-1])
                }
                return site;
            }
        }
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
    .routes .route{
        font-size: 14px;
        color: #c0c0c0;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .routes .route button{
        border: none;
        background: transparent;
    }
    .route .edit{
        position: absolute;
        top: 10px;
        right: 15px;
        display: none;
        cursor:pointer;
    }
</style>