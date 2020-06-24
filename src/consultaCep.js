
function consultaCep() {
   //$('.bar_progresso').show()
    const cep = document.querySelector('input#buscaCep').value
    const url = "https://viacep.com.br/ws/" + cep + "/json/"
    console.log(url)

    $.ajax({
        url: url ,
        type: 'GET',
        success: function(response) {
            console.log(response)
            $('#logradouro').html(response.logradouro)                    // com Jquery
            $('#bairro').html(response.bairro)                            
                     //document.querySelector('p#bairro').innerHTMl = response.bairro            //javascrip puro
            $('#localidade').html(response.localidade)                    
            $('#uf').html(response.uf)                                    
            $('#pegaCep').html("CEP: " + response.cep)
            //$('.mostraCep').show()
            //$('.bar_progresso').hide()

        }
    })
}

$(function() {
    $(".bar_progresso").hide()  
    //$('.mostraCep').hide()
     
})
 
