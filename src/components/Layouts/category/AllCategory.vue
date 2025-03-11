<script setup>
import Api from "../../../service/Api"
import { ref, onMounted } from "vue";
import { format } from 'date-fns'

const category = ref([]);

const fetchData = async () => {
  try {
    const response = await Api.get("/category"); 
    console.log(response.data.data); 
    category.value = response.data.data; 
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

onMounted(fetchData)
</script>


<template>
    <select name="category"class="form-select">
            <option value="">Escolha uma opção</option>
            <option  v-for="(categories, index) in category"  :key="index" :value="categories.name">{{ categories.name }}</option>
    </select>
</template>