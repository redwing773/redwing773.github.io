<template>
  <div class="header-container">
    <div class="user-container">
        <div class="user">User</div>
        <div class="user-description">
            <slot name="username"></slot>
            <div class="time">
                <slot name="time"></slot>
            </div>
            <slot name="karma"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        info: Object,
    },

}
</script>

<style scoped>
.user-container {
  display: flex;
}
.user-container .user{
  width:50px;
  height:50px;
  background-color:pink;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>