/* =========================================
   BIRTHDAY WEBSITE
   COMPLETE CORRECTED SCRIPT
========================================= */


/* =========================================
   SCENES
========================================= */

const openingScene =
    document.getElementById("openingScene");

const darkScene =
    document.getElementById("darkScene");

const cakeScene =
    document.getElementById("cakeScene");

const memoriesScene =
    document.getElementById("memoriesScene");

const chapterScene =
    document.getElementById("chapterScene");

const messageScene =
    document.getElementById("messageScene");

const finalScene =
    document.getElementById("finalScene");


/* =========================================
   AUDIO
========================================= */

const birthdayAudio =
    document.getElementById("birthdayAudio");


/* =========================================
   BUTTONS
========================================= */

const lightsButton =
    document.getElementById("lightsButton");

const continueButton =
    document.getElementById("continueButton");

const chapterContinueButton =
    document.getElementById("chapterContinueButton");

const messageOpenButton =
    document.getElementById("messageOpenButton");

const messageFinalButton =
    document.getElementById("messageFinalButton");


/* =========================================
   SCENE 1 → SCENE 2
========================================= */

setTimeout(() => {

    if (openingScene) {
        openingScene.classList.remove("active");
    }

    if (darkScene) {
        darkScene.classList.add("active");
    }

}, 3500);


/* =========================================
   LIGHTS ON
   DARK → CAKE
========================================= */

if (lightsButton) {

    lightsButton.addEventListener("click", () => {

        if (darkScene) {
            darkScene.classList.remove("active");
        }


        /* Start birthday music */

        if (birthdayAudio) {

            birthdayAudio.volume = 0.35;

            birthdayAudio.play()
        .then(() => {
            console.log("BIRTHDAY AUDIO PLAYING");
            })
            .catch((error) => {
        console.error("BIRTHDAY AUDIO ERROR:", error);
    });

        }


        /* Open cake scene */

        setTimeout(() => {

            if (cakeScene) {
                cakeScene.classList.add("active");
            }

        }, 350);

    });

}


/* =========================================
   CAKE ELEMENTS
========================================= */

const candleFlame =
    document.getElementById("candleFlame");

const candleSmoke =
    document.getElementById("candleSmoke");

const cakeWrapper =
    document.querySelector(".cake-wrapper");

const cakeTitle =
    document.getElementById("cakeTitle");

const wishText =
    document.getElementById("wishText");

const blowButton =
    document.getElementById("blowButton");

const wishGranted =
    document.getElementById("wishGranted");

const celebration =
    document.getElementById("celebration");


/* =========================================
   BLOW CANDLE
========================================= */

if (blowButton) {

    blowButton.addEventListener("click", () => {

        /* Prevent clicking again */

        if (
            blowButton.classList.contains("hidden")
        ) {
            return;
        }


        /* Flame off */

        if (candleFlame) {
            candleFlame.classList.add(
                "flame-off"
            );
        }


        /* Smoke */

        setTimeout(() => {

            if (candleSmoke) {

                candleSmoke.classList.add(
                    "show"
                );

            }

        }, 350);


        /* Cake glow */

        if (cakeWrapper) {

            cakeWrapper.classList.add(
                "celebrate"
            );

        }


        /* Hide button */

        blowButton.classList.add(
            "hidden"
        );


        /* Hide wish text */

        if (wishText) {

            wishText.style.opacity = "0";

            wishText.style.transform =
                "translateY(-5px)";

        }


        /* Hide title */

        if (cakeTitle) {

            cakeTitle.style.opacity = "0";

            cakeTitle.style.transform =
                "translateY(-5px)";

        }


        /* Sparkles */

        createCelebration();


        /* Confetti */

        createConfetti();


        /* Wish granted */

        setTimeout(() => {

            if (wishGranted) {

                wishGranted.classList.add(
                    "show"
                );

            }

        }, 850);

    });

}


/* =========================================
   CAKE SPARKLES
========================================= */

function createCelebration() {

    if (!celebration) {
        return;
    }

    const sparkleCount = 28;

    for (
        let i = 0;
        i < sparkleCount;
        i++
    ) {

        const sparkle =
            document.createElement("span");

        sparkle.classList.add("spark");


        /* Starting position */

        const startX =
            50 +
            (Math.random() * 30 - 15);

        const startY =
            48 +
            (Math.random() * 20 - 10);


        sparkle.style.left =
            `${startX}%`;

        sparkle.style.top =
            `${startY}%`;


        /* Movement */

        const moveX =
            Math.random() * 260 - 130;

        const moveY =
            Math.random() * -220 - 40;


        sparkle.style.setProperty(
            "--x",
            `${moveX}px`
        );

        sparkle.style.setProperty(
            "--y",
            `${moveY}px`
        );


        /* Size */

        const size =
            4 +
            Math.random() * 5;

        sparkle.style.width =
            `${size}px`;

        sparkle.style.height =
            `${size}px`;


        /* Delay */

        sparkle.style.animationDelay =
            `${Math.random() * 0.25}s`;


        celebration.appendChild(
            sparkle
        );


        /* Remove */

        setTimeout(() => {

            sparkle.remove();

        }, 2000);

    }

}


/* =========================================
   CAKE CONFETTI
========================================= */

function createConfetti() {

    if (!celebration) {
        return;
    }

    const confettiCount = 45;

    for (
        let i = 0;
        i < confettiCount;
        i++
    ) {

        const piece =
            document.createElement("span");

        piece.classList.add(
            "confetti-piece"
        );


        /* Position */

        piece.style.left =
            `${Math.random() * 100}%`;


        /* Duration */

        piece.style.setProperty(
            "--duration",
            `${2.5 + Math.random() * 2}s`
        );


        /* Delay */

        piece.style.setProperty(
            "--delay",
            `${Math.random() * 0.8}s`
        );


        /* Drift */

        piece.style.setProperty(
            "--drift",
            `${Math.random() * 180 - 90}px`
        );


        /* Rotation */

        piece.style.setProperty(
            "--rotation",
            `${Math.random() * 720 - 360}deg`
        );


        /* Size */

        const width =
            5 +
            Math.random() * 4;

        const height =
            8 +
            Math.random() * 7;


        piece.style.width =
            `${width}px`;

        piece.style.height =
            `${height}px`;


        celebration.appendChild(
            piece
        );


        /* Remove */

        setTimeout(() => {

            piece.remove();

        }, 5500);

    }

}


/* =========================================
   MEMORIES SLIDER
========================================= */

const memorySlider =
    document.getElementById("memorySlider");

const memoryTrack =
    document.getElementById("memoryTrack");

const memoryCards =
    document.querySelectorAll(
        ".memory-card"
    );

const memoryCurrent =
    document.getElementById("memoryCurrent");

const memoryDots =
    document.getElementById("memoryDots");


let currentMemory = 0;

let memoryTimer;

let isDragging = false;

let startX = 0;

let currentX = 0;

let dragOffset = 0;


/* =========================================
   CREATE MEMORY DOTS
========================================= */

if (memoryDots) {

    memoryCards.forEach(
        (_, index) => {

            const dot =
                document.createElement("span");

            dot.classList.add(
                "memory-dot"
            );

            if (index === 0) {

                dot.classList.add(
                    "active"
                );

            }

            memoryDots.appendChild(
                dot
            );

        }
    );

}


const memoryDotItems =
    document.querySelectorAll(
        ".memory-dot"
    );


/* =========================================
   UPDATE MEMORY SLIDER
========================================= */

function updateMemorySlider(
    animate = true
) {

    if (
        !memorySlider ||
        !memoryTrack ||
        !memoryCards.length
    ) {
        return;
    }


    const cardWidth =
        memoryCards[0]
            .getBoundingClientRect()
            .width;


    const gap =
        parseFloat(
            getComputedStyle(
                memoryTrack
            ).gap
        ) || 0;


    const sliderWidth =
        memorySlider
            .getBoundingClientRect()
            .width;


    const offset =
        (sliderWidth - cardWidth) / 2;


    const translateX =
        offset -
        currentMemory *
        (cardWidth + gap);


    memoryTrack.style.transition =
        animate
            ? "transform 0.65s cubic-bezier(.22,.61,.36,1)"
            : "none";


    memoryTrack.style.transform =
        `translate3d(${translateX}px, 0, 0)`;


    /* Active card */

    memoryCards.forEach(
        (card, index) => {

            card.classList.toggle(
                "active",
                index === currentMemory
            );

        }
    );


    /* Counter */

    if (memoryCurrent) {

        memoryCurrent.textContent =
            String(
                currentMemory + 1
            ).padStart(2, "0");

    }


    /* Dots */

    memoryDotItems.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentMemory
            );

        }
    );

}


/* =========================================
   MEMORY AUTO SLIDE
========================================= */

function resetMemoryTimer() {

    clearTimeout(memoryTimer);


    if (
        currentMemory >=
        memoryCards.length - 1
    ) {
        return;
    }


    memoryTimer =
        setTimeout(() => {

            goToMemory(
                currentMemory + 1
            );

        }, 6000);

}


/* =========================================
   GO TO MEMORY
========================================= */

function goToMemory(index) {

    if (!memoryCards.length) {
        return;
    }


    if (index < 0) {
        index = 0;
    }


    if (
        index >=
        memoryCards.length
    ) {

        index =
            memoryCards.length - 1;

    }


    currentMemory = index;


    updateMemorySlider(true);

    resetMemoryTimer();


    /* Last memory */

    if (
        currentMemory ===
        memoryCards.length - 1
    ) {

        clearTimeout(
            memoryTimer
        );


        setTimeout(() => {

            showChapter20();

        }, 2500);

    }

}


/* =========================================
   CAKE → MEMORIES
========================================= */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            if (cakeScene) {

                cakeScene.classList.remove(
                    "active"
                );

            }


            setTimeout(() => {

                if (memoriesScene) {

                    memoriesScene.classList.add(
                        "active"
                    );

                }


                currentMemory = 0;


                updateMemorySlider(
                    false
                );


                resetMemoryTimer();

            }, 350);

        }
    );

}


/* =========================================
   TOUCH START
========================================= */

if (memorySlider) {

    memorySlider.addEventListener(
        "touchstart",
        (event) => {

            isDragging = true;

            startX =
                event.touches[0].clientX;

            currentX = startX;

            dragOffset = 0;

            memorySlider.classList.add(
                "dragging"
            );

            clearTimeout(
                memoryTimer
            );

            if (memoryTrack) {

                memoryTrack.style.transition =
                    "none";

            }

        },
        {
            passive: true
        }
    );


    /* =====================================
       TOUCH MOVE
    ===================================== */

    memorySlider.addEventListener(
        "touchmove",
        (event) => {

            if (!isDragging) {
                return;
            }


            currentX =
                event.touches[0].clientX;


            dragOffset =
                currentX - startX;


            const cardWidth =
                memoryCards[0]
                    .getBoundingClientRect()
                    .width;


            const gap =
                parseFloat(
                    getComputedStyle(
                        memoryTrack
                    ).gap
                ) || 0;


            const sliderWidth =
                memorySlider
                    .getBoundingClientRect()
                    .width;


            const offset =
                (sliderWidth -
                    cardWidth) / 2;


            const base =
                offset -
                currentMemory *
                (cardWidth + gap);


            memoryTrack.style.transform =
                `translate3d(${base + dragOffset}px, 0, 0)`;

        },
        {
            passive: true
        }
    );


    /* =====================================
       TOUCH END
    ===================================== */

    memorySlider.addEventListener(
        "touchend",
        () => {

            if (!isDragging) {
                return;
            }


            isDragging = false;

            memorySlider.classList.remove(
                "dragging"
            );


            const threshold = 55;


            if (
                dragOffset <
                -threshold
            ) {

                goToMemory(
                    currentMemory + 1
                );

            }
            else if (
                dragOffset >
                threshold
            ) {

                goToMemory(
                    currentMemory - 1
                );

            }
            else {

                updateMemorySlider(
                    true
                );

                resetMemoryTimer();

            }


            dragOffset = 0;

        }
    );

}


/* =========================================
   DESKTOP MOUSE DRAG
========================================= */

if (memorySlider) {

    memorySlider.addEventListener(
        "mousedown",
        (event) => {

            isDragging = true;

            startX =
                event.clientX;

            currentX = startX;

            dragOffset = 0;

            memorySlider.classList.add(
                "dragging"
            );

            clearTimeout(
                memoryTimer
            );


            if (memoryTrack) {

                memoryTrack.style.transition =
                    "none";

            }

        }
    );

}


/* =========================================
   MOUSE MOVE
========================================= */

window.addEventListener(
    "mousemove",
    (event) => {

        if (!isDragging) {
            return;
        }


        if (
            !memorySlider ||
            !memoryTrack ||
            !memoryCards.length
        ) {
            return;
        }


        currentX =
            event.clientX;


        dragOffset =
            currentX - startX;


        const cardWidth =
            memoryCards[0]
                .getBoundingClientRect()
                .width;


        const gap =
            parseFloat(
                getComputedStyle(
                    memoryTrack
                ).gap
            ) || 0;


        const sliderWidth =
            memorySlider
                .getBoundingClientRect()
                .width;


        const offset =
            (sliderWidth -
                cardWidth) / 2;


        const base =
            offset -
            currentMemory *
            (cardWidth + gap);


        memoryTrack.style.transform =
            `translate3d(${base + dragOffset}px, 0, 0)`;

    }
);


/* =========================================
   MOUSE UP
========================================= */

window.addEventListener(
    "mouseup",
    () => {

        if (!isDragging) {
            return;
        }


        isDragging = false;


        if (memorySlider) {

            memorySlider.classList.remove(
                "dragging"
            );

        }


        const threshold = 55;


        if (
            dragOffset <
            -threshold
        ) {

            goToMemory(
                currentMemory + 1
            );

        }
        else if (
            dragOffset >
            threshold
        ) {

            goToMemory(
                currentMemory - 1
            );

        }
        else {

            updateMemorySlider(
                true
            );

            resetMemoryTimer();

        }


        dragOffset = 0;

    }
);


/* =========================================
   RESPONSIVE RESIZE
========================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            !memoriesScene ||
            !memoriesScene.classList.contains(
                "active"
            )
        ) {
            return;
        }


        updateMemorySlider(
            false
        );

    }
);


/* =========================================
   CHAPTER 20
========================================= */

function showChapter20() {

    clearTimeout(
        memoryTimer
    );


    if (memoriesScene) {

        memoriesScene.classList.remove(
            "active"
        );

    }


    setTimeout(() => {

        if (chapterScene) {

            chapterScene.classList.add(
                "active"
            );

        }

    }, 500);

}


/* =========================================
   CHAPTER 20 → MESSAGE
========================================= */

if (chapterContinueButton) {

    chapterContinueButton.addEventListener(
        "click",
        () => {

            if (chapterScene) {

                chapterScene.classList.remove(
                    "active"
                );

            }


            setTimeout(() => {

                if (messageScene) {

                    messageScene.classList.add(
                        "active"
                    );

                }

            }, 500);

        }
    );

}


/* =========================================
   OPEN LETTER
========================================= */

if (messageOpenButton) {

    messageOpenButton.addEventListener(
        "click",
        () => {

            messageOpenButton.style.display =
                "none";


            if (letter) {

                letter.classList.add(
                    "show"
                );

            }


            setTimeout(() => {

                if (messageFinalButton) {

                    messageFinalButton.classList.add(
                        "show"
                    );

                }

            }, 1800);

        }
    );

}


/* =========================================
   FINAL SPARKLES
========================================= */

const finalSparkles =
    document.getElementById(
        "finalSparkles"
    );


function createFinalSparkles() {

    if (!finalSparkles) {
        return;
    }


    finalSparkles.innerHTML = "";


    const sparkleCount = 28;


    for (
        let i = 0;
        i < sparkleCount;
        i++
    ) {

        const sparkle =
            document.createElement(
                "span"
            );


        sparkle.classList.add(
            "final-sparkle"
        );


        sparkle.style.left =
            `${Math.random() * 100}%`;


        sparkle.style.top =
            `${45 + Math.random() * 50}%`;


        sparkle.style.setProperty(
            "--duration",
            `${3 + Math.random() * 3}s`
        );


        sparkle.style.setProperty(
            "--delay",
            `${Math.random() * 3}s`
        );


        sparkle.style.setProperty(
            "--drift",
            `${Math.random() * 80 - 40}px`
        );


        const size =
            2 +
            Math.random() * 3;


        sparkle.style.width =
            `${size}px`;

        sparkle.style.height =
            `${size}px`;


        finalSparkles.appendChild(
            sparkle
        );

    }

}


/* =========================================
   MESSAGE → FINAL PAGE
========================================= */

if (messageFinalButton) {

    messageFinalButton.addEventListener(
        "click",
        () => {

            if (messageScene) {

                messageScene.classList.remove(
                    "active"
                );

            }


            setTimeout(() => {

                if (finalScene) {

                    finalScene.classList.add(
                        "active"
                    );

                }


                createFinalSparkles();

            }, 600);

        }
    );

}


/* =========================================
   END
========================================= */