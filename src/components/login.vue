<template>
    <div class="page-wrapper flex-row align-items-center">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-5">
            <div class="card p-4">
              <div class="card-header text-center text-uppercase h4 font-weight-light">Login</div>
              <div class="card-body py-5">
                <div class="form-group">
                  <label class="form-control-label">Email</label>
                  <input type="email" class="form-control" name="email">
                </div>

                <div class="form-group">
                  <label class="form-control-label">Password</label>
                  <input type="password" class="form-control" name="password">
                </div>

                <div class="custom-control custom-checkbox mt-4">
                  <input type="checkbox" class="custom-control-input" id="login">
                  <label class="custom-control-label" for="login">记住密码</label>
                </div>
              </div>

              <div class="card-footer">
                <div class="row">
                  <div class="col-6">
                    <button type="submit" class="btn btn-primary px-5" @click="swapToIndex(9)">Login</button>
                  </div>
                  <div class="col-6">
                    <a href="#" class="btn btn-link">忘记密码</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'login',
  props: {
    msg: String
  },
  data(){
    return{
      message:"sofency"
    }
  },
  methods:{
    swapToIndex:function (message) {
      this.$router.push({ path: '/index', query: { name: message } });
    }
  }

}
</script>


<style scoped>
  @import "../static/css/styles.css";
</style>
