'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const toggleAccordion = () => {
        const accordion = document.querySelector('.accordion');
        accordion.addEventListener('click', (event) => {
            let target = event.target;

            if (target.matches('.accordion__item-heading') && target.classList.contains('active')) {
                target.parentElement.classList.remove('active');
                target.classList.remove('active');
                hideBody(target.nextElementSibling);
            } else {
                target.parentElement.classList.add('active');
                target.classList.add('active');
                showBody(target.nextElementSibling);
            }
        });

        const showBody = (target) => {
            target.style.cssText = `height:${target.scrollHeight}px; padding-bottom: 16px`;
        };

        const hideBody = (target) => {
            target.style.cssText = `height:0;padding-top:0`;
        };
    };

    toggleAccordion();
});