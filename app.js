		//-------------------- scrip_encriptar------------------------//
		function encriptar (){
            var texto = document.querySelector("#mensaje_entrada").value;
            var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.querySelector(".texto_salida").value = textoCifrado;
            document.querySelector("#mensaje_entrada").value;
            }
            var boton1 = document.querySelector("#boton-encriptar"); boton1.onclick = encriptar;
            //-------------------- scrip_encriptar------------------------//
    
            //-------------------- scrip_desencriptar------------------------//
            function desencriptar (){ var texto = document.querySelector("#mensaje_entrada").value; var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); document.querySelector(".texto_salida").value = textoCifrado; document.querySelector("#mensaje_entrada").value;
            }
            var boton2 = document.querySelector("#boton-desencriptar"); boton2.onclick = desencriptar;
            //-------------------- scrip_desencriptar------------------------//
    
            //-------------------- scrip_copiar------------------------//
            function copiar_texto() {
                var content = document.getElementById('mensaje_salida');
                content.select();
                document.execCommand('copy');
            }
        //-------------------- scrip_copiar------------------------//