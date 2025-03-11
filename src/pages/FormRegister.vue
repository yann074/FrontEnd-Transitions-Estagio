<template>
  <section class="container mt-5">
    <div class="text-center mb-4">
      <h1>Formulário de Cadastro</h1>
    </div>

    <form @submit.prevent="handleSubmit">
  
      <div class="mb-3">
        <label for="valor" class="form-label">Valor:</label>
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="valor"
          name="valor"
          placeholder="Digite o valor"
          v-model="form.value"
        />
      </div>
  
      <div class="mb-3">
        <label for="descricao" class="form-label">Descrição:</label>
        <input
          type="text"
          class="form-control"
          id="desc"
          name="desc"
          placeholder="Digite a descrição"
          v-model="form.desc"
        />
      </div>
  
      <div class="mb-3">
        <label for="tipo" class="form-label">Tipo:</label>
        <select v-model="form.type" class="form-select" name="tipo" required>
          <option value="">Escolha uma Opção</option>
          <option :value="true">Entrada</option>
          <option :value="false">Saída</option>
        </select>
      </div>
  
      <div class="mb-3">
        <label for="categoria" class="form-label">Categoria:</label>
        <AllCategory />
      </div>
  
      <button type="submit" class="btn btn-primary w-100">Cadastrar</button>
    </form>
  </section>
</template>
  
  <script>
import Api from "../service/Api";
import axios from "axios";
import AllCategory from "../components/Layouts/category/AllCategory.vue";


export default {
  components: {
    AllCategory, // Certifique-se de que o componente está registrado aqui
  },
  data() {
    return {
      form: {
        value: "",
        desc: "",
        type: "",
        categoria: ""
      },
    };
  },
  methods: {
    handleSubmit() {
      Api.post("/new_transitions", {
        value: this.form.value,
        desc: this.form.desc,
        type: this.form.type,
        categoria: this.form.categoria,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro de login:", error);
      });
    },
  },
};
  </script>
  