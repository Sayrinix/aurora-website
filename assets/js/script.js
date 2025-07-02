//Inicializar Plugin Swiper
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 3,
      initialSlide: 2,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

//Llamado de JSON

$.ajax({
    url: './assets/js/productos.json',
    dataType: 'json',
    type: 'get',
    success: function(respuesta){
      $.each(respuesta.accesorios, function(index, item){

        let contenedor;
        contenedor = '<div class="swiper-slide"><div class="card altura4 pb-3"><img src="' + item.producto.imagen + '" class="card-img-top h-100 w-100 object-fit-cover"><div class="card-body"><h3 class="mb-3 d-flex justify-content-between"><span>' + item.producto.titulo + '</span><span>'+ item.producto.precio + '</span></h3><h4 class="mb-3">' + item.producto.descripcion + '</h4><div class="d-flex justify-content-start mb-3"><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-regular fa-star" style="color: #ffd700;"></i><p class="ms-3">100 reviews</p></div><a href="#" class="boton">Buy now</a></div></div></div>'

        $('#contenedor-accesorios').append(contenedor);
  })

  $.each(respuesta.tarot, function(index, item){

        let contenedor;
        contenedor = '<div class="swiper-slide"><div class="card altura4 pb-3"><img src="' + item.producto.imagen + '" class="card-img-top h-100 w-100 object-fit-cover"><div class="card-body"><h3 class="mb-3 d-flex justify-content-between"><span>' + item.producto.titulo + '</span><span>'+ item.producto.precio + '</span></h3><h4 class="mb-3">' + item.producto.descripcion + '</h4><div class="d-flex justify-content-start mb-3"><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-regular fa-star" style="color: #ffd700;"></i><p class="ms-3">100 reviews</p></div><a href="#" class="boton">Buy now</a></div></div></div>'

        $('#contenedor-tarot').append(contenedor);
  })

  $.each(respuesta.vestidos, function(index, item){

        let contenedor;
        contenedor = '<div class="swiper-slide"><div class="card altura4 pb-3"><img src="' + item.producto.imagen + '" class="card-img-top h-100 w-100 object-fit-cover"><div class="card-body"><h3 class="mb-3 d-flex justify-content-between"><span>' + item.producto.titulo + '</span><span>'+ item.producto.precio + '</span></h3><h4 class="mb-3">' + item.producto.descripcion + '</h4><div class="d-flex justify-content-start mb-3"><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-solid fa-star" style="color: #ffd700;"></i><i class="fa-regular fa-star" style="color: #ffd700;"></i><p class="ms-3">100 reviews</p></div><a href="#" class="boton">Buy now</a></div></div></div>'

        $('#contenedor-vestidos').append(contenedor);
  })
  },
  error: function(respuesta){
    console.log('No está funcionando');
  }
})

//Fancybox plugin

Fancybox.bind("[data-fancybox]", {
   Toolbar: {
      display: ["close"],
    },
    Thumbs: {
      autoStart: true,
    },
    Carousel: {
      infinite: true, 
    },
});