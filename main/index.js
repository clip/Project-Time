var sakura = new Sakura('#sakura-container', {
    colors: [
        {
            gradientColorStart: 'rgba(255, 183, 197, 0.9)',
            gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: 'rgba(255,189,189, 0.9)',
            gradientColorEnd: 'rgba(227,170,181, 0.9)',
            gradientColorDegree: 120,
        },
        {
            gradientColorStart: 'rgba(212,152,163, 0.9)',
            gradientColorEnd: 'rgba(242,185,196, 0.9)',
            gradientColorDegree: 120,
        },
    ],
});

const imgs = document.getElementsByTagName('img');
for (let i = 0; i < imgs.length; i++) {
    imgs[i].setAttribute("ondragstart", "return false");
}

document.addEventListener('DOMContentLoaded', function () {
    var app = document.getElementById('typewriter-container');
    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 100, // Delay for typing each character
        deleteSpeed: 100, // Slower deletion speed        
    });

    typewriter.typeString('Project<br><strong>Lock IN</strong>.')
        .pauseFor(1500) // Shorter pauses can make the effect feel snappier
        .deleteAll(25) // Faster deletion speed
        .typeString('<i>Make the best out of <strong>You</strong><br>and the time <em>left.</em></i>')
        .pauseFor(1500)
        .deleteChars(14, 25) // Faster deletion speed for specific number of characters
        .typeString('<i>achieve the <strong>CHANGE.</strong></i>')
        .pauseFor(1500)
        .deleteChars(7, 25) // Faster deletion speed for specific number of characters
        .typeString('<i><strong>IMPOSSIBLE.</strong></i>')
        .pauseFor(1500)
        .deleteChars(11, 25) // Faster deletion speed for specific number of characters
        .typeString('<i><strong>GREAT.</strong></i>')
        .pauseFor(1500) // Adjusted pause duration before looping
        .start();
});

function Redirect() {
    window.open("https://www.github.com/clip", "_blank");
}

