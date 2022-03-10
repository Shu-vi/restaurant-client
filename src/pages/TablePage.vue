<template>
  <div>
    <MyHeader/>
    <MyMain>
      <div class="table-control" v-for="table in tables" v-show="tables.length>0">
        <div class="table-block">
          <div class="table">
            <p class="text-table">Столик: {{table.table}}</p>
            <p class="text-table" v-if="table.free" style="color: darkgreen">Свободен</p>
            <p class="text-table" v-if="!table.free" style="color: darkred">Занят</p>
          </div>
          <div class="main-button-container">
            <buttons :element="table" @delete="deleteElement">
              <TableFormEdit :table="table" @edit="editElement"/>
            </buttons>
            <button class="btn-control" v-if="table.table" @click="editConditionTable(table)">
              <p v-if="table.free">Занять столик</p>
              <p v-else>Освободить столик</p>
            </button>
          </div>
        </div>
      </div>
      <p class="main-no-content" v-show="tables.length===0">Нет столов</p>
      <button class="btn-control btn-add" @click=showDialog>Добавить</button>
      <dialog-window v-model:show="dialog">
        <table-form-add @create="addElement"/>
      </dialog-window>
    </MyMain>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyMain from "@/components/MyMain";
import MyFooter from "@/components/MyFooter";
import DialogWindow from "@/components/DialogWindow";
import TableFormAdd from "@/components/table/TableFormAdd";
import Buttons from "@/components/Buttons";
import TableFormEdit from "@/components/table/TableFormEdit";
import axios from "axios";
export default {
  components: {TableFormEdit, TableFormAdd, MyFooter, MyMain, MyHeader, DialogWindow, Buttons},
  data(){
    return{
      tables:[],
      dialog:false,
    }
  },
  methods: {
    async getElement() {
      try {
        const response = await axios.get('http://localhost:8081/tables')
        this.tables = response.data;
      } catch (e) {
        console.log(e)
      }
    },
    async deleteElement(table) {
      this.tables = this.tables.filter(p => p.id !== table.id)
      const url = 'http://localhost:8081/tables/' + table.id
      axios.delete(url)
          .catch((err) => {
            console.log(err)
          })
    },
    async addElement(event) {
      this.tables.push(event)
      this.dialog = false
      try {
        await axios.post('http://localhost:8081/tables', event)
      } catch (e) {
        console.log(e)
      }
      location.reload()
    },
    showDialog() {
      this.dialog = true
    },
    async editElement(event) {
      this.dialog = false
      try {
        await axios.put('http://localhost:8081/tables/' + event.id, event)
      } catch (e) {
        console.log(e)
      }
    },
    async editConditionTable(table){
      table.free = !table.free
      try {
        await axios.put('http://localhost:8081/tables/' + table.id, table)
      } catch (e) {
        console.log(e)
      }
    }
  },
  mounted() {
    this.getElement()
  }
}
</script>

<style scoped>
.table-control{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.btn-control{
  padding: 5px 10px;
  margin: 15px;
  min-width: 75px;
  min-height: 30px;
  border: #b38c52 solid 1px;
  background-color: white;
  float: left;
}
.table{
  margin: 10px auto;
  padding: 12px 24px;
  border: 1px #000 solid;
  box-shadow: black;
  min-width: 150px;
  background-color: #f5d8b0;
}
.text-table{
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  color: #404041;
}
.btn-control{
  padding: 5px 10px;
  margin: 10px 5px;
  min-width: 75px;
  min-height: 30px;
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
.table-block{
  padding: 10px 0;
}
.main-button-container{
}
</style>