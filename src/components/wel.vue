<template>
<div class="hello">
  <el-row style="margin-top:200px">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple">
        <h1>&#128512 欢迎来到2048 &#128512 </h1>
      </div>
    </el-col>
  </el-row>

  <el-row style="margin-top:50px">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple">
        <el-button type="success" size="large" @click="open3()">《开始游戏》</el-button>
      </div>
    </el-col>
  </el-row>
  <el-row style="margin-top:30px">
    <el-col :span="8" :offset="8">
      <div class="grid-content bg-purple">
        <el-button type="info" size="large">《项目代码》</el-button>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      startData: {
        'username': 'test',
        'size': 8
      }
    }
  },
  methods: {
    dstart () {
      this.axios.post('/game2048', this.startData)
      .then(function (res) {
        console.log(res)
      }).catch(function (res) {
        console.log(res)
      })
    },
    open3 () {
      this.$prompt('请输入玩家姓名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '玩家姓名: ' + value
        })
        this.startData.username = value
        this.dstart()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
