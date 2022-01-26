import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useCompanies() {
    const companies = ref([])

    const errors = ref('')
    const router = useRouter()

    //async function to get companies
    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data
    }

    //Create company
    const storeCompany = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/companies', data)
            await router.push({ name: 'companies.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }
    }

    //Delete company
    const destroyCompany = async (id) => {
        await axios.delete('/api/companies/' + id)
    }

    return{
        companies,
        getCompanies,
        storeCompany,
        errors,
        destroyCompany
    }
}