<template>
  <div>
    <h1>{{ nama }}</h1>
    <input type="text" v-model="nama">
    <br><br>
    Nilai Anda : {{ nilai }}
    <br>    
    <h2>{{ soal1 }}</h2>
    <input type="radio" name="jawaban1" :disabled="checked" @click="benar"> Naruto
    <input type="radio" name="jawaban1" :disabled="checked"> Fujiwara Takumi
    <input type="radio" name="jawaban1" :disabled="checked"> Koutarou Suzuki
    <h2>{{ soal2 }}</h2>
    <input type="radio" name="jawaban2" :disabled="checked2"> Manis
    <input type="radio" name="jawaban2" :disabled="checked2"> Asam
    <input type="radio" name="jawaban2" :disabled="checked2" @click="benar2"> Asin
    <h2>{{ soal3 }}</h2>
    <input type="radio" name="jawaban3" :disabled="checked3"@click="benar3"> Clifford lee Burton
    <input type="radio" name="jawaban3" :disabled="checked3"> Lars Ulrich
    <input type="radio" name="jawaban3" :disabled="checked3"> Jason Newsted
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      nama: 'Nama Anda',
      nilai: 0,
      soal1: '1. Salah Satu Karakter Shounen Manga?',
      soal2: '2. Air Laut Rasanya?',
      soal3: '3. Basis Pertama Band Metallica?'
    }
  },
  methods:{
    benar(){
      this.nilai += 1,
      this.checked = true
    },
     benar2(){
      this.nilai += 1,
      this.checked2 = true
    },
     benar3(){
      this.nilai += 1,
      this.checked3 = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
