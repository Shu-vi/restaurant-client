<template>
  <div>
    <MyHeader/>
    <MyMain>
      <div class="employee-control" v-for="employee in employees" v-show="employees.length>0">
        <div class="employee">
          <p class="text-employee">Имя: {{employee.name}}</p>
          <p class="text-employee">Фамилия: {{employee.lastname}}</p>
          <p class="text-employee">Пасспорт: {{employee.passportSeAndNu}}</p>
          <p class="text-employee">Должность: {{employee.postResource.title}}</p>
          <p class="text-employee">Зарплата: {{employee.salary}}</p>
          <p class="text-employee">Возраст: {{employee.age}}</p>
        </div>
        <buttons class="main-button-container" :element="employee" @delete="deleteElement">
          <EmployeeFormEdit :employee="employee" :posts="posts" @edit="editElement"/>
        </buttons>
      </div>
      <p class="main-no-content" v-show="employees.length===0">Список сотрудников пуст</p>
      <button class="btn-control btn-add" @click=showDialog>Добавить</button>
      <dialog-window v-model:show="dialog">
        <employee-form @create="addElement" :posts="posts"/>
      </dialog-window>
    </MyMain>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyMain from "@/components/MyMain";
import MyFooter from "@/components/MyFooter";
import axios from "axios";
import DialogWindow from "@/components/DialogWindow";
import Buttons from "@/components/Buttons";
import EmployeeForm from "@/components/employee/EmployeeForm";
import EmployeeFormEdit from "@/components/employee/EmployeeFormEdit";
export default {
  components: {MyFooter, MyMain, MyHeader, EmployeeForm, Buttons, Window, DialogWindow, EmployeeFormEdit},
  data(){
    return{
      employees:[],
      dialog:false,
      posts:[]
    }
  },
  methods:{
    async getPosts(){
      try {
        const response = await axios.get('http://localhost:8081/post')
        this.posts = response.data
      }
      catch (e){
        console.log(e)
      }
    },
    async getElement(){
      try {
        const response = await axios.get('http://localhost:8081/employee/?expand')
        this.employees = response.data;
      }
      catch (e) {
        console.log(e)
      }
    },
    async deleteElement(dish){
      this.employees = this.employees.filter(p=>p.id !== dish.id)
      const url = 'http://localhost:8081/employee/' + dish.id
      axios.delete(url)
          .catch((err)=>{
            console.log(err)
          })
    },
    async addElement(event){
      this.employees.push(event)
      this.dialog = false
      try {
        await axios.post('http://localhost:8081/employee', event)
      }
      catch (e){
        console.log(e)
      }
      location.reload()
    },
    showDialog(){
      this.dialog = true
    },
    async editElement(event){
      this.dialog = false
      try {
        await axios.put('http://localhost:8081/employee/'+event.id, event)
      }
      catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getElement()
    this.getPosts()
  }
}
</script>

<style scoped>
.employee-control{
  display: flex;
  flex-direction: column;
  margin:10px auto;
}

.employee{
  margin: 10px auto;
  padding: 12px 24px;
  border: 1px #000 solid;
  box-shadow: black;
  min-width: 150px;
  background-color: #f5d8b0;
}
.text-employee{
  font-family: "Roboto Light";
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #404041;
  margin-bottom: 5px;
  letter-spacing: 1px;
}
.btn-control{
  padding: 5px 10px;
  margin: 0 5px;
  min-width: 75px;
  min-height: 30px;
  float: right;
  border: #b38c52 solid 1px;
  background-color: white;
}
.btn-add{
  padding: 5px 10px;
  margin: 20px auto 0 auto;
  width: 80px;
  height: 30px;
  border: #b38c52 solid 1px;
  background-color: white;
}
.main-no-content{
  text-align: center;
  font-family: "Roboto Light";
  font-size: 25px;
  color: #404041;
}
</style>