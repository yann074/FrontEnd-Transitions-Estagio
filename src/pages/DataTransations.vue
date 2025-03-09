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
          </tr>
        </thead>
        <tbody>
            
            <tr v-if="datas.length" v-for="datas in datas" :key="datas.id">
                <td>{{ datas.dataCriacao }}</td>
                <td>{{ datas.tipo }}</td>
                <td>{{ datas.valor }}</td>
                <td>{{ datas.descricao }}</td>
                <td>{{ datas.categoria }}</td>
            </tr>
        
        </tbody>
      </table>
    </div>
  </template>

  <script>
  import Api from "../service/Api";
  
  export default {
        data(){
          return{
              dates: ""
          }
        },

        mounted(){
            this.fetchData();
        },
        methods: {
            async fetchData(){
                try{
                const response = await Api.get("/all");
                this.dates = response
                }
                catch(error){
                    console.log(error)
                }
            }
        }
      
}
</script>