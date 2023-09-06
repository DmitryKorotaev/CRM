export default {
  install(Vue, options) {
    Vue.config.globalProperties.$message = (html) => {
      M.toast({ html });
    };
    Vue.config.globalProperties.$error = (html) => {
      M.toast({ html: `[Ошибка] ${html}` });
    };
  },
};
