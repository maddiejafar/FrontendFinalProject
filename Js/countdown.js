function updateCountdown() {
    const targetTime = new Date().getTime() + 60 * 60 * 60 * 1000;
  
    setInterval(() => {
      const currentTime = new Date().getTime();
      const timeLeft = targetTime - currentTime;
  
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
      document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
      document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
    }, 1000);
  }
  
  updateCountdown();