<template>
  <div>
    <my-header/>
    <my-main @create="addElement">
      <div class="menu-control" v-for="dish in dishes" v-show="dishes.length>0">
        <div class="menu">
          <p class="text-menu">{{dish.title}}</p>
        </div>
        <buttons class="main-button-container" :element="dish" @delete="deleteElement">
          <dish-edit-form :dish="dish" @edit="editElement"/>
        </buttons>
      </div>
      <p class="main-no-content" v-show="dishes.length===0">Меню пустое</p>
      <button class="btn-control btn-add" @click=showDialog>Добавить</button>
      <dialog-window v-model:show="dialog">
        <dish-form @create="addElement"/>
      </dialog-window>
    </my-main>
    <my-footer/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyMain from "@/components/MyMain";
import MyFooter from "@/components/MyFooter";
import Buttons from "@/components/Buttons";
import DishEditForm from "@/components/menu/DishEditForm";
import DialogWindow from "@/components/DialogWindow";
import DishForm from "@/components/menu/DishForm";
import axios from "axios";

export default {
  components: {MyFooter, MyMain, MyHeader, Buttons, DishEditForm, axios, DishForm, DialogWindow},
  data(){
    return{
      dishes:[],
      dialog:false
    }
  },
  methods:{
    async getMenu(){
      try {
        const response = await axios.get('http://localhost:8081/menu')
        this.dishes = response.data;
      }
      catch (e) {
        console.log(e)
      }
    },
    async deleteElement(dish){
      this.dishes = this.dishes.filter(p=>p.id !== dish.id)
      const url = 'http://localhost:8081/menu/' + dish.id
      axios.delete(url)
          .catch((err)=>{
            console.log(err)
          })
    },
    async addElement(event){
      this.dishes.push(event)
      this.dialog = false
      try {
        await axios.post('http://localhost:8081/menu', event)
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
        await axios.put('http://localhost:8081/menu/'+event.id, event)
      }
      catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getMenu()
  }
}
</script>

<style>
.menu-control{
  display: flex;
  flex-direction: column;
  margin:10px auto;
}

.menu{
  margin: 10px auto;
  padding: 12px 24px;
  border: 1px #000 solid;
  box-shadow: black;
  min-width: 150px;
  background-color: #f5d8b0;
}
.text-menu{
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #404041;
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
  font-size: 25px;
  color: #404041;
}
</style>