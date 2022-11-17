var app = angular.module('app', []);

app.controller('appCtrll', ['$scope', function ($scope) {

    $scope.clientes = JSON.parse(localStorage.getItem('arrayDeClientes'));

    $scope.redirecionar = function() {
        window.location.href = "../index.html";
    }

    $scope.addCliente = function () {

        $scope.cliente = {
            tipoPessoa: $scope.cliente.tipoPessoa,
            cpfOrCnpj: $scope.cliente.cpfOrCnpj,
            nome: $scope.cliente.nome,
            nomeFantasia: $scope.cliente.nomeFantasia,
            cep: $scope.cliente.cep,
            rua: document.getElementById("rua").value,
            bairro: document.getElementById("bairro").value,
            cidade: document.getElementById("cidade").value,
            telefone: $scope.cliente.telefone,
            email: $scope.cliente.email
        }

        $scope.clientes = JSON.parse(localStorage.getItem('arrayDeClientes'));

        if ($scope.clientes == null) {
            localStorage.setItem('arrayDeClientes', '[]');
            $scope.clientes = []
        } 

        $scope.clientes.push($scope.cliente);

        localStorage.setItem("arrayDeClientes", JSON.stringify($scope.clientes));
        alert("Cliente cadastrado com sucesso!");
        $scope.redirecionar();
    }
}]);


