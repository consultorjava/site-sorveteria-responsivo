$(document).ready(function(){

    $('#telefone').mask('(00)00000-0000',{
        placeholder:'(99)99999-9999'
    });

    $('form').validate({
        rules:{
            nome: {
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            mensagem:{
                required:true
            }
        },
        messages:{
            nome: 'Por favor insira o seu nome Completo.',
            email: 'Digite o seu E-mail.',
            telefone: 'Digite o seu telefone.',
            mensagem: 'Deixe o seu comentário é muito importante para nós!!!.'
            
        },
        errorClass:'mensagemError',
    });



});


