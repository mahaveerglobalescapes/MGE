/* =========================================================
   MAHAVEER GLOBAL ESCAPES
   CINEMATIC WEBSITE INTRO
   ========================================================= */

(function () {

    "use strict";


    /* =====================================================
       CHECK IF INTRO HAS ALREADY BEEN SHOWN
       ===================================================== */

    const introAlreadyShown =
        sessionStorage.getItem("mgeIntroShown");


    /*
       If the intro has already played during this
       browser tab/session, do nothing.

       This means:

       Homepage → another page
       another page → another page
       refresh

       = NO INTRO
    */

    if (introAlreadyShown === "true") {

        return;
    }


    /* =====================================================
       REMEMBER THAT INTRO HAS BEEN SHOWN
       ===================================================== */

    sessionStorage.setItem(
        "mgeIntroShown",
        "true"
    );


    /* =====================================================
       CREATE INTRO SCREEN
       ===================================================== */

    const intro = document.createElement("div");

    intro.id = "mge-intro";


    /* =====================================================
       INTRO HTML
       ===================================================== */

    intro.innerHTML = `

        <div class="mge-intro-content">


            <!-- GREETING 1 -->

            <div class="mge-intro-line">
                Hello
            </div>


            <!-- GREETING 2 -->

            <div class="mge-intro-line">
                Jai Jinendra
            </div>


            <!-- GREETING 3 -->

            <div class="mge-intro-line">
                Mahaveer Pranam
            </div>


            <!-- BRAND -->

            <div class="mge-intro-brand">
                Mahaveer Global Escapes
            </div>


        </div>

    `;


    /* =====================================================
       INSERT INTRO INTO PAGE
       ===================================================== */

    function insertIntro() {

        if (!document.body) {

            return;
        }


        /* Put intro above everything else */

        document.body.prepend(intro);


        /* Lock website scrolling */

        document.body.classList.add(
            "mge-intro-active"
        );


        /* Start animation */

        startIntro();
    }


    /* =====================================================
       START INTRO ANIMATION
       ===================================================== */

    function startIntro() {


        const lines =
            intro.querySelectorAll(
                ".mge-intro-line"
            );


        const brand =
            intro.querySelector(
                ".mge-intro-brand"
            );


        /* =================================================
           TIMELINE

           0.20 sec
           Hello

           0.70 sec
           Jai Jinendra

           0.120 sec
           Mahaveer Pranam

           2.20 sec
           Greetings disappear

           2.55 sec
           Brand appears

           3.70 sec
           Website starts appearing

           4.90 sec
           Intro removed
           ================================================= */


        /* =================================================
           HELLO
           ================================================= */

        setTimeout(function () {

            lines[0].classList.add(
                "active"
            );

        }, 200);


        /* =================================================
           JAI JINENDRA
           ================================================= */

        setTimeout(function () {

            lines[1].classList.add(
                "active"
            );

        }, 550);


        /* =================================================
           MAHAVEER PRANAM
           ================================================= */

        setTimeout(function () {

            lines[2].classList.add(
                "active"
            );

        }, 900);


        /* =================================================
           REMOVE THE THREE GREETINGS
           ================================================= */

        setTimeout(function () {


            lines.forEach(function (line) {

                line.classList.remove(
                    "active"
                );

            });


        }, 2200);


        /* =================================================
           SHOW BRAND
           ================================================= */

        setTimeout(function () {

            brand.classList.add(
                "active"
            );

        }, 2550);


        /* =================================================
           HIDE INTRO / REVEAL WEBSITE
           ================================================= */

        setTimeout(function () {


            intro.classList.add(
                "mge-hide"
            );


            document.body.classList.remove(
                "mge-intro-active"
            );


        }, 3700);


        /* =================================================
           REMOVE INTRO COMPLETELY
           ================================================= */

        setTimeout(function () {


            if (
                intro &&
                intro.parentNode
            ) {

                intro.remove();
            }


        }, 4900);

    }


    /* =====================================================
       START WHEN PAGE IS READY
       ===================================================== */

    if (
        document.readyState === "loading"
    ) {


        document.addEventListener(
            "DOMContentLoaded",
            insertIntro
        );


    } else {


        insertIntro();

    }


})();