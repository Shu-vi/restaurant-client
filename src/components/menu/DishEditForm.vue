<template>
  <div>
    <form>
      <h5 class="title">Изменение блюда</h5>
      <input v-model="dish.title" type="text" placeholder="Название">
      <button @click="editDish">Применить изменения</button>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    dish:{
      type:Object
    }
  },
  methods:{
    editDish(){
      this.$emit('edit', this.dish)
    }
  }
}
</script>

<style scoped>

</style>