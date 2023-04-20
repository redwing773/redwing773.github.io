<template>
  <div>
    <!-- <tool-bar></tool-bar> -->
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin.js';

export default {
  components: {
    ListItem,
    // ToolBar
  },
  mixins: [ListMixin],
}
</script>