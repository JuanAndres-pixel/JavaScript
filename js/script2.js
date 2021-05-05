function comprar() {
  let gansito = true;
  let chocoBar = true;

  if (gansito === true) {
    alert("Toma tu gansito");
  }

  //|| = ó / && = y //
  if (chocoBar === true && gansito !== true) {
    alert("Toma tu barra de chocorramo");
  }
  if (chocoBar === false && gansito === false) {
    alert("No hay gansito");
  }
}
