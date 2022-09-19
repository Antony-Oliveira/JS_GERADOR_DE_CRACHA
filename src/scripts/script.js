$(document).ready(function () {

    $(".off").css("display", "none");

    let form = document.getElementById("form");
    let nome = document.getElementById("nome");
    let cpf = document.getElementById("cpf");
    let nasc = document.getElementById("nasc");
    let func = document.getElementById("func");
    let senha = document.getElementById("pass");
    
    $(cpf).mask("000.000.000-00");
    $(nasc).mask("00/00/0000");

    form.onsubmit = (e) => {
        e.preventDefault();
        if(nome.value.length == 0){
            $("#iN").css("display", "");
            $("#iN").css("animation", "aparecer 0.3s");
            $("#helpN").css("display", "");
            $("#helpN").css("animation", "aparecer 0.3s");
            $("#helpN").text("O campo nome não pode estar vazío")
        }else{
            $("#iN").css("animation", "desaparecer 0.3s");
            $("#helpN").css("animation", "desaparecer 0.3s");
            setTimeout(() => {
            $("#iN").css("display", "none");
            $("#helpN").css("display", "none");
            }, 200);
        }
        
        if(cpf.value.length < 14){
            $("#iC").css("display", "");
            $("#iC").css("animation", "aparecer 0.3s");
            $("#helpC").css("display", "");
            $("#helpC").css("animation", "aparecer 0.3s");
            $("#helpC").text("O campo CPF precisa estar completo");
        }else{
            $("#iC").css("animation", "desaparecer 0.3s");
            $("#helpC").css("animation", "desaparecer 0.3s");
            setTimeout(() => {
            $("#iC").css("display", "none");
            $("#helpC").css("display", "none");
            }, 200);
        }

        if(nasc.value.length < 10){
            $("#iD").css("display", "");
            $("#iD").css("animation", "aparecer 0.3s");
            $("#helpD").css("display", "");
            $("#helpD").css("animation", "aparecer 0.3s");
            $("#helpD").text("O campo data precisa estar completo")
        }else{
            $("#iD").css("animation", "desaparecer 0.3s");
            $("#helpD").css("animation", "desaparecer 0.3s");
            setTimeout(() => {
            $("#iD").css("display", "none");
            $("#helpD").css("display", "none");
            }, 200);
        }

        if(senha.value != "Moldsoft@2022"){
            $("#iS").css("display", "");
            $("#iS").css("animation", "aparecer 0.3s");
            $("#helpS").css("display", "");
            $("#helpS").css("animation", "aparecer 0.3s");
            $("#helpS").text("Senha incorreta!")
        }else{
            $("#iS").css("animation", "desaparecer 0.3s");
            $("#helpS").css("animation", "desaparecer 0.3s");
            setTimeout(() => {
            $("#iS").css("display", "none");
            $("#helpS").css("display", "none");
            }, 200);
        }

        if(nome.value.length > 1 && cpf.value.length == 14 && nasc.value.length == 10 && func && senha.value == "Moldsoft@2022"){
            $("#formulario").css("animation", "form-cracha 1s");
            $("#formulario").css("position", "relative");
            setTimeout(() => {
                $("#formulario").css("display", "none");
            }, 1000);
            $("#back").css("animation", "aparecer 1s");
            $("#cracha").css("animation", "aparecer 1s");
            setTimeout(() => {
                $("#cracha").css("display", "");
                $("#back").css("display", "");
            }, 800);
            alertify.set('notifier','position', 'top-left');
            alertify.success('Crachá criado com sucesso! Se quiser alterar algum valor, clique no campo que deseja');
            $("#cNome").text(nome.value);
            if(func.value == "Desenvolvedor"){
                $("#funcImg").attr("src", "/src/images/dev.png");
            }else if(func.value == "Designer") {
            $("#funcImg").attr("src", "/src/images/designer.png");
            }else if(func.value == "Recursos Humanos"){
            $("#funcImg").attr("src", "/src/images/rh.png");
            }
            $("#cNome").val(nome.value);
            $("#cCpf").val(cpf.value);
            $("#cNasc").val(nasc.value);
            $("#cFunc").val(func.value);
           
            //onFocusOut = o oposto de onfocus: quando o input perde o foco
            //onDblClick = ao duplo clique
            //Usei essa outra sintaxe de "on" do jquery pois nao funcionava direto 'dblClick' e 'focusout'
            $("#dNome").on("dblclick", function () {
                $("#cNome").removeAttr('disabled'); 
                document.getElementById("cNome").focus();
            });

           
            $("#cNome").on("focusout", function () {
                
                if($("#cNome").val().length == 0){
                   alertify.error("O nome não pode ser vazio!");
                    document.getElementById("cNome").focus();
                }else{
                    $("#cNome").attr('disabled', 'disabled'); 
                }

            });

            

            $("#dCpf").on("dblclick", function (e) {
                $("#cCpf").removeAttr('disabled'); 
                $("#cCpf").mask("000.000.000-00");
                document.getElementById("cCpf").focus();
            });

            $("#cCpf").on("focusout", function () {
                if($("#cCpf").val().length < 14){
                    alertify.error("O CPF deve ter todos os digitos!!");
                     document.getElementById("cCpf").focus();
                 }else{
                     $("#cCpf").attr('disabled', 'disabled'); 
                 }
 
            });

            $("#dNasc").on("dblclick", function () {
                $("#cNasc").removeAttr('disabled'); 
                $("#cNasc").mask("00/00/0000");
                document.getElementById("cNasc").focus();
            });

            $("#cNasc").on("focusout", function () {
                if($("#cNasc").val().length < 10){
                    alertify.error("A data de nascimento precisa ter dia/mes/ano !!");
                     document.getElementById("cNasc").focus();
                 }else{
                     $("#cNasc").attr('disabled', 'disabled'); 
                 }
 
            });

            $("#dFunc").on("dblclick", function () {
                $("#cFunc").removeAttr('disabled');
                $("#funcImg").css("background-color", "white");
                document.getElementById("cFunc").focus().click();
            });

            $("#cFunc").on("focusout", function () {
                $("#cFunc").attr("disabled", "disabled");
                $("#funcImg").css("background-color", "");
                if($("#cFunc").val() == "Desenvolvedor"){
                    $("#funcImg").attr("src", "/src/images/dev.png");
                }else if($("#cFunc").val() == "Designer") {
                $("#funcImg").attr("src", "/src/images/designer.png");
                }else if($("#cFunc").val() == "Recursos Humanos"){
                $("#funcImg").attr("src", "/src/images/rh.png");
                }

            });
        }
    }

    $("#back").click(function (e) { 
        $("#cracha").css("animation", "desaparecer 1s");
        $("#back").css("animation", "desaparecer 1s");
        setTimeout(() => {
            $("#cracha").css("display", "none");
            $("#back").css("display", "none");
        }, 1000);
        $("#formulario").css("animation", "aparecer 1s");

        setTimeout(() => {
        $("#formulario").css("display", "");
            
        }, 1000);
    });
    
});

// $("small").css("animation", "desaparecer 1s");
// $("small").attr("class", "off");
// document.getElementById("dNome").ondblclick = (e) => {
//     $("#cNome").removeAttr('disabled');  
// }
// document.getElementById("dNome").onfocusout = (e) => {
//     $("#cNome").attr('disabled', 'disabled');  
// }