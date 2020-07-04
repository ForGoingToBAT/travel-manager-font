<template>
    <div>
        <h4>我的回复</h4>
        <div class="viewComment" style="display: flex;margin-bottom: 30px" v-for="(comment,index) in comments" :key="index">
            <div class="viewComment-right">
                <div class="viewComment-head" style="position: relative">
                    <span style="color: red" class="nickname">{{comment.userReply}}</span>
                    <span>回复了<span class="routeId">{{comment.userComment}}</span></span>
                    <span style="position: absolute;right: 0">第{{comment.commentedId}}号线路</span>
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
    import Service from "@/request/Service";
    import Qs from 'qs'
    export default {
        name: "myReply",
        data(){
            return{
                comments:"",
            }
        },
        mounted(){
            let that = this
            Service.post("/getMyReply",Qs.stringify({
                userReply:"1988"
            })).then(response=>{
                that.comments=response.data.data
            }).then(function (error) {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
.viewComment .viewComment-right{
    font-size: 12px;
    width: 100%;
    border: 1px solid red;
    padding: 10px;
    border-radius: 10px;
    margin-top: 10px;
}
</style>