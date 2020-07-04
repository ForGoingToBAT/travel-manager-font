<template>
    <div>
        <form>
            <div class="form-group row">
                <label for="siteName" class="col-md-2 col-form-label">地点名字</label>
                <div class="col-md-10">
                    <input type="text"  class="form-control" id="siteName">
                </div>
            </div>
            <div class="form-group row">
                <label for="siteDescripe" class="col-md-2 col-form-label">景点描述</label>
                <div class="col-md-10">
                    <input type="text" class="form-control" id="siteDescripe">
                </div>
            </div>
            <div class="row">
                <label for="uploadImgs" class="col-md-2 col-form-label">上传图片</label>
                <div class="col-md-10">
                    <div class="upload-img-btn">
                        <i></i>
                        <input type="file" class="upload-img" id="uploadImgs" @change="addImages($event)" multiple="multiple"/>
                        <div id="img-preview" class="img-preview d-flex"></div>
                    </div>
                    <small>最多上传4张</small>
                </div>
            </div>
            <div class="form-group row">
                <label for="siteDetail" class="col-md-2 col-form-label">景点详情</label>
                <div class="col-md-10">
                    <input type="text"  class="form-control" id="siteDetail">
                </div>
            </div>
            <div class="form-group row">
                <label for="playDays" class="col-md-2 col-form-label">建议游玩时间</label>
                <div class="col-md-10">
                    <input type="text" class="form-control" id="playDays">
                </div>
            </div>
            <div class="form-group row">
                <label for="openTime" class="col-md-2 col-form-label">开放时间</label>
                <div class="col-md-10">
                    <input type="text"  class="form-control" id="openTime" >
                </div>
            </div>
            <div class="form-group row">
                <label for="sitePrice" class="col-md-2 col-form-label">门票价格</label>
                <div class="col-md-10">
                    <input type="number" class="form-control" id="sitePrice">
                </div>
            </div>
            <button type="button" class="btn btn-primary" @click="addSites()">Submit</button>
        </form>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Service from "@/request/Service";
    import Qs from 'qs';
    export default {
        name: "developNew",
        methods:{
            addImages: function (event) {
                let imgFiles = event.target.files;
                console.log(imgFiles);
                let length = $("#img-preview").children().length;
                if (length >= 4) {
                    alert("超过最大上传照片的数量");
                } else {
                    for (let i = 0; i < imgFiles.length; i++) {
                        let filePath = imgFiles[i].name;
                        let fileFormat = filePath.split(".")[1].toLowerCase();
                        if (!fileFormat.match(/png|jpg|jpeg/)) {
                            alert("上传错误,文件格式必须为：png/jpg/jpeg");
                            return;
                        }
                        //请求后台上传图片 拿到地址
                        let formdata = new FormData();// 创建form对象
                        formdata.append('image',imgFiles[i],imgFiles[i].name);
                        $.ajax({
                            url: "http://106.12.208.167:8088/upload",
                            type:"post",
                            contentType: false,
                            processData: false,
                            data: formdata,
                            success: function (data) {
                                if (data.status === 200) {
                                    let $divparent = $(
                                        "<div class='simple-img' style='position:relative;width: 100px'></div>"
                                    );
                                    let $img = $(
                                        "<img src='" + data.url + "' style='width:100px;height:100px;border:1px solid #c0c0c0;'/>"
                                    );
                                    $divparent.append($img);
                                    let preview = $("#img-preview");
                                    preview.append($divparent); //添加孩子结点
                                }
                            },
                        })
                    }
                }
            },
            addSites:function () {
                let preview = $("#img-preview");
                let children = preview.children(".simple-img");
                let image="";
                let siteName = $("#sitePrice").val();
                let siteDescripe = $("#siteDescripe").val();
                let siteDetail =$("#siteDetail").val();
                let playDays = $("#playDays").val();
                let openTime = $("#openTime").val();
                let sitePrice = $("#sitePrice").val();
                if(children==null){
                    alert("请添加地点的图片")
                }
                if(siteName&&siteDescripe&&siteDetail&&playDays&&openTime&&sitePrice){
                    for(let i=0;i<children.length;i++){
                        let attr = children.eq(i).children("img").attr("src");
                        image=image + attr+";"
                    }
                    let data = Qs.stringify({
                        image:image,
                        siteName:siteName,
                        siteDescripe:siteDescripe,
                        siteDetail:siteDetail,
                        playDays:playDays,
                        openTime:openTime,
                        sitePrice:sitePrice,
                    });
                    Service.post("/addSites",data).then(response=>{
                        alert(response.data.msg)
                    }).catch(function (error) {
                        console.log(error)
                    })

                }else{
                    alert("请填写完整的信息");
                }

            }
        }
    }
</script>

<style scoped>
    .upload-img-btn {
        width: 100px;
        height: 100px;
        border: 1px dotted #c0c0c0;
        position: relative;
        background-color: #f0f8ff;
        display: flex;
    }

    .upload-img {
        width: 100px;
        height: 100px;
        opacity: 0;
    }

    .upload-img-btn i {
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -22px 0 0 -22px;
        width: 44px;
        height: 44px;
        background: url(../static/images/path-sprite16.png) no-repeat -150px -120px;
    }
</style>