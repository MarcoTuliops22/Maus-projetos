const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const dots = document.querySelectorAll('.dot');
const numberIndicator = document.querySelector('.numbers');

let active = 0;
const total = items.length;

function update(direction) {
    // remove atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');
    
    // muda posição
    active = active + direction;

    if (active < 0) active = total - 1;
    if (active > total - 1) active = 0;

    // adiciona próximo item
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // atualiza número
    numberIndicator.textContent = String(active + 1).padStart(2, '0');
}

prevButton.addEventListener('click', () => update(-1));
nextButton.addEventListener('click', () => update(1));
