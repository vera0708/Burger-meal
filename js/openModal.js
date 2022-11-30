import {
    modalProduct,
    ingredientsList,
    modalProductTitle,
    modalProductPriceCount,
    ingredientsCalories,
    modalProductDescription,
    modalProductImage
} from "./elements.js";

export const openModal = (product) => {

    modalProductTitle.textContent = product.title;
    modalProductPriceCount.textContent = product.price;
    ingredientsCalories.textContent = `${product.weight}г, ${product.calories}ккал`;
    modalProductDescription.textContent = product.description;
    modalProductImage.src = product.image;

    ingredientsList.textContent = '';

    const ingredientsListItem = product.ingredients.map((item) => {
        const li = document.createElement('li');
        li.classList.add('ingredients__item');
        li.textContent = item;
        return li
    });

    ingredientsList.append(...ingredientsListItem)

    modalProduct.classList.add('modal_open')
}
