function resta(a, b) {
  return a - b;
}

function calcularDescuento(a, b, c) {
  return (a * b) / c;
}

let precioAperol = 1300;
let precioCynar = 1200;
let precioFernet = 1900;
let precioGin = 1800;

let precioDescAperol = calcularDescuento(precioAperol, 10, 100);
let precioDescCynar = calcularDescuento(precioCynar, 10, 100);
let precioDescFernet = calcularDescuento(precioFernet, 10, 100);
let precioDescGin = calcularDescuento(precioGin, 10, 100);

let entrada = prompt("Es usted mayor de 18 años?");
while (entrada != "ESC") {
  switch (entrada) {
    case "Si":
    case "si":
    case "SI":
    case "sI":            
      alert("Bienvenido a la tienda de Corchos & Barriles");
      alert("A continuación te mostramos las bebidas disponibles");
      let seleccion = prompt(
        "Ingrese el numero de la bebida de la cual desea conocer el precio: 1-Aperol, 2-Cynar, 3-Fernet, 4-Gin"
      );
      if (seleccion == 1) {
        alert(
          "El precio es $1300, si abona en efectivo o transferencia el precio es $" +
            resta(precioAperol, precioDescAperol)
        );
      }
      if (seleccion == 2) {
        alert(
          "El precio es $1200, si abona en efectivo o transferencia el precio es $" +
            resta(precioCynar, precioDescCynar)
        );
      }
      if (seleccion == 3) {
        alert(
          "El precio es $1900, si abona en efectivo o transferencia el precio es $" +
            resta(precioFernet, precioDescFernet)
        );
      }
      if (seleccion == 4) {
        alert(
          "El precio es $1800, si abona en efectivo o transferencia el precio es $" +
            resta(precioGin, precioDescGin)
        );
      } else {
        alert("Ingrese una opción válida");
      }
      break;
    case "No":
        case "NO":
            case "no":
                case "nO":    
      alert("Lo sentimos, no puede continuar");
      continue;
    default:
      alert("Debe ingresar ''si'' o ''no''");
      break;
  }
  entrada = prompt("Es usted mayor de 18 años?");
}
