// Updated career track handler
document.getElementById('explore-paths-btn').addEventListener('click', () => {
  const modal = createPathsModal();
  document.body.appendChild(modal);
});

function createPathsModal() {
  const modal = document.createElement('div');
  modal.className = 'paths-modal';
  
  // Global Tracks (from JSON)
  const globalTracks = [
    "Software Development (Full-stack)",
    "Data Analytics",
    "UI/UX Design",
    "Digital Marketing",
    "Customer Support (Remote)",
    "Virtual Assistance / Operations",
    "Cloud & DevOps (Intro)"
  ];
  
  const tracksHTML = globalTracks.map(track => 
    `<div class="track">${track}</div>`
  ).join('');
  
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Choose Your Learning Journey</h2>
      
      <div class="path-card global-path">
        <!-- ... global path structure with ${tracksHTML} ... -->
      </div>
      
      <div class="path-card local-path">
        <!-- ... local path structure ... -->
      </div>
    </div>
  `;
  
  // Add close functionality
  modal.addEventListener('click', (e) => {
    if(e.target.classList.contains('paths-modal')) {
      document.body.removeChild(modal);
    }
  });
  
  return modal;
}
