$('nav').on('click', '#hamburger-menu', event => {
    console.log('hello');
    $('.nav').toggleClass('hidden');
})