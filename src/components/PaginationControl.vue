<template>
  <div v-if="total" class="table-pagination-control">
    <button @click="previousPage" class="table-pagination-button">
      Previous Page
    </button>
    <p class="table-pagination-text">
      Page {{ pages.paginationPage + pages.apiPage * 5 - 5 }} /
      {{ Math.floor(total / 5) }}
    </p>
    <button @click="nextPage" class="table-pagination-button">Next Page</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component
export default class PaginationControl extends Vue {
  @Prop() private pages!: Record<string, any>;
  @Prop() private total!: number;

  @Emit()
  previousPage() {
    return;
  }

  @Emit()
  nextPage() {
    return;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-creator {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
}

.table-pagination-control {
  width: 100%;
  display: flex;
  height: 56px;
  justify-content: space-between;
  background-color: #5d6d88;
  color: white;
}
.table-pagination-text {
  line-height: 56px;
  margin: 0;
}
.table-pagination-button {
  padding: 0;
  width: 200px;
  border: none;
  background-color: #2c3e50;
  color: white;
  font-weight: 700;
  font-size: 1em;

  &:hover {
    cursor: pointer;
    background-color: #2c2c2c;
  }
}
</style>
