<template>
  <div>
    <div class="bg"></div>
    <div class="ma-15" id="about">
      <h2>About me</h2>
      <p>
        <br>
        I started looking into the IT industry sometime around spring 2019. Initially, I played around with Python and dabbled a bit with HTML and CSS. This sparked my curiosity, but I realized that I would be better off if I had some structure in my learnings. So I enrolled in Tartu University, Computer Science curriculum.
        <br><br>
        I have always been spurred by the question, "Why?". I find myself often pondering about questions like "Why is it done this way? Is the reason we are doing this still valid?". During the whole period of studying, I have felt that the more I learn, the more I understand, the bigger picture, the more interesting software development becomes. Right now, I have reached a point where I feel that it's about time to put all things learned into practice on real-world applications.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>

  .bg {
    background-image: url("../assets/background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
  }
</style>