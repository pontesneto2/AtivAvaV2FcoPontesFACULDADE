// validação - boa prática
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Produto cadastrado com sucesso!');
});
