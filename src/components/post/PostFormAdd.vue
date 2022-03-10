<template>
  <div>
    <form>
      <h5 class="title">Добавление должности</h5>
      <input v-model="post.title" class="add-post" type="text" placeholder="Должность">
      <button @click="createPost" class="btn">Создать</button>
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      post:{
        id: 0,
        title:''
      }
    }
  },
  methods:{
    createPost(){
      this.$emit('create', this.post)
      this.post = {
        id: 0,
        title: ''
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