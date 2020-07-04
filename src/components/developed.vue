<template>
    <!--地点管理-->
    <div>
        <div class="sites" v-if="sites">
            <div class="site row" @mouseenter="showEditSite($event)" v-on:mouseleave="hiddenEditSite($event)" v-for="(site,index) in sites" :key="index">
                <div class="left col-md-2">
                    <img :src="siteIMG(site.siteImg)" style="height: 100px;">
                </div>
                <div class="right col-md-10" style="position: relative">
                    <div class="title">景点编号:<span>{{site.id}}</span></div>
                    <div class="title">景点名称:<span>{{site.siteName}}</span></div>
                    <div class="col-md-10 intro" style="padding-left: 0">景点介绍:<span>{{site.siteDetail}}</span></div>
                    <div class="price">门票:<span>{{site.sitePrice}}</span>/天</div>
                    <button class="edit" @click="edit($event)" data-whatever="sofency" data-toggle="modal" data-target="#exampleModal"><a>编辑</a></button>
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
                                <label for="site-id" class="col-form-label"></label>
                                <input type="text" class="form-control" id="site-id">
                            </div>
                            <div class="form-group">
                                <label for="site-name" class="col-form-label">景点名称</label>
                                <input type="text" class="form-control" id="site-name">
                            </div>
                            <div class="form-group">
                                <label for="site-info" class="col-form-label">景点介绍</label>
                                <textarea type="text" class="form-control" id="site-info"/>
                            </div>
                            <div class="form-group">
                                <label for="site-price" class="col-form-label">景点价格</label>
                                <input type="text" class="form-control" id="site-price">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
                        <button type="button" class="btn btn-primary">修改</button>
                    </div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
    import $ from "jquery";
    import Service from '../request/Service'

    export default {
        name: "sites",
        mounted(){
            let that = this;
            Service.post("/getSites").then(response=>{
                that.sites = response.data.data
            })
        },
        computed:{
            siteIMG() {
                return function(img){
                    return img.toString().split(';')[0]
                }
            }
        },
        data(){
          return{
              sites:"",
          }
        },
        methods:{
            showEditSite:function (e) {
                $(e.currentTarget).children().children("button.edit").css({
                    display: "block"
                })
            },
            hiddenEditSite:function(e){
                $(e.currentTarget).children().children("button.edit").css({
                    display: "none"
                })
            },
            edit:function (e) {
                let title = $(e.currentTarget).siblings(".title").children("span").text();
                let intro = $(e.currentTarget).siblings('.intro').children("span").text();
                let price = $(e.currentTarget).siblings('.price').children("span").text();
                console.log(title,intro,price)
                $("#site-name").val(title)
                $("#site-info").val(intro)
                $("#site-price").val(price)
            },
        }
    }
</script>

<style scoped>
    .sites .site{
        font-size: 14px;
        color: #c0c0c0;
        background-color: white;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 10px;
    }
    .sites .site button{
        border: none;
        background: transparent;
    }
    .site .edit{
        position: absolute;
        top: 10px;
        right: 15px;
        display: none;
        cursor:pointer;
    }
</style>