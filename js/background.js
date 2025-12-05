/**
 * Dynamic Background Animation
 * Creates a particle network effect with floating particles and connections.
 */

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// Configuration
const config = {
    particleColor: 'rgba(99, 102, 241, 0.5)', // Indigo-500 equivalent
    lineColor: 'rgba(99, 102, 241, 0.15)',
    particleCount: 80,
    connectionDistance: 150,
    mouseRadius: 150,
};

// Set canvas size
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.background = '#020410'; // Base background color
document.body.appendChild(canvas);

// Mouse interaction
const mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
};

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80);
    init();
});

// Particle Class
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = config.particleColor;
        ctx.fill();
    }

    // Check particle position, check mouse position, move the particle, draw the particle
    update() {
        // Check if particle is still within canvas
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < config.mouseRadius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 2; // subtle push
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 2;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 2;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 2;
            }
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        // Draw particle
        this.draw();
    }
}

// Create particle array
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;

    // Adjust particle count for mobile
    if (window.innerWidth < 768) {
        numberOfParticles = numberOfParticles * 0.5;
    }

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 0.5) - 0.25; // Slower speed
        let directionY = (Math.random() * 0.5) - 0.25;
        let color = config.particleColor;

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

// Check if particles are close enough to draw line
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                opacityValue = 1 - (distance / 20000);
                // Draw lighter lines
                ctx.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.2})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Start
init();
animate();
