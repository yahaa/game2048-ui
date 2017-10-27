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
        <el-tag type="success">当前得分 {{red.Score}}</el-tag>
      </div>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'game',
  data () {
    return {
      red: {
        'Gmap': [],
        'Score': 0,
        'Size': 0
      },
      action: {
        'dir': 'up'
      }
    }
  },
  methods: {
    status () {
      this.axios.get('/game2048')
      .then(function (res) {
        this.red = res.data
      }).catch(function (res) {
        console.log(res)
      })
    },
    play () {
      this.axios.put('/game2048', this.action)
      .then(function (res) {
        this.red = res.data
      }).catch(function (res) {
        console.log(res)
      })
    }
  },
  mounted () {
    this.status()
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
