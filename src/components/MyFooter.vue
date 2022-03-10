<template>
  <div class="footer">
    <div class="footer-content">
<!--      соц сети-->
      <div class="socials">
        <a href="https://www.facebook.com/" class="social-link" target="_blank">
          <img src="@/imgs/facebook.svg" alt="Facebook" class="footer-social-img">
        </a>
        <a href="https://www.instagram.com/" class="social-link" target="_blank">
          <img src="@/imgs/instagram.svg" alt="Instagram" class="footer-social-img">
        </a>
        <a href="https://www.twitter.com/" class="social-link" target="_blank">
          <img src="@/imgs/twitter.svg" alt="Twitter" class="footer-social-img">
        </a>
        <a href="https://www.youtube.com/" class="social-link" target="_blank">
          <img src="@/imgs/youtube.svg" alt="Youtube" class="footer-social-img">
        </a>
      </div>
<!--     контакты -->
      <div class="contacts">
        <p class="footer-contact-info">Контактная информация:</p>
        <a href="tel:+78431434871" class="footer-contact">8 (843) - 143 - 48 - 71</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter"
}
</script>

<style scoped>
.footer{
  background-color: #edc182;
}
.footer-content{
  background-color: #edc182;
  max-width: 1160px;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  padding: 100px 0;
}
.socials{
  margin: 0 auto;
}
.contacts{
  margin: 0 auto;
  text-align: right;
}
.footer-contact-info{
  color: #404041
}
.footer-contact{
  text-decoration: none;
  color: #404041;
}
.footer-contact:hover{
  color: #b38c52;
  transition: .5s;
}
</style>