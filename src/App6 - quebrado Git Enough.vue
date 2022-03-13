<template>
  <div id="app">
    <!-- <ToggleButton :buttonToggled="buttonToggled"></ToggleButton>-->
    <ToggleButton></ToggleButton>

    <!-- <SlidePanel @status-toggle="handleStatusToggle"></SlidePanel>-->
    <SlidePanel></SlidePanel>
  </div>
</template>

<script>
import ToggleButton from "./components/ToggleButton.vue";
import SlidePanel from "./components/SlidePanel.vue";

export default {
  name: "App",
  components: {
    ToggleButton,
    SlidePanel,
  },

  data() {
    return {
      // buttonToggled: false,
      // visible: false,
      // value: undefined,
      // messagesList: [
      //   {
      //     username: "John Doe",
      //     message: "Hey guys! How are you?",
      //     iconUrl: "https://www.link-to-john-doe-pic.jpg",
      //   },
      // ],
    };
  },

  methods: {
    // handleStatusToggle: function (statusToggle) {
    //   console.log(statusToggle);
    // },
  },
};
</script>

<style>
#app {
  margin-top: px;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}

#button {
  width: 45px;
  float: right;
  /* pura mágica */
  position: absolute;
  top: 50%; /* posiciona na metade da tela */
  margin-top: -25px;
}

#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 40px;
  background: grey;
}
</style>
