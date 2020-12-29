const db = firebase.firestore()

$(document).ready(() => {
    const btnEnviar = $('#mainEnviar')


    btnEnviar.click(() => {
        var autor = $('#main-input_autor').val()
        var frase = $('#main-input_frase').val()

        console.log(autor)

        if(autor.length > 0 && frase.length > 0){
            db.collection("Frase").doc(autor).set({
                "autor": autor,
                "frase": frase
            })
        }else{
            console.log('Nulos')
        }
    })
}) 