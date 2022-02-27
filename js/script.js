
function carrega(){
    
    var ms = window.document.getElementById("msg")
    var im = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()

    ms.innerHTML=`<strong>Agora são ${hora} horas </strong>`

    if(hora >= 0 && hora < 12){
    // Bom dia
       img.src="igreja.png"
       document.body.style.background ='#b88c8c'

    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src="Ruth.png"
        document.body.style.background ='#f8f0f0'
    }else{
        //Boa noite
        img.src="ruth1.png"
        document.body.style.background ='#fadfc3'
    }


    }
    


