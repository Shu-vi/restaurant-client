<template>
  <div>
    <MyHeader/>
    <MyMain>
      <div class="post-control" v-for="post in posts" v-show="posts.length>0">
        <div class="post-block" v-if="post.title!=='Не выставлена должность'">
          <div class="post">
            <p class="text-post">Должность: {{post.title}}</p>
          </div>
          <buttons class="main-button-container" :element="post" @delete="deleteElement">
            <post-form-edit :post="post" @edit="editElement"/>
          </buttons>
        </div>
      </div>
      <p class="main-no-content" v-show="posts.length===0">Меню пустое</p>
      <button class="btn-control btn-add" @click=showDialog>Добавить</button>
      <dialog-window v-model:show="dialog">
        <post-form-add @create="addElement"/>
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
import PostFormAdd from "@/components/post/PostFormAdd";
import Buttons from "@/components/Buttons";
import PostFormEdit from "@/components/post/PostFormEdit";
export default {
  components: {PostFormEdit, MyFooter, MyMain, MyHeader, DialogWindow, PostFormAdd, Buttons},
  data(){
    return{
      posts:[],
      dialog:false,
    }
  },
  methods: {
    async getElement() {
      try {
        const response = await axios.get('http://localhost:8081/post')
        this.posts = response.data;
      } catch (e) {
        console.log(e)
      }
    },
    async deleteElement(dish) {
      this.posts = this.posts.filter(p => p.id !== dish.id)
      const url = 'http://localhost:8081/post/' + dish.id
      axios.delete(url)
          .catch((err) => {
            console.log(err)
          })
    },
    async addElement(event) {
      this.posts.push(event)
      this.dialog = false
      try {
        await axios.post('http://localhost:8081/post', event)
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
        await axios.put('http://localhost:8081/post/' + event.id, event)
      } catch (e) {
        console.log(e)
      }
    },
  },
  mounted() {
    this.getElement()
  }
}
</script>

<style scoped>
.post-control{
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.post{
  margin: 10px auto;
  padding: 12px 24px;
  border: 1px #000 solid;
  box-shadow: black;
  min-width: 150px;
  background-color: #f5d8b0;
}
.text-post{
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
.post-block{
  padding: 10px 0;
}
</style>