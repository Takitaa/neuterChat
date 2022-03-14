<template>
  <div class="button-close" id="button-toggle">
    <slot>
      <VueToggles
        height="30"
        width="90"
        margin="100"
        checked-text="Chat On"
        unchecked-text=" Chat Off"
        :value="buttonToggled"
        @click="toggleOn"
      >
      </VueToggles>
    </slot>
  </div>
</template>

<script>
export default {
  name: "ToggleButton",

  data() {
    return {
      buttonToggled: false,
    };
  },

  methods: {
    toggleOn: function (event) {
      this.buttonToggled = !this.buttonToggled;
      console.log(event.target.event);
      //const statusButtonToggle = event.target.value;
      //this.$emit("status-toggle", statusButtonToggle);
    },
  },
};
</script>

<style></style>
