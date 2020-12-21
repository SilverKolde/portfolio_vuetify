<template>
  <div id="contact">
    <div class="wrapper px-15 pt-15 pb-5">
      <h2>Get in touch</h2>


      <div class="channels mt-10 ml-16">
        <v-layout row wrap>
          <v-flex v-for="(contact, index) in contacts" :key="index"
                  class="channel ma-5" xs12 md3>
            <a :href="contact.href" target="_blank">
              <i :class="contact.icon" :id="contact.channel"></i>
              <div>{{ contact.title }}<br>
                <span>{{ contact.channel }}</span>
              </div>
            </a>
          </v-flex>
        </v-layout>

      </div>
    </div>
    <footer>2020 - Silver Kolde</footer>
  </div>
</template>

<script>
export default {
  name: "Contact",
  computed: {
    contacts: function (){
      return this.$store.getters.getContacts
    }
  },
}
</script>

<style scoped>
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.06);
    min-height: 70px;
  }

  .channels {
    display: flex;
    justify-content: center;
  }
  a {
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: inherit;
  }

  a > div {
    margin-left: 10px;
    color: rgba(0,0,0,0.94);
  }

  div > span {
    color: rgba(0,0,0,.6);
  }

  #contact {
    font-weight: bolder;
  }

  #Mail {
    color: rgba(148,0,5,0.84);
  }

  #LinkedIn{
    color: #0072b1;
  }

  #Github {
    color: rgba(0,0,0,0.89);
  }
</style>
