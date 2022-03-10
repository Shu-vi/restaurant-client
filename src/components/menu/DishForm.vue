<template>
  <div>
    <form>
      <h5 class="title">Добавление блюда</h5>
      <input v-model="dish.title" class="add-post" type="text" placeholder="Название">
      <button @click="createDish" class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      dish:{
        id: 0,
        title:''
      }
   }
  },
  methods:{
    createDish(){
      this.$emit('create', this.dish)
      this.dish = {
        id: 0,
        title: ''
      }

    }
  }
}
</script>

<style scoped>
.title{
  font-family: "Roboto Light";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
}
.add-post{
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