/* =========================================================
   MEHRAJ FATIMA — PREMIUM BIRTHDAY EXPERIENCE
   REFINED CELEBRATION SCRIPT
   ========================================================= */


/* =========================================================
   BEGIN YOUR SURPRISE
   ========================================================= */

function startSurprise() {

    const welcome =
        document.querySelector(".welcome-screen");

    if (!welcome) return;

    welcome.style.transition =
        "opacity 1.2s ease, transform 1.2s ease";

    welcome.style.opacity = "0";

    welcome.style.transform =
        "scale(1.04)";

    setTimeout(function () {

        welcome.style.display = "none";

    }, 1200);
}


/* =========================================================
   OPEN YOUR SURPRISE
   ========================================================= */

function showMessage() {

    const message =
        document.getElementById("surprise-message");

    if (!message) return;


    /* -----------------------------------------------------
       Create surprise message
       ----------------------------------------------------- */

    message.innerHTML = `

        <div class="surprise-celebration-layer"></div>

        <div class="surprise-inner">

            <div class="surprise-symbol">
                ✦
            </div>

            <h2>
                A Little Surprise for You
            </h2>

            <div class="surprise-line"></div>

            <p>
                Mehraj, today is more than just a birthday.
                It is a celebration of the beautiful person
                you are and all the happiness you deserve. ❤️
            </p>

            <p>
                May this new chapter bring you beautiful
                moments, peaceful days, unforgettable memories
                and a heart full of joy. ✨
            </p>

            <p class="surprise-final">
                This little corner of the internet
                was made especially for you.
            </p>

        </div>

    `;


    /* -----------------------------------------------------
       Message entrance animation
       ----------------------------------------------------- */

    message.style.display = "block";

    message.style.opacity = "0";

    message.style.transform =
        "translateY(20px) scale(0.96)";


    requestAnimationFrame(function () {

        message.style.transition =
            "opacity 1s ease, transform 1s ease";

        message.style.opacity = "1";

        message.style.transform =
            "translateY(0) scale(1)";

    });


    /* -----------------------------------------------------
       Start premium celebration
       ----------------------------------------------------- */

    createPremiumCelebration();
}


/* =========================================================
   PREMIUM CELEBRATION
   EVERYTHING IS CREATED INSIDE THE SURPRISE BOX
   ========================================================= */

function createPremiumCelebration() {

    const message =
        document.getElementById("surprise-message");

    if (!message) return;


    const layer =
        message.querySelector(
            ".surprise-celebration-layer"
        );

    if (!layer) return;


    /* Clear previous celebration */

    layer.innerHTML = "";


    /* =====================================================
       LUXURY COLOR PALETTE
       ===================================================== */

    const colors = [

        "#f4f1e8",   /* platinum white */
        "#d9d9d6",   /* platinum */
        "#d8c279",   /* champagne gold */
        "#c8a24a",   /* antique gold */
        "#b76e79",   /* rose gold */
        "#8f2945"    /* velvet red */

    ];


    /* =====================================================
       1. LUXURY CONFETTI
       ===================================================== */

    for (let i = 0; i < 55; i++) {

        const piece =
            document.createElement("span");


        piece.className =
            "luxury-confetti";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.width =
            4 + Math.random() * 6 + "px";


        piece.style.height =
            7 + Math.random() * 10 + "px";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.animationDuration =
            3.5 + Math.random() * 2.5 + "s";


        layer.appendChild(piece);
    }


    /* =====================================================
       2. PLATINUM CRYSTAL DROPLETS
       ===================================================== */

    for (let i = 0; i < 28; i++) {

        const drop =
            document.createElement("span");


        drop.className =
            "platinum-drop";


        drop.style.left =
            Math.random() * 100 + "%";


        drop.style.width =
            4 + Math.random() * 4 + "px";


        drop.style.height =
            6 + Math.random() * 7 + "px";


        drop.style.animationDelay =
            Math.random() * 2 + "s";


        drop.style.animationDuration =
            3 + Math.random() * 3 + "s";


        layer.appendChild(drop);
    }


    /* =====================================================
       3. SMALL MULTI-COLOR BALLOONS
       ===================================================== */

    const balloonColors = [

        "#8f2945",   /* velvet red */
        "#b76e79",   /* rose gold */
        "#d8c279",   /* champagne gold */
        "#f4f1e8",   /* platinum */
        "#c8a24a",   /* antique gold */
        "#6f7f68"    /* pista */

    ];


    for (let i = 0; i < 18; i++) {

        const balloon =
            document.createElement("span");


        balloon.className =
            "mini-balloon";


        balloon.style.left =
            Math.random() * 100 + "%";


        balloon.style.setProperty(
            "--balloon-color",
            balloonColors[
                Math.floor(
                    Math.random() *
                    balloonColors.length
                )
            ]
        );


        balloon.style.setProperty(
            "--balloon-size",
            13 + Math.random() * 7 + "px"
        );


        balloon.style.setProperty(
            "--balloon-delay",
            Math.random() * 1.8 + "s"
        );


        balloon.style.setProperty(
            "--balloon-duration",
            4.5 + Math.random() * 2.5 + "s"
        );


        balloon.style.setProperty(
            "--balloon-sway",
            -20 + Math.random() * 40 + "px"
        );


        layer.appendChild(balloon);
    }


    /* =====================================================
       4. FALLING CHOCOLATES
       ===================================================== */

    for (let i = 0; i < 14; i++) {

        const chocolate =
            document.createElement("span");


        chocolate.className =
            "falling-chocolate";


        chocolate.textContent =
            "🍫";


        chocolate.style.left =
            Math.random() * 100 + "%";


        chocolate.style.fontSize =
            13 + Math.random() * 9 + "px";


        chocolate.style.animationDelay =
            Math.random() * 2 + "s";


        chocolate.style.animationDuration =
            4 + Math.random() * 2 + "s";


        layer.appendChild(chocolate);
    }


    /* =====================================================
       5. PLATINUM SPARKLES
       ===================================================== */

    for (let i = 0; i < 35; i++) {

        const sparkle =
            document.createElement("span");


        sparkle.className =
            "falling-sparkle";


        sparkle.textContent =
            Math.random() > 0.5
                ? "✦"
                : "✧";


        sparkle.style.left =
            Math.random() * 100 + "%";


        sparkle.style.fontSize =
            8 + Math.random() * 9 + "px";


        sparkle.style.animationDelay =
            Math.random() * 2 + "s";


        sparkle.style.animationDuration =
            3 + Math.random() * 3 + "s";


        layer.appendChild(sparkle);
    }


    /* =====================================================
       6. SMALL INITIAL SPARKLE BURST
       ===================================================== */

    createSurpriseBurst(layer);


    /* =====================================================
       AUTOMATIC CLEANUP
       ===================================================== */

    setTimeout(function () {

        if (layer) {
            layer.innerHTML = "";
        }

    }, 8500);
}


/* =========================================================
   INITIAL PREMIUM SPARKLE BURST
   ========================================================= */

function createSurpriseBurst(layer) {

    if (!layer) return;


    const burstColors = [

        "#ffffff",
        "#f4f1e8",
        "#d8c279",
        "#b76e79"

    ];


    for (let i = 0; i < 14; i++) {

        const burst =
            document.createElement("span");


        burst.className =
            "falling-sparkle";


        burst.textContent =
            i % 2 === 0
                ? "✦"
                : "✧";


        burst.style.left =
            (50 + (-25 + Math.random() * 50)) + "%";


        burst.style.top =
            (45 + (-15 + Math.random() * 30)) + "%";


        burst.style.color =
            burstColors[
                Math.floor(
                    Math.random() *
                    burstColors.length
                )
            ];


        burst.style.fontSize =
            8 + Math.random() * 10 + "px";


        burst.style.animationDelay =
            Math.random() * 0.35 + "s";


        burst.style.animationDuration =
            1.5 + Math.random() * 1.2 + "s";


        layer.appendChild(burst);
    }
}
/* =========================================================
   PREMIUM PHOTO VIEWER
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const gallery =
        document.querySelector(".photo-gallery");

    if (!gallery) return;


    /* Create viewer */

    const viewer =
        document.createElement("div");

    viewer.className =
        "photo-viewer";


    viewer.innerHTML = `

        <button
            type="button"
            class="photo-viewer-close"
            aria-label="Close photo"
        >
            ×
        </button>

        <img
            src=""
            alt="Memory preview"
        >

    `;


    document.body.appendChild(viewer);


    const viewerImage =
        viewer.querySelector(
            ".photo-viewer img"
        );


    const closeButton =
        viewer.querySelector(
            ".photo-viewer-close"
        );


    /* Open photo */

    const photos =
        gallery.querySelectorAll(
            ".photo-card img"
        );


    photos.forEach(function (photo) {

        photo.addEventListener(
            "click",
            function () {

                viewerImage.src =
                    photo.src;

                viewerImage.alt =
                    photo.alt;

                viewer.classList.add(
                    "active"
                );

                document.body.style.overflow =
                    "hidden";

            }
        );

    });


    /* Close viewer */

    function closePhotoViewer() {

        viewer.classList.remove(
            "active"
        );

        document.body.style.overflow =
            "";

    }


    closeButton.addEventListener(
        "click",
        closePhotoViewer
    );


    /* Click outside image */

    viewer.addEventListener(
        "click",
        function (event) {

            if (
                event.target === viewer
            ) {
                closePhotoViewer();
            }

        }
    );


    /* ESC key */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                viewer.classList.contains("active")
            ) {
                closePhotoViewer();
            }

        }
    );

});
/* =========================================================
   MEMORY TIMELINE SCROLL REVEAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const timelineItems =
        document.querySelectorAll(".timeline-item");

    if (!timelineItems.length) return;


    const timelineObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.18
            }
        );


    timelineItems.forEach(function (item) {

        timelineObserver.observe(item);

    });

});
/* =========================================================
   CINEMATIC LETTER REVEAL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const letterElements = document.querySelectorAll(
        ".letter-paper p, .letter-paper h4, .letter-paper h5, .letter-paper blockquote, .letter-paper .letter-divider, .letter-paper .letter-final"
    );

    if (!letterElements.length) return;

    const letterObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("letter-show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    letterElements.forEach(function (element) {
        letterObserver.observe(element);
    });

});
/* =========================================================
   BIRTHDAY FINALE — SONG + CANDLES + WISH
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const finale =
        document.getElementById("birthday-finale");

    const song =
        document.getElementById("birthday-song");

    const playButton =
        document.getElementById("song-play-button");

    const playIcon =
        document.getElementById("song-play-icon");

    const progress =
        document.getElementById("song-progress");

    const currentTime =
        document.getElementById("song-current-time");

    const duration =
        document.getElementById("song-duration");

    const wishButton =
        document.getElementById("make-wish-button");

    const wishMessage =
        document.getElementById("wish-message");

    const starsContainer =
        document.getElementById("finale-stars");

    if (
        !finale ||
        !song ||
        !playButton ||
        !progress ||
        !wishButton ||
        !wishMessage
    ) {
        return;
    }


    /* ==========================================
       CREATE BACKGROUND STARS
       ========================================== */

    if (starsContainer) {

        for (let i = 0; i < 38; i++) {

            const star =
                document.createElement("span");

            star.className =
                "finale-star";

            star.style.left =
                Math.random() * 100 + "%";

            star.style.top =
                Math.random() * 100 + "%";

            const size =
                2 + Math.random() * 3;

            star.style.width =
                size + "px";

            star.style.height =
                size + "px";

            star.style.animationDelay =
                Math.random() * 3 + "s";

            star.style.animationDuration =
                2.2 + Math.random() * 3 + "s";

            starsContainer.appendChild(star);
        }
    }


    /* ==========================================
       FORMAT TIME
       ========================================== */

    function formatTime(seconds) {

        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const minutes =
            Math.floor(seconds / 60);

        const remainingSeconds =
            Math.floor(seconds % 60);

        return (
            minutes +
            ":" +
            String(remainingSeconds).padStart(2, "0")
        );
    }


    /* ==========================================
       PLAY / PAUSE
       ========================================== */

    playButton.addEventListener(
        "click",
        function () {

            if (song.paused) {

                song.play()
                    .then(function () {

                        finale.classList.add("song-playing");

                        playIcon.textContent =
                            "❚❚";

                    })
                    .catch(function () {

                        console.log(
                            "Add music/birthday-song.mp3 to play the song."
                        );

                    });

            } else {

                song.pause();

                playIcon.textContent =
                    "▶";
            }

        }
    );


    /* ==========================================
       SONG PLAYING
       ========================================== */

    song.addEventListener(
        "play",
        function () {

            finale.classList.add(
                "song-playing"
            );

            playIcon.textContent =
                "❚❚";

        }
    );


    /* ==========================================
       SONG PAUSED
       ========================================== */

    song.addEventListener(
        "pause",
        function () {

            playIcon.textContent =
                "▶";

        }
    );


    /* ==========================================
       SONG ENDED
       ========================================== */

    song.addEventListener(
        "ended",
        function () {

            playIcon.textContent =
                "▶";

            progress.value =
                0;

            currentTime.textContent =
                "0:00";

            finale.classList.remove(
                "song-playing"
            );
        }
    );


    /* ==========================================
       LOAD SONG DURATION
       ========================================== */

    song.addEventListener(
        "loadedmetadata",
        function () {

            if (Number.isFinite(song.duration)) {

                duration.textContent =
                    formatTime(song.duration);

            }

        }
    );


    /* ==========================================
       UPDATE PROGRESS
       ========================================== */

    song.addEventListener(
        "timeupdate",
        function () {

            if (!Number.isFinite(song.duration)) {
                return;
            }

            const percentage =
                (song.currentTime /
                    song.duration) *
                100;

            progress.value =
                percentage;

            currentTime.textContent =
                formatTime(song.currentTime);

            duration.textContent =
                formatTime(song.duration);
        }
    );


    /* ==========================================
       SEEK SONG
       ========================================== */

    progress.addEventListener(
        "input",
        function () {

            if (!Number.isFinite(song.duration)) {
                return;
            }

            song.currentTime =
                (progress.value / 100) *
                song.duration;
        }
    );


    /* ==========================================
       MAKE A WISH
       ========================================== */

    wishButton.addEventListener(
        "click",
        function () {

            if (
                finale.classList.contains(
                    "wishing"
                )
            ) {
                return;
            }

            finale.classList.add(
                "wishing"
            );

            setTimeout(
                function () {

                    wishMessage.classList.add(
                        "show"
                    );

                    createWishParticles();
                    setTimeout(function () {

    wishMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}, 250);

                },
                850
            );

        }
    );


    /* ==========================================
       WISH PARTICLES
       ========================================== */

    function createWishParticles() {

        for (let i = 0; i < 34; i++) {

            const particle =
                document.createElement("span");

            particle.className =
                "final-wish-particle";

            particle.textContent =
                Math.random() > 0.5
                    ? "✦"
                    : "✧";

            particle.style.position =
                "absolute";

            particle.style.left =
                (40 + Math.random() * 20) + "%";

            particle.style.top =
                (38 + Math.random() * 12) + "%";

            particle.style.color =
                Math.random() > 0.5
                    ? "#f0cc78"
                    : "#f8e9c8";

            particle.style.fontSize =
                8 + Math.random() * 12 + "px";

            particle.style.pointerEvents =
                "none";

            particle.style.zIndex =
                "8";

            particle.style.animation =
                "wishParticleRise " +
                (2 + Math.random() * 2) +
                "s ease-out forwards";

            finale.appendChild(
                particle
            );

            setTimeout(
                function () {

                    particle.remove();

                },
                4500
            );
        }

    }

});
/* =========================================================
   CINEMATIC BIRTHDAY VIDEO
   ========================================================= */

const cinematicVideo =
    document.getElementById("birthday-cinematic-video");

if (cinematicVideo) {

    cinematicVideo.addEventListener("ended", () => {

        cinematicVideo.currentTime = 0;

    });

}