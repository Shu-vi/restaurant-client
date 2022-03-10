<template>
  <div>
    <form>
      <h5 class="title">Добавление сотрудника</h5>
      <input v-model="employee.name" class="add-post" type="text" placeholder="Имя">
      <input v-model="employee.lastname" class="add-post" type="text" placeholder="Фамилия">
      <input v-model="employee.passportSeAndNu" class="add-post" type="text" placeholder="Серия и номер пасспорта">
      <my-select v-model="selected" :options="posts"></my-select>
      <input v-model="employee.salary" class="add-post" type="text" placeholder="Зарплата">
      <input v-model="employee.age" class="add-post" type="text" placeholder="Возраст">
      <button @click="createDish" class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
import MySelect from "@/components/MySelect";
export default {
  components: {MySelect},
  props:{
    posts:{
      type:Array,
    }
  },
  data(){
    return{
      employee:{
      },
      selected: ''
    }
  },
  methods:{
    createDish(){
      for (let i = 0; i < this.posts.length; i++) {//Переопределяем айди в связи с выбором в списке
        if (this.posts[i].title === this.selected){
          this.employee.post = this.posts[i].id
        }
      }
      this.$emit('create', this.employee)
      this.employee = {
        id: 0,
        title: ''
      }
    },

  }
}
</script>

<style scoped>
.title{
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