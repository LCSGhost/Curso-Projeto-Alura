const avanca = document.querySelectorAll('.btn-próximo');

avanca.forEach(button=> {
button.addEventListener('click',function(){
const atual = document.querySelector('.ativo');
const próximoPasso = 'Passo-' + this.getAttribute('data-próximo');

atual.classList.remove('ativo');
document.getElementById(próximoPasso).classList.add('ativo')

})

})