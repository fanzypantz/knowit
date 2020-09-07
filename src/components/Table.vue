<template>
  <table class="table" v-if="items">
    <tr class="table-header">
      <th>Creator</th>
      <th>Name</th>
      <th>Forks</th>
      <th>Watchers</th>
      <th>Open Issues</th>
    </tr>

    <TableRow
      v-for="(item, index) in items"
      :key="index"
      :item="item"
    ></TableRow>
  </table>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
import TableRow from "./TableRow.vue";

@Component({
  components: {
    TableRow
  }
})
export default class Table extends Vue {
  @Prop() public items: Array<any> | undefined;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  color: white;
  margin: 0;
}

.table th {
  width: calc(100% / 5);
}

.table tr {
  background-color: #2c3e50;
  height: 56px;

  &:nth-of-type(2n) {
    background-color: #5d6d88;
  }

  &:hover {
    background-color: #2c2c2c;
  }
}
</style>
