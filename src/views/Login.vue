<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              (v$.email.$dirty && !v$.email.required) ||
              (v$.email.$dirty && !v$.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.email.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </small>
      </div>

      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              (v$.password.$dirty && !v$.password.required) ||
              (v$.password.$dirty && !v$.password.minLength),
          }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-for="error of v$.password.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import Messages from "@/utils/Messages";
import { useVuelidate } from "@vuelidate/core";
import { email, required, minLength, helpers } from "@vuelidate/validators";

export default {
  name: "login",
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: {
      email: helpers.withMessage("Введите корректный Email", email),
      required: helpers.withMessage(
        "Поле Email не должно быть пустым",
        required
      ),
    },
    password: {
      required: helpers.withMessage("Введите пароль", required),
      minLength: helpers.withMessage(
        ({ $params, $model }) =>
          `Пароль должен быть ${$params.min} символов. Сейчас он  ${$model.length}`,
        minLength(8)
      ),
    },
  },
  mounted() {
    if (Messages[this.$route.query.message]) {
      this.$message(Messages[this.$route.query.message]);
    }
  },
  methods: {
    async submitHandler() {
      console.log(this.v$);
      if (this.v$.$invalid) {
        this.v$.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      try {
        await this.$store.dispatch("login", formData);
        this.$router.push("/");
      } catch (error) {}
    },
  },
};
</script>
