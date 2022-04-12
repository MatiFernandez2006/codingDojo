/*
               Variables                  Datos
                auntContactInfo     =    ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
                Produce             =    ["manzanas", "naranjas"]
                Frozen              =    ["brócoli", "helado"]
                Frozen.push                         ("croqueta de papa")
              */

function muestraInformaciónContacto() {
  var auntContactInfo = [
    "Paula",
    "Smith",
    "Calle Principal 1234",
    "St. Louis",
    "MO",
    12345,
  ];
  console.log(auntContactInfo);
}

function muestraListaDeCompras() {
  var produce = ["manzanas", "naranjas"];
  var frozen = ["brócoli", "helado"];
  frozen.push("croqueta de papa");
  console.log(frozen);
}

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
