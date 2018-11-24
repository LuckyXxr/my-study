<template lang="jade">
  div(class="home")
    img(alt="Vue logo",src="../assets/logo.png")
    hello-world(msg="Welcome to Your Vue.js App")
    toast(v-model="showPositionValue",type="text",:time="2000",is-show-mask,:text="toastText",:position="position")
    div(@click="okHandle") okokok
    div(@click="okHandle2") 222222222
</template>

<script>
// @ is an alias to /src
import {mapState, mapActions} from 'vuex'
import {Toast} from 'vux'
import HelloWorld from '@/components/HelloWorld.vue'
import api from '../api'


export default {
  components: {
    HelloWorld,
    Toast
  },
  computed:{
    ...mapState(['wholeData'])
  },
  data() {
    return {
      showPositionValue: true, //是否显示提示
      position: 'center', //提示信息的位置
      toastText: 'okokokokok', // 提示文本
    }
  },
  methods: {
    ...mapActions(['setWholeData']),
    switchStatus: function() {
      this.showPositionValue = true;
      this.toastText = "我是显示在中间的";
    },
    okHandle:function () {
      const _this=this
      /*this.showPositionValue = true
      this.axios({
        url: api.findItemSpu,
        method: 'post',
        params: '',
        success(res){
          console.log(res)
          _this.myData = res.data.data
          console.log( _this.myData)
        },
        failed(){ }
      })*/
      this.setWholeData([1,2,3,4])
    },

    okHandle2:function () {
        console.log(this.wholeData)
    }
  },

}
</script>
