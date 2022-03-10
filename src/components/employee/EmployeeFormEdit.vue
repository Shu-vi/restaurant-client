<template>
  <div>
    <form>
      <h5 class="title">Изменение данных о сотруднике</h5>
      <input class="input" v-model="employee.name" type="text" placeholder="Имя">
      <input class="input" v-model="employee.lastname" type="text" placeholder="Фамилия">
      <input class="input" v-model="employee.passportSeAndNu" type="text" placeholder="Серия и номер паспорта">
      <my-select class="input" v-model="selected" :options="posts"></my-select>
      <input class="input" v-model="employee.salary" type="text" placeholder="Зарплата">
      <input class="input" v-model="employee.age" type="text" placeholder="Возраст">
      <button @click="editEmployee">Применить изменения</button>
    </form>
  </div>
</template>

<script>
import MySelect from "@/components/MySelect";
export default {
  components:{MySelect},
  props:{
    employee:{
      type:Object
    },
    posts:{
      type:Array
    }
  },
  data(){
    return{
      selected: this.employee.postResource.title,
    }
  },
  methods:{
    editEmployee(){
      for (let i = 0; i < this.posts.length; i++) {//Переопределяем айди в связи с выбором в списке
        if (this.posts[i].title === this.selected){
          this.employee.post = this.posts[i].id
        }
      }
      this.$emit('edit', this.employee)
    }
  }
}
</script>

<style scoped>
.input{
  display: block;
  margin: 10px auto 10px 0;
}
</style>