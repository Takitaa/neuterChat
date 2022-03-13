<template>
  <div id="side-panel">
    <slide-out dock="right" :visible.sync="visible">
      <div id="chat-container">
        <p>The content</p>
        <bubble-chat
          :position="chatPosition"
          :messages="messagesList"
          :text-field="'message'"
          :sender-name-field="'username'"
          :avatar-link-field="'iconUrl'"
        >
        </bubble-chat>
      </div>
    </slide-out>
  </div>
</template>

<script>
export default {
  name: "SlidePanel",

  data() {
    return {
      visible: false,
      value: undefined,
      messagesList: [
        {
          username: "John Doe",
          message: "Hey guys! How are you?",
          iconUrl: "https://www.link-to-john-doe-pic.jpg",
        },
      ],
    };
  }, //end Data
};
</script>

<style></style>
