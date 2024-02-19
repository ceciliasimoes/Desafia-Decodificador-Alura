function criptografarTexto(){
    
    const texto = document.querySelector("input").value;
    console.log("Texto para criptografar:"+texto);
    let codigo;
    for(i=0; i < texto.length; i++){
        if(texto[i] == "i"){
            codigo = texto.replace(/i/g, "e");;
            /*
            /: Indica o início da expressão regular.
            i: É o padrão que estamos procurando na string. Neste caso, "i".
            /: Indica o fim da expressão regular.
            g: É a flag global, que significa "globalmente" ou "todas as ocorrências". */ 
        }
        
    }

    
    window.alert("texto criptografado ${codigo}");

}