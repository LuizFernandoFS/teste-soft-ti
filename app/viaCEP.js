function consultaCEP() {
    let cep = document.querySelector('#cep').value;

    if (cep.length === 0 || cep.length !== 8) {
        return alert("CEP Inválido!")
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(function (response) {
        response.json().then((data) => {
            let rua = document.getElementById('rua').value = (data.logradouro);
            let bairro = document.getElementById('bairro').value = (data.bairro);
            let cidade = document.getElementById('cidade').value = (data.localidade);
            if(rua === undefined && bairro === undefined && cidade === undefined){
                document.getElementById('rua').value = '';
                document.getElementById('bairro').value = '';
                document.getElementById('cidade').value = '';  
            }
        })
    })
}