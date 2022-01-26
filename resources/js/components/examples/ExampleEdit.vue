<template>
  <div>
    <div v-if="errors !== ''">
      <div class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
        <div>
          {{ errors }}
        </div>
      </div>
    </div>
    <form @submit.prevent="saveCompany">
      <div class="mb-3">
        <label for="exampleInputName1" class="form-label">Name</label>
        <input v-model="company.name" type="address" class="form-control" id="exampleInputName1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input v-model="company.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputAddress1" class="form-label">Address</label>
        <input v-model="company.address" type="text" class="form-control" id="exampleInputAddress1">
      </div>
      <div class="mb-3">
        <label for="exampleInputWebsite1" class="form-label">Website</label>
        <input v-model="company.website" type="text" class="form-control" id="exampleInputWebsite1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import useCompanies from "../../composables/companies.js";

export default {
    props: {
        id: {
            required: true,
            type: String
        }
    },
    setup(props) {
        const { errors, company, updateCompany, getCompany } = useCompanies()

        onMounted(() => getCompany(props.id))

        const saveCompany = async () => {
            await updateCompany(props.id)
        }
      
        return {
            errors,
            company,
            saveCompany
        }
    }
}
</script>

<style>

</style>