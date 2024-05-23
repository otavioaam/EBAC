$(document).ready(function(){

    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#inserirTarefa').val();
        const tarefaRegistrada = $('<li></li>');
        $(`<p>${novaTarefa}</p>`).appendTo(tarefaRegistrada);
        $(tarefaRegistrada).appendTo('ul');
        $('#inserirTarefa').val('');

        $('ul').on('click', 'li', function(){
            $(this).toggleClass('check');
        })
    })
})