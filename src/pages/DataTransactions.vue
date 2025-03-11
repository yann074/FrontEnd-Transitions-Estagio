<script setup>
import Api from "../service/Api";
import { ref, onMounted } from "vue";
import { format } from 'date-fns'
import NewCategory from "../components/Layouts/category/NewCategory.vue";
import DeleteCategory from "../components/Layouts/category/DeleteCategory.vue";

const transactions = ref([]);

const fetchData = async () => {
  try {
    const response = await Api.get("/transactions"); 
    console.log(response.data.data); 
    transactions.value = response.data.data.map(transaction => {
      return {
        ...transaction,
        date_criated: format(new Date(transaction.date_criated), "hh:mm - dd/MM/yyyy ")
      }
    }); 
  } catch (error) {
    console.error("Erro ao buscar os dados:", error);
  }
};

onMounted(fetchData)
</script>

<template>
    <div id="app" class="container mt-5">
      <h1 class="mb-4">Lista de Itens</h1>
  
      <!-- Tabela de itens com Bootstrap -->
      <table class="table table-bordered table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Data de Criação</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Categoria</th>
            <th>    
              <router-link :to="`/formregister`" class="btn btn-primary">
                <i class="bi bi-plus"></i> Adicionar
              </router-link>

              </th>
              
              
            </tr>
        </thead>
        <tbody>
            
            <tr  v-for="(transaction, index) in transactions" :key="index">
                <td>{{ transaction.date_criated  }}</td>
                <td>{{ transaction.tipe  ? "Entrada" : "Saida"}}</td>
                <td>{{ transaction.value }}</td>
                <td>{{ transaction.descricao }}</td>
                <td>{{ transaction.categoria }}</td>
                <router-link :to="`/transaction/${transaction.id}`">
                    <i class="fas fa-edit"></i> Editar
                </router-link>
                  
                  <router-link :to="`/transaction/${transaction.id}`">
                    <i class="fas fa-trash"></i> Excluir
                  </router-link>
                </tr>
                
              </tbody>
            </table>
            <h3>Adicionar  Categoria</h3>
            <NewCategory />
            <h3>Categorias Disponíveis</h3>
            <DeleteCategory />
    </div>
  </template>

