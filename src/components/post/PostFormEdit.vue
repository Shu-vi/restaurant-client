<template>
  <div>
    <form>
      <h5 class="title">Изменение должности</h5>
      <input v-model="post.title" type="text" placeholder="Должность">
      <button @click="editPost">Применить изменения</button>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    post:{
      type:Object
    }
  },
  data(){
    return{
      newPost: {
        id: this.post.id,
        title: String
      }
    }
  },
  methods:{
    editPost(){
      this.newPost.title = this.post.title
      this.$emit('edit', this.newPost)
    }
  }
}
</script>

<style scoped>

</style>