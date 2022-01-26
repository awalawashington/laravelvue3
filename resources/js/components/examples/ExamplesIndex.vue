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
          <td><button @click="deleteCompany(item.id)" type="button" class="btn btn-danger btn-sm">Delete</button></td>
          <td><router-link :to="{ name: 'example.edit', params: { id: item.id } }"  type="button" class="btn btn-secondary btn-sm">Edit</router-link></td>
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
    const {companies, getCompanies, destroyCompany} = useCompanies()

    onMounted(getCompanies)

    const deleteCompany = async (id) => {
        if (!window.confirm('Are you sure?')) {
          return
        }
        await destroyCompany(id)
        await getCompanies()
    }

    return{
      companies,
      deleteCompany
    }
  }
}
</script>

<style>

</style>