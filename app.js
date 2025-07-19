const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon');

const videoList = [video1, video2, video3];

videoList.forEach((video)=>{
    video.addEventListener('mouseover',()=>{
        video.play();
    })
    video.addEventListener('mouseout',()=>{
        video.pause();
    })
})

menu.addEventListener('click',()=>{
    sideBar.classList.remove("close-sidebar");
    sideBar.classList.add("open-sidebar");
    
})

close.addEventListener('click',()=>{
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbz1TizaYUn1JkdE3iRbRkuTxVdzIES9lgGz2u1s6wqjuXk2R4nPKudNteYeNEJMbZzS/exec'
const form = document.forms['submit-to-google-sheet']
const success = document.getElementById('success');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
    .then(response => {
      success.innerHTML = "Thank you for contacting me...";
      setTimeout(() => {
        success.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch(error => {
      console.error('Error!', error.message);
      success.innerHTML = "There was an error submitting the form.";
      setTimeout(() => {
        success.innerHTML = "";
      }, 5000);
    });
});


const music = document.getElementById("bgMusic");
const toggleBtn = document.getElementById("toggleSound");

// Try playing music on first interaction
const tryPlayMusic = () => {
  music.play().then(() => {
    toggleBtn.textContent = "🔇";
  }).catch(err => {
    console.log("Autoplay blocked:", err);
  });

  document.removeEventListener("click", tryPlayMusic);
  document.removeEventListener("keydown", tryPlayMusic);
  document.removeEventListener("scroll", tryPlayMusic);
};

document.addEventListener("click", tryPlayMusic);
document.addEventListener("keydown", tryPlayMusic);
document.addEventListener("scroll", tryPlayMusic);

// Toggle play/pause
toggleBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleBtn.textContent = "🔊";
  } else {
    music.pause();
    toggleBtn.textContent = "🔇";
  }
});