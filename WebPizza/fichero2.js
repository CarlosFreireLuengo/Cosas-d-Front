function calcular() {
      const precio = document.getElementById("pizza").value;
      const cantidad = document.getElementById("cantidad").value;
      document.getElementById("total").value = precio * cantidad;
}