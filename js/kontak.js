const mapBtn = document.querySelector('.map-btn');
if (mapBtn) {
    mapBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(
          'https://maps.app.goo.gl/FxPdjfov4QuwGKYh9?g_st=aw',
          '_blank'
        ); 
    });
}