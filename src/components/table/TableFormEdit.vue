<template>
  <div>
    <form>
      <h5 class="title">Изменение номера столика</h5>
      <input v-model="table.table" type="number" placeholder="Номер столика">
      <button @click="editPost">Применить изменения</button>
    </form>
  </div>
</template>

<script>
export default {
  props:{
    table:{
      type:Object
    }
  },
  methods:{
    editPost(){
      this.$emit('edit', this.table)
    }
  }
}
</script>

<style scoped>

</style>