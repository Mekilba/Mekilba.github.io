document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('section');
    const icons = document.querySelector('.icons');
    
    // Toggle dark mode
    icons.addEventListener('click', () => {
      section.classList.toggle('dark');
    });
    // Update clock every second
    function updateClock() {
      const date = new Date();
      let hour = date.getHours();
      let min = date.getMinutes();
      let sec = date.getSeconds();
      
      // Determine AM/PM
      const ampm = hour < 12 ? 'AM' : 'PM';
      
      // Convert to 12-hour format
      hour = hour % 12 || 12;
      
      // Add leading zeros
      hour = hour.toString().padStart(2, '0');
      min = min.toString().padStart(2, '0');
      sec = sec.toString().padStart(2, '0');
      
      // Update DOM
      document.querySelector('.hour_num').textContent = hour;
      document.querySelector('.min_num').textContent = min;
      document.querySelector('.sec_num').textContent = sec;
      document.querySelector('.am_pm').textContent = ampm;
    }
  
    // Initial call and set interval
    updateClock();
    setInterval(updateClock, 1000);
  });
