const $cambiarInterruptor = document.getElementById("cambiarInterruptor"),
      $cambiarFoco = document.getElementById("cambiarFoco"),
      $swith = document.querySelector(".switch");

function cambiarImagenes() {
    if ($cambiarFoco.src.match("../Lampara/Imagenes/encendido-1.png") && $cambiarInterruptor.src.match("../Lampara/Imagenes/on-or.png")) {
        $cambiarFoco.src = "../Lampara/Imagenes/apagado-1.png";
        $cambiarInterruptor.src = "../Lampara/Imagenes/off-or.png";
    }else{
        $cambiarFoco.src = "../Lampara/Imagenes/encendido-1.png";
        $cambiarInterruptor.src = "../Lampara/Imagenes/on-or.png";
    }
}

$swith.addEventListener("click",cambiarImagenes)

