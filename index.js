/ Surprise Button Function
document.getElementById("surpriseBtn").addEventListener("click", () => {
    document.getElementById("loveLetter").classList.remove("hidden");
    startFireworks();
  });
  
  // Heart Fireworks Animation
  const canvas = document.getElementById("fireworks");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  let particles = [];
  
  function createHeart(x, y) {
    for (let i = 0; i < 20; i++) {
      particles.push({
        x,
        y,
        size: Math.random() * 6 + 2,
        speedX: (Math.random() - 0.5) * 8,
        speedY: (Math.random() - 0.5) * 8,
        alpha: 1
      });
    }
  }
  
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      ctx.globalAlpha = p.alpha;
      ctx.font = `${p.size}px serif`;
      ctx.fillText('❤️', p.x, p.y);
      p.x += p.speedX;
      p.y += p.speedY;
      p.alpha -= 0.02;
      if (p.alpha <= 0) particles.splice(i, 1);
    });
  }
  
  function animate() {
    draw();
    requestAnimationFrame(animate);
  }
  
  function startFireworks() {
    setInterval(() => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      createHeart(x, y);
    }, 300);
  }
  
  animate();
  
