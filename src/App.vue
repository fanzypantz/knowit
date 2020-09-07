<template>
  <div id="app">
    <PaginationControl
      :pages="{ apiPage, paginationPage }"
      :total="repoData.total_count"
      @next-page="nextPage"
      @previous-page="previousPage"
    />

    <Table
      v-if="repoData.items !== undefined && !isLoading"
      :items="paginate(repoData.items, 20, paginationPage)"
    />

    <PaginationControl
      v-if="!isLoading"
      :pages="{ apiPage, paginationPage }"
      :total="repoData.total_count"
      @next-page="nextPage"
      @previous-page="previousPage"
    />

    <Loader v-if="isLoading" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { fetchApi, paginate } from "@/util";
import Table from "./components/Table.vue";
import PaginationControl from "./components/PaginationControl.vue";
import Loader from "./components/Loader.vue";

@Component({
  components: {
    Table,
    PaginationControl,
    Loader
  },
  methods: {
    paginate: paginate
  }
})
export default class App extends Vue {
  private isLoading = true;
  private apiPage = 1;
  private paginationPage = 1;
  private repoData = {};

  async mounted() {
    this.repoData = await fetchApi(this.apiPage);
    this.isLoading = false;
  }

  toggleLoading(newBool?: boolean) {
    if (newBool) {
      this.isLoading = newBool;
    } else {
      this.isLoading = !this.isLoading;
    }
  }

  async previousPage() {
    if (this.isLoading) {
      return;
    }
    if (this.paginationPage === 1 && this.apiPage > 1) {
      this.toggleLoading(true);
      this.paginationPage = 5;
      this.apiPage--;
      this.repoData = await fetchApi(this.apiPage);
      this.toggleLoading(false);
    } else if (this.paginationPage > 1) {
      this.paginationPage--;
    }
  }

  async nextPage() {
    if (this.isLoading) {
      return;
    }
    if (this.paginationPage === 5) {
      this.toggleLoading(true);
      this.paginationPage = 1;
      this.apiPage++;
      this.repoData = await fetchApi(this.apiPage);
      this.toggleLoading(false);
    } else {
      this.paginationPage++;
    }
  }
}
</script>

<style lang="scss">
body {
  background-color: #2c2c2c;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 40%;
  margin: 50px auto;
}

a {
  color: white;
  text-decoration: none;

  &:hover {
    color: #5d6d88;
  }
}
</style>
