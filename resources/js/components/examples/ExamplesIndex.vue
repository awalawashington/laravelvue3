<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in companies" :key="item.id">
          <th scope="row">{{ item.name }}</th>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.website }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useCompanies from "../../composables/companies.js";

export default {
  setup(){
    const {companies, getCompanies} = useCompanies()

    onMounted(getCompanies)

    return{
      companies
    }
  }
}
</script>

<style>

</style>