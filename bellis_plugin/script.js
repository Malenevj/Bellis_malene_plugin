// Når hele dokumentet (DOM) er klar, starter jQuery-koden
jQuery(document).ready(function($) {

    // Finder popup-boksen og overlayet og gemmer dem i variabler
    var $box = $('#bellis-box');       // Selve popup-boksen
    var $overlay = $('#popup-overlay'); // Det mørke overlay bag popup’en

    /* -----------------------------------------------------
       START: Skjul popup’en fra begyndelsen
       -----------------------------------------------------
       jeg tilføjer klassen .slide-top, som (via CSS)
       flytter boksen ud af syne over toppen af skærmen.
    ----------------------------------------------------- */
    $box.addClass('slide-top');

    /* -----------------------------------------------------
       VIS POPUP AUTOMATISK EFTER 1 SEKUND
       -----------------------------------------------------
       Efter 1000 ms (1 sekund) fjernes .slide-top og
       erstattes med .slide-down → så glider boksen ned.
       Samtidig aktiveres overlayet med .active-klassen,
       som gør baggrunden mørk.
    ----------------------------------------------------- */
    setTimeout(function() {
        $box.removeClass('slide-top').addClass('slide-down');
        $overlay.addClass('active'); // Gør overlayet synligt
    }, 1000);

    /* -----------------------------------------------------
       LUKKEKNAP (X øverst i boksen)
       -----------------------------------------------------
       Når brugeren klikker på #bellis-close:
       - Fjern .slide-down → tilføj .slide-top (boksen glider væk)
       - Fjern .active på overlayet → mørket forsvinder
    ----------------------------------------------------- */
    $('#bellis-close').on('click', function() {
        $box.removeClass('slide-down').addClass('slide-top');
        $overlay.removeClass('active');
    });

    /* -----------------------------------------------------
       KNAPFUNKTION (CTA-knap)
       -----------------------------------------------------
       Når man klikker på knappen #bellis-button,
       tages man hen til siden Bag Bellis
    ----------------------------------------------------- */
    $('#bellis-button').on('click', function(e) {
  	e.preventDefault(); // Forhindrer evt. standardknapadfærd
  	window.location.href = 'https://storyscaping.shstudio.dk/elementor-615/home/';
	});


    /* -----------------------------------------------------
       EKSTRA: Klik på overlayet lukker også popup’en
       -----------------------------------------------------
       Dette gør, at man kan klikke udenfor boksen
       for at lukke popup’en – en typisk brugerfunktion.
    ----------------------------------------------------- */
    $overlay.on('click', function() {
        $box.removeClass('slide-down').addClass('slide-top');
        $overlay.removeClass('active');
    });
});

