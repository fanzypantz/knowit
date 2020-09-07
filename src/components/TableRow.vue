<template>
  <tr class="table-row">
    <td>
      <a class="table-creator" :href="item.owner.html_url" target="_blank"
        ><img :src="item.owner.avatar_url" alt=""
      /></a>
    </td>
    <td>
      <a :href="item.html_url" target="_blank">{{ item.name }}</a>
    </td>
    <td>
      {{ item.forks }}
    </td>
    <td>
      {{ item.watchers }}
    </td>
    <td>
      {{ item.open_issues }}
    </td>
  </tr>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class TableRow extends Vue {
  @Prop() private item!: Record<string, any>;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-row {
  width: 100%;
}

.table-creator {
  display: block;
  height: 50px;

  img {
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
  }
}
</style>
