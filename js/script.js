
function carrega(){
    
    var ms = window.document.getElementById("msg")
    var im = window.document.getElementById("img")
    var data = new Date()
    var hora = data.getHours()

   // ms.innerHTML=`<strong><h1>Agora são ${hora} horas</h1></strong>`

    if(hora >= 0 && hora < 12){
       // Bom dia
       ms.innerHTML=`<strong><h1>Bom dia, obrigado por  acessar o site! Agora são ${hora} horas.</h1></strong>`
       img.src="imagens/s2.jpg"
     //document.body.style.background ='#244BBF'

    }else if(hora >= 12 && hora < 18){
        //Boa tarde
        ms.innerHTML=`<strong><h1>Boa tarde, obrigado por  acessar o site! Agora são ${hora} horas.</h1></strong>`
        img.src="imagens/s1.jpg"
    document.body.style.background ='#4A88D9'  
    }else{
        //Boa noite
        ms.innerHTML=`<strong><h1>Boa noite, obrigado por  acessar o site! Agora são ${hora} horas.</h1></strong>`
        img.src="imagens/s5.jpg"
    document.body.style.background ='#244BBF'
    }


    }
    


