const leftCardPage = document.getElementById("leftCard");
const myCards = document.getElementById("myCards");
const carousel = document.getElementById("myCarousel");
const button = document.getElementById("cta");
const modalText = document.getElementById("modalText");

let data;

const getData = async () => {
  try {
    let res = await fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=the%20weeknd"
    );

    if (res.ok) {
      data = await res.json();
      console.log(data);
      createCenterCard();
      createThreeCards();
      createCarousel();
    }
  } catch (error) {
    console.log(error);
  }
};

getData();

const createCenterCard = () => {
  let contentCard = [data.data[0]];
  contentCard.forEach((el) => {
    leftCardPage.innerHTML =
      leftCardPage.innerHTML +
      `

        <div class="card text-bg-dark rounded-0">
          <img src="${el.artist.picture_xl}" class="card-img rounded-0" alt="..." />
          <div class="card-img-overlay">
            <h5 class="card-title title">${el.artist.name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text"><small>Last updated 3 mins ago</small></p>
          </div>
        </div>

      `;
  });
};

const createThreeCards = () => {
  let myFavSongs = [];
  console.log(data.data);

  myFavSongs = data.data.filter(
    (el) =>
      el.title === "Starboy" ||
      el.title === "Save Your Tears" ||
      el.title === "The Hills" ||
      el.title === "Blinding Lights"
  );

  myFavSongs.forEach((el) => {
    myCards.innerHTML =
      myCards.innerHTML +
      `
    <div class="col-12 col-lg-3">
          <div class="card listCards bg-black text-light" style="width: 18rem">
            <img src="${el.album.cover_medium}" class="card-img-top imgFix" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${el.title}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <button class="btn bg-white">Go somewhere</button>
            </div>
          </div>
        </div>
    
    `;

    // Modal function

    modalText.innerHTML =
      modalText.innerHTML +
      `
    <p>${el.title}</p>
    `;
  });

  console.log(myFavSongs);
};

const createCarousel = () => {
  data.data.forEach((el, i) => {
    if (i === 0) {
      carousel.innerHTML =
        carousel.innerHTML +
        `
        <div class="carousel-item active">
            <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
        </div>
        `;
    } else {
      carousel.innerHTML =
        carousel.innerHTML +
        `
          <div class="carousel-item">
              <img src="${el.album.cover_big}" class="d-block w-100" alt="..." />
          </div>
          `;
    }
  });
};

// RANK FUNCTION

button.addEventListener("click", () => {
  seeRank();
});

const seeRank = () => {
  // alert("ciao");
  let h5 = document.querySelectorAll("h5");
  alert(h5);
};
