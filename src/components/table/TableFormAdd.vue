<template>
  <div>
    <form>
      <h5 class="title">Добавление стола</h5>
      <input v-model="table.table" class="add-table" type="number" placeholder="Номер столика">
      <button @click="createPost" class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      table:{
        table: Number,
        free: true
      }
    }
  },
  methods:{
    createPost(){
      this.$emit('create', this.table)
      this.table = {
        table: 0
      }

    }
  }
}
</script>

<style scoped>
.title{
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.add-table{
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn{
  margin-top: 10px;
  float: right;
  padding: 0;
  width: 75px;
  height: 30px;
  border: #b38c52 solid 1px;
  background-color: white;
}
</style>