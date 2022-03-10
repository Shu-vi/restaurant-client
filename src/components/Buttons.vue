<template>
  <div>
    <button class="btn-control" @click="deleteElement">Удалить</button>
    <button class="btn-control" @click="showDialog">Редактировать</button>
    <dialog-window v-model:show="dialog">
      <slot></slot>
    </dialog-window>
  </div>
</template>

<script>
import DialogWindow from "@/components/DialogWindow"
export default {
  components:{DialogWindow,},
  props:{
    element:{
      type: Object
    }
  },
  data(){
    return{
      dialog: false,
    }
  },
  methods:{
    deleteElement(){
      this.$emit('delete', this.element)
    },
    showDialog(){
      this.dialog = true
    }
  }
}
</script>

<style scoped>
.btn-control{
  padding: 5px 10px;
  margin: 0 5px;
  min-width: 75px;
  min-height: 30px;
  float: right;
  border: #b38c52 solid 1px;
  background-color: white;
}
</style>