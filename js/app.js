const app = new Vue({
  el: "#app",
  data: {
    titulo: "Desencriptador",
    cadenaEncriptada: "",
    resultado: null,
    showResult: false,
    showError: false,
  },
  methods: {
    desencriptar: function () {
      if (!this.validarCadena(this.cadenaEncriptada)) {
        this.showError = true;
        this.showResult = false;
        return;
      }
      this.showError = false;
      let partes = this.cadenaEncriptada.split("000");
      this.resultado = {
        first_name: partes[0],
        last_name: partes[1],
        id: partes[2],
      };
      console.log(this.resultado);
    },
    validarCadena: function (cadena) {
      const regex = /^[a-zA-Z]+000[a-zA-Z]+000\d+$/;
      return regex.test(cadena);
    },
    disableError: function () {
      this.showError = false;
    },
  },
});
