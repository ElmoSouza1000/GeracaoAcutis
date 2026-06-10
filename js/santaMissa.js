document.addEventListener('DOMContentLoaded', function () {

    Array.from(document.querySelectorAll('.abaOracao')).map(function (aba) {

        aba.addEventListener('click', function () {


            Array.from(document.querySelectorAll('.abaOracao')).map(function (a) {
                a.classList.remove('ativa');
            });

            Array.from(document.querySelectorAll('.oracaoConteudo')).map(function (o) {
                o.classList.remove('ativo');
            });


            var oracao = this.getAttribute('data-oracao');

            this.classList.add('ativa');
            
            document.querySelector('#' + oracao).classList.add('ativo');
        });
    });

});