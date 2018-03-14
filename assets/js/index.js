$(document).ready(()=>{
    $('.proyectos').hide();;
    $('.redes').hide()
})

$('.proyects').click(()=>{
    $('.about-me').hide();
    $('.redes').hide();
    $('.proyectos').show();
    
})

$('.red-social').click(()=>{
    $('.about-me').hide();
    $('.proyectos').hide();
    $('.redes').show();
})