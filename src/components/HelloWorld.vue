<template>
  <div>
    <h1>{{ msg }}</h1>
    <h2> {{ judul }} </h2>
    <input v-model="msg"> <br><br>
    <button @click="gantiJudul">Ganti Judul</button>
    <br><br>
    <input v-model="x">
    <h1 v-if="x % 2 === 0">Ini angka genap</h1>
    <h1 v-else>ini angka ganjil</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'it`s vue sonovabeach',
      judul: 'pemograman web',
      x: 1
    }
  },
mounted(){
  this.judul = 'pel web dinamis'
},
methods: {
  gantiJudul(){
    this.judul = 'pelajaran web hehehe'
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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