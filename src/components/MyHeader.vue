<template>
  <header class="header">
    <nav class="header-links">
      <router-link data-link="1" to="/table" class="header-link">Бронирование столиков</router-link>
      <router-link data-link="2" to="/" class="header-link">Меню</router-link>
      <router-link data-link="3" to="/employee" class="header-link">Управление персоналом</router-link>
      <router-link data-link="4" to="/post" class="header-link">Должности</router-link>

    </nav>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  mounted() {
    let currentURL = window.location.href
    let currentPages = document.querySelectorAll('.header-link')
    let arrayCurrentPages = []
    for (let i = 0; i < currentPages.length; i++) {
      arrayCurrentPages.push(currentPages[i])
    }
    switch (currentURL) {
      case 'http://localhost:8080/':
        //Повесить класс на data-link="2"
            //удалить класс у всех остальных
        for (let i = 0; i < currentPages.length; i++) {
          if (currentPages[i].dataset.link === "2"){
            currentPages[i].classList.add('coloring-current-page')
          }
          else {
            currentPages[i].classList.remove('coloring-current-page')
          }
        }
        break
      case 'http://localhost:8080/table':
        //Повесить класс на data-link="1"
        //удалить класс у всех остальных
        for (let i = 0; i < currentPages.length; i++) {
          if (currentPages[i].dataset.link === "1"){
            currentPages[i].classList.add('coloring-current-page')
          }
          else {
            currentPages[i].classList.remove('coloring-current-page')
          }
        }
        break
      case 'http://localhost:8080/employee':
        //Повесить класс на data-link="3"
        //удалить класс у всех остальных
        for (let i = 0; i < currentPages.length; i++) {
          if (currentPages[i].dataset.link === "3"){
            currentPages[i].classList.add('coloring-current-page')
          }
          else {
            currentPages[i].classList.remove('coloring-current-page')
          }
        }
        break
      case 'http://localhost:8080/post':
        //Повесить класс на data-link="4"
        //удалить класс у всех остальных
        for (let i = 0; i < currentPages.length; i++) {
          if (currentPages[i].dataset.link === "4"){
            currentPages[i].classList.add('coloring-current-page')
          }
          else {
            currentPages[i].classList.remove('coloring-current-page')
          }
        }
        break
      default:
        break
    }
  }
}
</script>

<style scoped>
/*HEADER*/
.header{
  display: flex;
  background-color: #fff2e3;
}
.header-links{
  max-width: 1160px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
}
.header-link{
  color: #404041;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: 600;
  font-size: 20px;
}
.header-link:after{
  display: block;
  content: "";
  height: 2px;
  width: 0;
  background-color: #b38c52;
}
.header-link:hover:after{
  width: 100%;
  transition: .5s;
}
.header-link:hover{
  color: #b38c52;
  transition: .5s;
  cursor: pointer;
}

.coloring-current-page{
  color: #b38c52;
}

.coloring-current-page:after{
  display: block;
  content: "";
  height: 2px;
  width: 100%;
  background-color: #b38c52;
}
</style>