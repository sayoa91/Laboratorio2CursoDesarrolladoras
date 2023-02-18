
function validar(campo,patron,error) {
    var item = document.getElementById(campo)
    var validoPatron
    var mensaje=""
    var item2=document.getElementById("password1")
    if (patron==0){
        validoPatron=/^[A-Za-z\s]+$/
        mensaje="Nombre inválido"
    }
    else if (patron==1){
        validoPatron =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        mensaje="Email inválido"
    }
    else if (patron==2 || patron==3){
        validoPatron =/^[\s\S]{8,15}$/
        mensaje="Debe contener al menos 8 caracteres"
    }
 
    var error=document.getElementById(error)

    if (!item.value) {
        error.innerHTML = "Rellene este campo";
        item.classList.add ("error");
        item.classList.add ("errorIcono");
        item.classList.remove ("valido");
        item.classList.remove ("validoIcono");
        return false;
    }
    else if (validoPatron.test(item.value)) {
        if(patron!=3){
        error.innerHTML = "";
        item.classList.add ("valido");
        item.classList.add ("validoIcono");
        item.classList.remove ("error");
        item.classList.remove ("errorIcono");
        return true;
        }
        else {
            if(item2.value==item.value){
                error.innerHTML = "";
                item.classList.add ("valido");
                item.classList.add ("validoIcono");
                item.classList.remove ("error");
                item.classList.remove ("errorIcono");
                return true;
            }
            else
            {
                error.innerHTML = "Las contraseñas deben coincidir";
                item.classList.add ("error");
                item.classList.add ("errorIcono");
                item.classList.remove ("valido");
                item.classList.remove ("validoIcono");
                return false;
            }
        }
    }

    else {
        error.innerHTML = mensaje;
        item.classList.add ("error");
        item.classList.add ("errorIcono");
        item.classList.remove ("valido");
        item.classList.remove ("validoIcono");
        return false;
    }

}


function enviar (){
    var nombre=validar("nombre",0,"errorNombre")
    var email= validar ("email",1,"errorEmail")
    var password1= validar ("password1",2,"errorClave1")
    var password2= validar ("password2",3,"errorClave2")
    if(nombre & email & password1 & password1){
        alert ("La inscripción se ha realizado correctamente");
        return true
    }
    else{
        return false
        
    }
 }

