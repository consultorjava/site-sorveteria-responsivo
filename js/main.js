
$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder:'(99)99999-9999'
    });
    
    $('#cpf').mask('000.000.000-00',{
        placeholder:'999.999.999-99'
    });
    
    $('#cep').mask('00.000-000',{
        placeholder:'99.999-999'
    });

    $('form').validate({
        rules:{
            nomeCompleto: {
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            cpf:{
                required:true
            },
            endereco:{
                required:true
            },
            cep:{
                required:true
            }
        },
        messages:{
            nomeCompleto: 'Por favor insira o seu nome Completo.',
            email: 'Digite o seu E-mail.'
            
        },
        errorClass:'mensagemError',
    });



});


