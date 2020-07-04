<template>
    <div class="viewComments" style="position: relative">
        <h5 style="margin-bottom: 10px">回复用户消息</h5>
        <div class="reply">
            <span class="replyMsg">回复:<span class="replyName">明月</span></span>
            <textarea placeholder="输入回复信息"></textarea>
        </div>
        <button class="submit" style="border: none;border: 1px solid #c0c0c0;border-radius: 10px; padding: 0 10px;margin-bottom: 10px" account="" @click="confirmBtn($event)" routeId="">确认</button>
        <div class="viewComment" style="display: flex;margin-bottom: 30px" v-for="(comment,index) in comments" :key="index">
            <div class="viewComment-left" style="margin-right: 20px;">
                <img :src="comment.userCommentFont" width="40px" height="40px" style="border-radius: 50%;"/>
            </div>
            <div class="viewComment-right" style="font-size: 12px;">
                <div class="viewComment-head">
                    <span style="color: red" class="nickname">{{comment.userCommentNickName}}</span>
                    <span>评论<span class="routeId">{{comment.commentedId}}</span>号线路</span>
                    <span style="display: inline-block; padding-left: 5px;">{{comment.commentDate}}</span>
                    <a @click="reply($event)" :data-userAccount="comment.userComment" :data-routeId="comment.commentedId">回复</a>
                </div>
                <div class="viewComment-body">
                    <div class="commentContent">
                        {{comment.commentContent}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Service from '../request/Service'
    import $ from 'jquery'
    import Qs from 'qs'
    export default {
        name: "message",
        mounted(){
            let that = this;
            Service.post("/getRouteEvaluates").then(response=>{
                that.comments = response.data.data;
            }).catch(function (error) {
                console.log(error)
            })
        },
        methods:{
            reply:function (e) {
                $(".replyName").text($(e.currentTarget).siblings(".nickname").text());
                $(".submit").attr("account",e.currentTarget.dataset.useraccount);
                $(".submit").attr("routeId",e.currentTarget.dataset.routeid);//赋值给自定义属性
            },
            confirmBtn:function (e) {
                //获取参数信息
                let account = $(e.currentTarget).attr("account");//获取被评论账户的信息
                let routeId = $(e.currentTarget).attr("routeId");//路线的id
                let reply = $("textarea").val();//回复的内容
                if(reply===""){
                    alert("请输入文字后再提交")
                    return;
                }
                let data = Qs.stringify({
                    account:account,
                    routeId:routeId,
                    reply:reply
                });
                Service.post("/confirmBtn",data).then(response=>{
                    alert(response.data.msg);
                }).catch(function (error) {
                    console.log(error)
                })

            }
        },
        data(){
            return{
                comments:"",
            }
        }
    }
</script>

<style scoped>
    .reply textarea{
        width: 100%;
        border: 1px solid white;
        border-radius: 10px;
        text-align: center;
    }
    .reply .replyMsg{
        position: absolute;
        font-size: 12px;
        left: 10px;
        top: 35px;
        color: darkred;
    }
    .viewComment{
        border: 1px solid red;
        padding: 10px;
        border-radius: 20px;
    }
    .viewComment .viewComment-head a{
        position: absolute;
        right: 24px;
        background-color: transparent;
        color: black;
        cursor: pointer;
    }
    .viewComment .viewComment-head a:hover{
        color: red;
    }
</style>