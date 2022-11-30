import {
    catalogList,
    modalProduct
} from './elements.js'

import { createCardProduct } from './createCardProduct.js';

import { openModal } from './openModal.js';

import { renderListProduct } from './renderListProduct.js';
import { navigationListController } from './navigationList.js';

const burgerMax = {
    title: 'Бургер Макс',
    price: 10000,
    weight: 15000,
    calories: 18000,
    description: 'Огромный бургерб съешь сам и поделись с друзьями!',
    image: 'img/megaburger.jpg',
    ingredients: [
        'Пшеничная булочка',
        'Мегакотлета из говядины',
        'Много сыра',
        'Листья салата',
        'Чипотл'
    ]
}

catalogList.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.product__detail')
        || target.closest('.product__image')) {
        openModal(burgerMax)
    }
})

modalProduct.addEventListener('click', (event) => {
    const target = event.target;

    if (target.closest('.modal__close')
        || target === modalProduct) {
        modalProduct.classList.remove('modal_open');
    }
})

const init = () => {
    renderListProduct();
    navigationListController();
}

init();