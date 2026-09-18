const peopleApiUrl = "https://swapi.info/api/people";
const cacheExpirationTime = 60 * 60 * 1000;

const characterListElement = document.getElementById("character-list");
const characterInfoElement = document.getElementById("character-info");

let isRequestPending = false;

function setCachedData(storageKey, payloadData) {
  const cacheObject = {
    timestamp: Date.now(),
    data: payloadData
  };
  localStorage.setItem(storageKey, JSON.stringify(cacheObject));
}

function getCachedData(storageKey) {
  const cachedContent = localStorage.getItem(storageKey);
  if (!cachedContent) {
    return null;
  }

  const parsedCache = JSON.parse(cachedContent);
  const currentTime = Date.now();

  if (currentTime - parsedCache.timestamp > cacheExpirationTime) {
    localStorage.removeItem(storageKey);
    return null;
  }

  return parsedCache.data;
}

function renderLoadingState(targetElement) {
  targetElement.innerHTML = '<div class="loading-spinner"></div>';
}

function renderErrorState(targetElement, retryCallback) {
  targetElement.innerHTML = `
    <p style="color: red;">خطایی در دریافت اطلاعات رخ داده است.</p>
    <button id="retry-button">تلاش مجدد</button>
  `;

  const retryButtonElement = document.getElementById("retry-button");
  if (retryButtonElement && retryCallback) {
    retryButtonElement.addEventListener("click", retryCallback);
  }
}

function setButtonsDisabledState(isDisabled) {
  const characterButtons = characterListElement.querySelectorAll("button");
  for (let i = 0; i < characterButtons.length; i++) {
    characterButtons[i].disabled = isDisabled;
  }
}

async function fetchCharactersList() {
  const cachedPeopleData = getCachedData("star_wars_people");
  if (cachedPeopleData) {
    displayCharacterList(cachedPeopleData);
    return;
  }

  renderLoadingState(characterListElement);

  try {
    const apiResponse = await fetch(peopleApiUrl);
    if (!apiResponse.ok) {
      throw new Error("HTTP Error");
    }
    const peopleList = await apiResponse.json();
    setCachedData("star_wars_people", peopleList);
    displayCharacterList(peopleList);
  } catch (error) {
    renderErrorState(characterListElement, function () {
      fetchCharactersList();
    });
  }
}

function displayCharacterList(peopleArray) {
  characterListElement.innerHTML = "";

  for (let i = 0; i < peopleArray.length; i++) {
    const characterItem = peopleArray[i];
    const listRowElement = document.createElement("li");

    const skinColorCircleElement = document.createElement("span");
    skinColorCircleElement.className = "skin-circle";

    if (characterItem.skin_color && characterItem.skin_color !== "unknown" && characterItem.skin_color !== "none") {
      const firstSkinColor = characterItem.skin_color.split(",")[0].trim();
      skinColorCircleElement.style.backgroundColor = firstSkinColor;
    } else {
      skinColorCircleElement.style.backgroundColor = "transparent";
    }

    const actionButtonElement = document.createElement("button");
    actionButtonElement.style.background = "none";
    actionButtonElement.style.border = "none";
    actionButtonElement.style.font = "inherit";
    actionButtonElement.style.cursor = "pointer";
    actionButtonElement.style.display = "flex";
    actionButtonElement.style.alignItems = "center";
    actionButtonElement.style.gap = "8px";
    actionButtonElement.style.width = "100%";
    actionButtonElement.style.textAlign = "left";

    actionButtonElement.appendChild(skinColorCircleElement);
    actionButtonElement.appendChild(document.createTextNode(characterItem.name));

    actionButtonElement.addEventListener("click", function () {
      if (isRequestPending) {
        return;
      }
      handleCharacterClick(characterItem);
    });

    listRowElement.appendChild(actionButtonElement);
    characterListElement.appendChild(listRowElement);
  }
}

async function handleCharacterClick(selectedCharacter) {
  if (!selectedCharacter.homeworld) {
    return;
  }

  isRequestPending = true;
  setButtonsDisabledState(true);
  renderLoadingState(characterInfoElement);

  try {
    const planetData = await fetchPlanetDetails(selectedCharacter.homeworld);
    displayCharacterDetails(selectedCharacter, planetData);
  } catch (error) {
    renderErrorState(characterInfoElement, function () {
      handleCharacterClick(selectedCharacter);
    });
  } finally {
    isRequestPending = false;
    setButtonsDisabledState(false);
  }
}

async function fetchPlanetDetails(planetUrl) {
  const cacheKey = "planet_" + planetUrl;
  const cachedPlanetData = getCachedData(cacheKey);

  if (cachedPlanetData) {
    return cachedPlanetData;
  }

  const apiResponse = await fetch(planetUrl);
  if (!apiResponse.ok) {
    throw new Error("HTTP Error");
  }

  const planetInformation = await apiResponse.json();
  setCachedData(cacheKey, planetInformation);
  return planetInformation;
}

function displayCharacterDetails(characterData, planetData) {
  const starshipsCount = characterData.starships ? characterData.starships.length : 0;

  characterInfoElement.innerHTML = `
    <h2>${characterData.name}</h2>
    <p><strong>Height:</strong> ${characterData.height || "-"} cm</p>
    <p><strong>Mass:</strong> ${characterData.mass || "-"} kg</p>

    <p><strong>Homeworld:</strong> ${planetData.name || "-"}</p>
    <p><strong>Terrain:</strong> ${planetData.terrain || "-"}</p>
    <p><strong>Climate:</strong> ${planetData.climate || "-"}</p>
    <p><strong>Stars:</strong> ${starshipsCount}</p>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  fetchCharactersList();
});