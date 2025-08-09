// Career Tracks Data
const careerTracks = [
  "Software Development (Full-stack)",
  "Data Analytics",
  "UI/UX Design",
  "Digital Marketing",
  "Customer Support (Remote)",
  "Virtual Assistance / Operations",
  "Cloud & DevOps (Intro)"
];

// Authentication Check
const isAuthenticated = !!localStorage.getItem('userToken');

// Dashboard Button Behavior
document.getElementById('dashboard-btn').addEventListener('click', () => {
  if(isAuthenticated) {
    window.location.href = 'dashboard.html';
  } else {
    // Show sign up modal
  }
});

// Career Tracks Modal
document.getElementById('career-track-btn').addEventListener('click', () => {
  const modal = document.getElementById('career-tracks-modal');
  const grid = modal.querySelector('.tracks-grid');
  
  grid.innerHTML = careerTracks.map(track => `
    <div class="track-card">
      <h4>${track}</h4>
      <button class="select-btn">Explore</button>
    </div>
  `).join('');
  
  modal.style.display = 'block';
});

// Mode Toggles
const toggleMode = (btnId, indicatorId, modeName) => {
  const btn = document.getElementById(btnId);
  let isActive = btn.textContent.includes('ON');
  
  btn.textContent = `${modeName}: ${isActive ? 'OFF' : 'ON'}`;
  document.getElementById(indicatorId).style.display = isActive ? 'none' : 'inline-block';
  
  if(btnId === 'customer-service-toggle' && !isActive) {
    document.querySelector('.chat-header h2').textContent = 'Support Assistant';
    document.querySelector('.ai-message').textContent = 'How can I assist you today?';
  }
};

// TTS Implementation
const ttsToggle = document.getElementById('tts-toggle');
ttsToggle.addEventListener('click', () => {
  if(ttsToggle.textContent.includes('OFF')) {
    if('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        document.querySelector('.ai-message').textContent
      );
      speechSynthesis.speak(utterance);
      ttsToggle.textContent = 'Text-to-Speech: ON';
    } else {
      alert('TTS not supported in your browser');
    }
  } else {
    speechSynthesis.cancel();
    ttsToggle.textContent = 'Text-to-Speech: OFF';
  }
});

// Character Counter
document.querySelector('textarea').addEventListener('input', (e) => {
  document.querySelector('.char-counter').textContent = 
    `${e.target.value.length}/500`;
});
