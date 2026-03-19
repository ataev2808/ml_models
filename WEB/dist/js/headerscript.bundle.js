// "use strict"
// const burger = document.querySelector('.header-burger');
// const menuBody = document.querySelector('.menu-body');
// if (burger){
   
//     burger.addEventListener("click", function(e){
//         document.body.classList.toggle('_lock')
//         burger.classList.toggle('_active');
//         menuBody.classList.toggle('_active');
//     })
// }



// const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
// if (menuLinks.length > 0) {
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener("click", onMenuLinkClick);
//     });

//     function onMenuLinkClick(e) {
//         const menuLink = e.target;
//         const goto = menuLink.dataset.goto;  // Доступ к значению атрибута data-goto
//         if (goto) {
//             // Если текущее местоположение не является корневым
//             if (window.location.pathname !== '/' && !window.location.pathname.endsWith('/thegilas/index.html')) {
//                 // Перенаправление на главную страницу с якорем
//                 window.location.href = `${window.location.origin}/thegilas/index.html${goto}`;
//             } else {
//                 // Если пользователь на главной странице, выполнить прокрутку
//                 if (document.querySelector(goto)) {
//                     const gotoBlock = document.querySelector(goto);
//                     const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.scrollY - document.querySelector('header').offsetHeight;
                   
//                     if (burger.classList.contains('_active')){
//                             document.body.classList.remove('_lock')
//                             burger.classList.remove('_active');
//                             menuBody.classList.remove('_active');
//                     }
                    
//                     window.scrollTo({
//                         top: gotoBlockValue,
//                         behavior: "smooth"
//                     });
//                 }
//             }
//             e.preventDefault();
//         }
//     }
// }

"use strict"
const burger = document.querySelector('.header-burger');
const menuBody = document.querySelector('.menu-body');
if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        burger.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        e.preventDefault(); // Перенесено сюда
        
        const menuLink = e.target;
        const goto = menuLink.dataset.goto;
        
        if (!goto) return;
        
        // УПРОЩЕННАЯ ЛОГИКА: Всегда пытаемся скроллить на текущей странице
        const targetElement = document.querySelector(goto);
        
        if (targetElement) {
            // Если элемент найден на текущей странице - скроллим
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
            
            // Закрываем бургер-меню если открыто
            if (burger && burger.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                burger.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
            
            // Плавный скролл
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        } else {
            // Если элемента нет на странице - переходим на главную с якорем
            // Более простое определение главной страницы
            const isHomePage = window.location.pathname.endsWith('index.html') || 
                              window.location.pathname.endsWith('/') ||
                              window.location.pathname.includes('/thegilas/index.html') ||
                              window.location.pathname === '' ||
                              window.location.pathname === '/thegilas/';
            
            if (!isHomePage) {
                // Переходим на главную страницу с якорем
                const baseUrl = window.location.origin + '/thegilas/';
                window.location.href = baseUrl + 'index.html' + goto;
            } else {
                // Даже на главной элемент не найден - показываем ошибку
                console.warn(`Элемент ${goto} не найден на странице`);
            }
        }
    }
}
