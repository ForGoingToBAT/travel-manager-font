<template>
    <div class="animated fadeIn">
        <div class="row">
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-five">
                            <div class="stat-icon dib flat-color-1">
                                <i class="pe-7s-cash"></i>
                            </div>
                            <div class="stat-content">
                                <div class="text-left dib">
                                    <div class="stat-text">￥<span class="count">{{soldMoney}}</span></div>
                                    <div class="stat-heading">销售额</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-five">
                            <div class="stat-icon dib flat-color-2">
                                <i class="pe-7s-cart"></i>
                            </div>
                            <div class="stat-content">
                                <div class="text-left dib">
                                    <div class="stat-text"><span class="count">{{ordersNum}}</span></div>
                                    <div class="stat-heading">销量</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-five">
                            <div class="stat-icon dib flat-color-3">
                                <i class="pe-7s-browser"></i>
                            </div>
                            <div class="stat-content">
                                <div class="text-left dib">
                                    <div class="stat-text"><span class="count">349</span></div>
                                    <div class="stat-heading">用户访问量</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <div class="card-body">
                        <div class="stat-widget-five">
                            <div class="stat-icon dib flat-color-4">
                                <i class="pe-7s-users"></i>
                            </div>
                            <div class="stat-content">
                                <div class="text-left dib">
                                    <div class="stat-text"><span class="count">2986</span></div>
                                    <div class="stat-heading">月访问量</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="orders">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="box-title">Orders </h4>
                        </div>
                        <div class="card-body--">
                            <div class="table-stats order-table ov-h">
                                <table class="table ">
                                    <thead>
                                    <tr>
                                        <th class="serial">#</th>
                                        <th class="avatar">订单号</th>
                                        <th>账户</th>
                                        <th>路线ID</th>
                                        <th>购买时间</th>
                                        <th>订单状态</th>
                                    </tr>
                                    </thead>
                                    <tbody v-if="orders" >
                                        <tr v-for="(order,index) in orders" :key="index">
                                            <td class="serial">{{index}}</td>
                                            <td class="avatar"><span>{{order.id}}</span></td>
                                            <td> {{order.userAccount}} </td>
                                            <td> <span class="product">{{order.routeId}}</span> </td>
                                            <td><span class="count">{{order.bookTime}}</span></td>
                                            <td>
                                                <span class="badge badge-complete" v-if="order.orderStatus===1">已预定</span>
                                                <span class="badge badge-pending" v-if="order.orderStatus===2">已购买</span>
                                                <span class="badge badge-info" v-if="order.orderStatus===3">已评价</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tbody v-if="orders===''">暂时无订单</tbody>
                                </table>
                            </div> <!-- /.table-stats -->
                        </div>
                    </div> <!-- /.card -->
                </div>  <!-- /.col-lg-8 -->
            </div>
        </div>
    </div>
</template>

<script>
    import Service  from "../request/Service";
    export default {
        name: "NetInfo",
        data(){
            return{
                soldMoney:"",
                ordersNum:"",//销量
                orders:"",
            }
        },
        mounted(){
            let that = this;
            Service.post("/getSystemInfo").then(response=>{
                let info = response.data.data;
                that.soldMoney = info.soldMoney;
                that.ordersNum = info.ordersNum;
                that.orders = info.orders
            })
        }
    }
</script>

<style scoped>

</style>