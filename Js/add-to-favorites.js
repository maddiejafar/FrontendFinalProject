const heartIcons = document.querySelectorAll(".heart-icon");
const favorites = [];


function loadFavorites() {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites.push(...storedFavorites);
}

function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}


function isInFavorites(item) {
  return favorites.some((favorite) => favorite === item);
}


function updateHeartIconState(heartIcon, isFavorite) {
  if (isFavorite) {
    heartIcon.src = "./Images/Icons/heart-solid.svg";
  } else {
    heartIcon.src = "./Images/Icons/heart-regular.svg";
  }
}


function toggleFavorite(item) {
  const index = favorites.indexOf(item);
  if (index === -1) {
    favorites.push(item);
  } else {
    favorites.splice(index, 1);
  }
  saveFavorites();
}


loadFavorites();

heartIcons.forEach((heartIcon) => {
  const group = heartIcon.closest(".group");
  const imgSrc = group.querySelector("img").src;

  heartIcon.addEventListener("click", () => {
    const isFavorite = isInFavorites(imgSrc);
    toggleFavorite(imgSrc);
    updateHeartIconState(heartIcon, !isFavorite);
  });

  const isFavorite = isInFavorites(imgSrc);
  updateHeartIconState(heartIcon, isFavorite);
});

const nftTab = document.querySelector("#tabs .tab:nth-child(1)");
const favoritesTab = document.querySelector("#tabs .tab:nth-child(2)");
const nftCardsSection = document.querySelector("#nft-cards-section");
const favoritesSection = document.querySelector("#favorites-section>div"); 


nftTab.addEventListener("click", () => {
  nftCardsSection.style.display = "block"; 
  favoritesSection.style.display = "none"; 
});


favoritesTab.addEventListener("click", () => {
  nftCardsSection.style.display = "none"; 
  favoritesSection.style.display = "block";
});



favoritesTab.addEventListener("click", () => {

  favoritesSection.innerHTML = '';

  nftCardsSection.style.display = "none";


  favoritesSection.style.display = "block";


  favorites.forEach((imgSrc) => {
    const card = document.createElement("div");
    card.classList.add("group");
    card.innerHTML = `
      <img src="${imgSrc}" alt="">
      <div class="texts">
      <h5>Distant Galaxy</h5>
      <div class="moon-dancer">
          <img src="./Images/Animakid.png" alt="">
          <h6>Animakid</h6>
      </div>
      <div class="statistics">
          <div class="price">
              <p>Price</p>
              <p>Highest Bid</p>
          </div>
          <div class="eth">
              <p>1.63 ETH</p>
              <p>0.33 wETH</p>
          </div>
      </div>
  
      </div>
      
    `;

    favoritesSection.appendChild(card);
  });
});

function updateFavoritesCount() {
  const favoritesCount = favorites.length;
  const favoritesCountElement = document.getElementById("favorites-count");
  favoritesCountElement.textContent = `(${favoritesCount})`;
}

function toggleFavorite(item) {
  const index = favorites.indexOf(item);
  if (index === -1) {
      favorites.push(item);
  } else {
      favorites.splice(index, 1);
  }
  saveFavorites();
  updateFavoritesCount(); // Update the favorites count immediately
}
