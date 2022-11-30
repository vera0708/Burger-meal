import { navigationItems, navigationList } from "./elements.js";

export const navigationListController = () => {
    navigationList.addEventListener('click', (eve) => {
        const categoryItem = eve.target.closest('.navigation__button')

        if (!categoryItem) return;
        navigationItems.forEach((item) => {
            if (item === categoryItem) {
                item.classList.add('navigation__button_active')
            } else item.classList.remove('navigation__button_active')
        })
    })
};