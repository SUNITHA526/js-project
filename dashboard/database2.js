import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, get, set, ref } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAirN8OZ1ySvBsU4uxargwF7cg5QWsQFW8",
    authDomain: "signup-and-login-page-35ecc.firebaseapp.com",
    projectId: "signup-and-login-page-35ecc",
    storageBucket: "signup-and-login-page-35ecc.firebasestorage.app",
    messagingSenderId: "6015295795",
    appId: "1:6015295795:web:499ba34908ac7899b11e46",
    measurementId: "G-N3LEB4RQ3F"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const movieRef = ref(database, "movies");

let allmovies = []; 



const fetchMovies = async () => {
    try {
        const snapshot = await get(movieRef);
        if (snapshot.exists()) {
            const allData = snapshot.val();
            console.log(allData,"alldata ")
            allmovies = Object.values(allData); 
            console.log("All Movies Fetched:", allmovies);
        } else {
            console.log("No data available");
            allmovies = []; 
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};


(async () => {
    await fetchMovies();
    console.log("Stored movies after fetch:", allmovies); 
    localStorage.setItem("allMovies",JSON.stringify(allmovies))
})();


let allMoviesFromLocalStorage=JSON.parse(localStorage.getItem("allMovies"))
console.log(allMoviesFromLocalStorage,"allMoviesFromLocalStorage")



function searchMovies() {

  const movieContainer = document.getElementById("filteredData");
  const searchInput = document.querySelector("#search"); 
  
  if (!movieContainer) {
    console.error("❌ Element with ID 'filteredData' not found!");
    return;
  }

  if (!searchInput) {
    console.error("❌ Search input element not found!");
    return;
  }

  

  const query = searchInput.value.trim().toLowerCase();
  console.log("🔍 Search Query:", query);


  
  // Clear previous search results
  // movieContainer.innerHTML = "";

  let filteredMovies = [];

  allMoviesFromLocalStorage.forEach(movieArray => {
    movieArray.forEach(movie => {
      if (Object.values(movie).some(value => 
        typeof value === "string" && value.toLowerCase().includes(query))) {
          filteredMovies.push(movie);

      }
      
    });
  });

  console.log("✅ Filtered Movies:", filteredMovies);

  displayMovies(filteredMovies)

  }



  function displayMovies(filteredMovies){
    console.log(filteredMovies);
    
    movieContainer.innerHTML = "";
      if (filteredMovies.length === 0) {
      movieContainer.classList.add("Nomoviesfound")
      movieContainer.innerHTML = "<i><p>No movies found matching your search.</p></i>";
      return;
    }
    filteredMovies.forEach(movie => {
      const movieCard = document.createElement("div");
      movieCard.classList.add("movie-card", "moviecard-div"); 
      console.log(movie);
      
      console.log(movie.movie_name);
      
      movieCard.innerHTML = `
      <video src="${movie.movie_url ?? "#"}" target="_blank" controls>Watch Movie</video>
        <h3>${movie.movie_name ?? "Unknown Movie"}</h3>
        <p><strong>Director:</strong> ${movie.movie_director ?? "N/A"}</p>
        <p><strong>Language:</strong> ${movie.movie_language ?? "N/A"}</p>
        <p><strong>Category:</strong> ${movie.movie_category ?? "N/A"}</p>
        <p><strong>Artists:</strong> ${movie.movie_artists ?? "N/A"}</p>
        <div>
        <button class="watchlist-btn">Add to Watchlist</button>
        <button class="like-btn" data-movie="${movie.movie_name}">
          <i class="fa-regular fa-heart"></i> 
        </button>
        </div>
      `;
  
      
      movieContainer.appendChild(movieCard);
      const watchlistBtn = movieCard.querySelector(".watchlist-btn");
      watchlistBtn.addEventListener("click", (e) => {
        e.preventDefault()
          addToWatchlist(movie)
          
      });

    
    const likeBtn = movieCard.querySelector(".like-btn i");
    updateLikeButton(likeBtn, movie.movie_name);
    likeBtn.addEventListener("click", () => {
        toggleLike(movie.movie_name, likeBtn);
    });
  });

  }





  const watchlistBtn = document.querySelector("#watchlist");
const watchlistContainer = document.querySelector("#watchlist-container");

watchlistBtn.addEventListener("click", (e) => {
    e.preventDefault();
    
    
    if (watchlistContainer.style.display === "block") {
        watchlistContainer.style.display = "none"; 
    } else {
        displayWatchList(); 
        watchlistContainer.style.display = "block"; 
    }
});

function displayWatchList() {
    let watchListData = JSON.parse(localStorage.getItem("watchlist")) || [];

    if (watchListData.length === 0) {
        alert("Your watchlist is empty.");
        return;
    }

    watchlistContainer.innerHTML = ""; 

    watchListData.forEach((movie) => {
        let movieItem = document.createElement("p");
        movieItem.textContent = movie.movie_name;
        watchlistContainer.appendChild(movieItem);
    });
}



  function addToWatchlist(movie) {
    let watchlistContainer = document.getElementById("watchlist");
     watchlistContainer.innerHTML = "";
     let  watchlist=JSON.parse(localStorage.getItem("watchlist")) || []; 
    if (!watchlist.some(m => m.movie_name === movie.movie_name)) {
        watchlist.push(movie);
        localStorage.setItem("watchlist", JSON.stringify(watchlist));
        alert(`${movie.movie_name} added to your watchlist!`);
    } else if(watchlistContainer===watchlist) {
        alert(`${movie.movie_name} is already in your watchlist!`);
    }
}
  function toggleLike(movieName, likeBtn) {
    let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    const index = likedMovies.indexOf(movieName);
                      
    if (index === -1) {
        likedMovies.push(movieName);
        likeBtn.classList.remove("fa-regular");
        likeBtn.classList.add("fa-solid"); 
    } else {
        likedMovies.splice(index, 1);
        likeBtn.classList.remove("fa-solid");
        likeBtn.classList.add("fa-regular"); 
    }
  
    localStorage.setItem("likedMovies", JSON.stringify(likedMovies));
  }
  function updateLikeButton(likeBtn, movieName) {
    let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
    if (likedMovies.includes(movieName)) {
        likeBtn.classList.remove("fa-regular");
        likeBtn.classList.add("fa-solid"); 
    } else {
        likeBtn.classList.remove("fa-solid");
        likeBtn.classList.add("fa-regular"); 
    }
  }

  console.log("hbjnkm")
  console.log("hello")


  const langDropdown = document.getElementById("lang_dropdown");
  console.log(langDropdown,"dssfhj")
  langDropdown.addEventListener("click", (event) =>
  {
  
    if (event.target.tagName === "I") {
        const selectedText = event.target.innerText.trim().split("(")[0];

        if (selectedText === "Enjoyyyy wathing...") return; 
        console.log(allMoviesFromLocalStorage);
        
        const filteredMovies = allMoviesFromLocalStorage.filter(movie => movie[0].movie_language && movie[0].movie_language.trim().toLowerCase()=== selectedText.toLowerCase());
        console.log(filteredMovies);
        displayMovies(filteredMovies[0])

        
        
    }
})
    const searchInputElement = document.querySelector("#search");
    // console.log(searchInputElement.value)
    if (searchInputElement) {
      searchInputElement.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
          console.log("🔍 Enter key pressed, calling searchMovies()...");
          searchMovies();
        }
      });
    } else {
      console.error("❌ Search input element not found!");
    }


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 5,
  slidesPerGroup: 4,
  loop: false,
  breakpoints: {
    320: { slidesPerView: 1 },
    480: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  },
  loopFillGroupWithBlank: true,
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var swiper1 = new Swiper(".mySwiper1", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next", // Corrected property name
    prevEl: ".swiper-button-prev", // Corrected property name
  },
  // on: {
  //   slideChangeTransitionStart: function () {
  //     document.querySelectorAll('video').forEach(video => video.pause());
  //   }
  // },
  thumbs: {
    swiper: swiper1,
  },
});




  document.addEventListener("DOMContentLoaded", function () {
      const mainVideo = document.querySelector(".mySwiper2 video"); 
      const thumbnailVideos = document.querySelectorAll(".mySwiper1 video"); 

      function syncVideos() {
          thumbnailVideos.forEach(video => {
              video.currentTime = mainVideo.currentTime; 
              if (!mainVideo.paused) video.play(); 
              else video.pause(); 
          });
      }

      
      mainVideo.addEventListener("play", syncVideos);
      mainVideo.addEventListener("pause", syncVideos);
      mainVideo.addEventListener("timeupdate", syncVideos);
  });

