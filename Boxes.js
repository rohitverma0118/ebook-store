console.dir(document.body);

let allBoxes = Array.from(document.querySelectorAll("#section .Box"));
let loadMoreBtn = document.querySelector('#button4');
let searchBtn = document.querySelector('.button');
let inputField = document.querySelector('.input');

let isSearchActive = false;
let searchResults = [];
let currentIndex = 0;
let itemsPerPage = 12;

// 📌 Show initial boxes
function showInitialBoxes() {
  allBoxes.forEach(box => box.style.display = 'none');
  currentIndex = 0;
  itemsPerPage = 12;
  for (let i = 0; i < itemsPerPage && i < allBoxes.length; i++) {
    allBoxes[i].style.display = 'block';
    currentIndex++;
  }
  toggleLoadMoreButton(allBoxes);
}

// 📌 Load More button click handler
function loadMoreBoxes() {
  const sourceList = isSearchActive ? searchResults : allBoxes;
  let nextIndex = currentIndex + itemsPerPage;
  for (let i = currentIndex; i < nextIndex && i < sourceList.length; i++) {
    sourceList[i].style.display = 'block';
  }
  currentIndex = nextIndex;
  toggleLoadMoreButton(sourceList);
}

// 📌 Show/hide Load More button automatically
function toggleLoadMoreButton(sourceList) {
  if (currentIndex >= sourceList.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

// 📌 Perform search
function performSearch() {
  let query = inputField.value.trim().toLowerCase();
  isSearchActive = query.length > 0;
  searchResults = [];

  allBoxes.forEach(box => {
    const text = box.querySelector("p").textContent.toLowerCase();
    if (text.includes(query)) {
      searchResults.push(box);
    }
    box.style.display = 'none'; // Hide all first
  });

  currentIndex = 0;
  itemsPerPage = 6;

  for (let i = 0; i < itemsPerPage && i < searchResults.length; i++) {
    searchResults[i].style.display = 'block';
    currentIndex++;
  }

  toggleLoadMoreButton(searchResults);
}

// 📌 Reset search when input is cleared
inputField.addEventListener("input", () => {
  if (inputField.value.trim() === "") {
    isSearchActive = false;
    itemsPerPage = 12;
    showInitialBoxes();
  }
});

// 📌 Event listeners
loadMoreBtn.addEventListener("click", loadMoreBoxes);
searchBtn.addEventListener("click", performSearch);

// 📌 Initialize
showInitialBoxes();