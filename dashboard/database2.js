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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

      // console.log(movie_stored)
const movieRef = ref(database, "movies");

let allmovies = []; // Global variable to store fetched movies


// Function to fetch movies from Firebase
const fetchMovies = async () => {
    try {
        const snapshot = await get(movieRef);
        if (snapshot.exists()) {
            const allData = snapshot.val();
            console.log(allData,"alldata ")
            allmovies = Object.values(allData); // Store movies in global variable
            console.log("All Movies Fetched:", allmovies);
        } else {
            console.log("No data available");
            allmovies = []; // Reset movies if no data found
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// Call fetchMovies and wait for it to complete before using `allmovies`
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
  movieContainer.innerHTML = "";

  let filteredMovies = [];

  allMoviesFromLocalStorage.forEach(movieArray => {
    movieArray.forEach(movie => {
      // Convert movie object values to lowercase and check if the query matches any key
      if (Object.values(movie).some(value => 
        typeof value === "string" && value.toLowerCase().includes(query))) {
          filteredMovies.push(movie);

      }
      
    });
  });

  console.log("✅ Filtered Movies:", filteredMovies);

  if (filteredMovies.length === 0) {
    movieContainer.classList.add("Nomoviesfound")
    movieContainer.innerHTML = "<i><p>No movies found matching your search.</p></i>";
    return;
  }

  filteredMovies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card"); 

    movieCard.innerHTML = `
      <h3>${movie.movie_name ?? "Unknown Movie"}</h3>
      <p><strong>Director:</strong> ${movie.movie_director ?? "N/A"}</p>
      <p><strong>Language:</strong> ${movie.movie_language ?? "N/A"}</p>
      <p><strong>Category:</strong> ${movie.movie_category ?? "N/A"}</p>
      <p><strong>Artists:</strong> ${movie.movie_artists ?? "N/A"}</p>
      <video src="${movie.movie_url ?? "#"}" target="_blank">Watch Movie</video>
      <button class="watchlist-btn">Add to Watchlist</button>
    `;

    // document.querySelector("#movies-container").appendChild(movieCard);
    movieContainer.appendChild(movieCard);
    // Handle Watchlist button click
    const watchlistBtn = movieCard.querySelector(".watchlist-btn");
    watchlistBtn.addEventListener("click", () => {
        addToWatchlist(movie);
    });
    function addToWatchlist(movie) {
      let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
  
      // Check if the movie is already in the watchlist
      if (!watchlist.some(m => m.movie_name === movie.movie_name)) {
          watchlist.push(movie);
          localStorage.setItem("watchlist", JSON.stringify(watchlist));
          alert(`${movie.movie_name} added to your watchlist!`);
      } else {
          alert(`${movie.movie_name} is already in your watchlist!`);
      }
  }
    

  })
  console.log("hbjnkm")
  ;
  }

  console.log("hello")


  const langDropdown = document.getElementById("lang_dropdown");
  console.log(langDropdown,"dssfhj")
  langDropdown.addEventListener("click", (event) =>
  {
    console.log(event,"someee")
  
    if (event.target.tagName === "I") {
        const selectedText = event.target.innerText.trim().split("(")[0];

        console.log(selectedText,"some")

        if (selectedText === "Enjoyyyy wathing...") return; // Ignore this item

        const filteredMovies = allMoviesFromLocalStorage.filter(movie => movie[0].movie_language === selectedText);
        console.log(filteredMovies);
        
        
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
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
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




    