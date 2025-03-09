<template>
    <div id="app">
      <h1>Formulário de Cadastro</h1>
      
      <!-- Formulário de cadastro -->
      <form @submit.prevent="handleSubmit">
  
        <div>
          <label for="valor">Valor:</label>
          <div class="mb-3">
            <input
              type="number"
              class="form-control"
              id="valor"
              name="valor"
              placeholder="Digite o valor"
              v-model="form.valor"
            />
          </div>
        </div>
  
        <div>
            <div class="mb-3">
              <label for="descricao">Descrição:</label>
            <input
              type="text"
              class="form-control"
              id="desc"
              name="desc"
              placeholder="Digite a desc"
              v-model="form.desc"
            />
          </div>
        </div>
  
        <div>
          <label for="categoria">Categoria:</label>
          <select v-model="formData.categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="Categoria 1">Categoria 1</option>
            <option value="Categoria 2">Categoria 2</option>
            <option value="Categoria 3">Categoria 3</option>
          </select>
        </div>
  
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
import Api from "../service/Api";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        valor: "",
        desc: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      Api.post("/register", {
        email: this.form.email,
        password: this.form.password,
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
  