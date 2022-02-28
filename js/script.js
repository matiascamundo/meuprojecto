
function carrega(){
    
    var ms = window.document.getElementById("msg")
    var im = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()

    ms.innerHTML=`<strong><h1>Agora são ${hora} horas</h1></strong>`

    if(hora >= 0 && hora < 12){
    // Bom dia
       img.src="imagens/s2.jpg"
     document.body.style.background ='#244BBF'

    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src="imagens/s3.jpg"
    document.body.style.background ='#4A88D9'  
    }else{
        //Boa noite
        img.src="imagens/s5.jpg"
    document.body.style.background ='#244BBF'
    }


    }
    


