<template>
  <v-app>
    <v-app-bar app absolute color="transparent" dark class="pl-md-10">
      <h3 class="font-weight-medium name">SILVER KOLDE</h3>

      <v-spacer/>

      <v-btn href="#about" class="mr-2 ml-md-7" text>
        <span class="mr-2" >About</span>
      </v-btn>
      <v-btn href="#projects" class="mr-2 ml-md-7" text>
        <span>My Work</span>
      </v-btn>
      <v-btn href="#contact" class="mr-2 ml-md-7" text>
        <span>Contact</span>
      </v-btn>
    </v-app-bar>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
  </v-app>
</template>

<script>
import Contact from "@/components/Contact";
import About from "@/components/About";
import Projects from "@/components/Projects";

export default {
  name: 'App',

  components: {
    Contact,
    About,
    Projects,
  }
};
</script>

<style scoped>
  .name {
    font-size: 20px;
  }
</style>