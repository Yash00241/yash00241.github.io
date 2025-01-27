document.addEventListener("DOMContentLoaded", function () {
    const doodleTypes = [
        'images/1.png', 'images/2.png', 'images/3.png', 'images/4.png',
        'images/5.png', 'images/6.png', 'images/7.png', 'images/8.png',
        'images/9.png', 'images/10.png', 'images/11.png', 'images/12.png',
        'images/13.png', 'images/14.png', 'images/15.png', 'images/16.png',
        'images/17.png'
    ];

    const fixedPositions = [];

    // Image generation
    for (let y = 0; y < 10; y++) {
        for (let x = 0; x < 10; x++) {
            const randomOffsetX = (Math.random() - 0.5) * 5; 
            const randomOffsetY = (Math.random() - 0.5) * 5;

            // Skipping the positions overlapping the content box
            const left = x * 10 + 5 + randomOffsetX;
            const top = y * 10 + 5 + randomOffsetY;

            if (
                !(left > 35 && left < 65 && top > 30 && top < 70) // Avoid overlap with content box
            ) {
                fixedPositions.push({ left: `${left}vw`, top: `${top}vh` });
            }
        }
    }

    fixedPositions.forEach((position, index) => {
        const doodle = document.createElement('div');
        doodle.className = 'doodle';
        doodle.style.backgroundImage = `url(${doodleTypes[index % doodleTypes.length]})`;
        doodle.style.width = '40px';
        doodle.style.height = '40px';
        doodle.style.position = 'absolute';
        doodle.style.left = position.left;
        doodle.style.top = position.top;
        doodle.style.transform = `rotate(${Math.random() * 360}deg)`; 
        doodle.style.opacity = Math.random() * 0.5 + 0.5; 
        document.body.appendChild(doodle);
    });
});
