/* WEEK 1 JS 
const allFilter = document.getElementById("all-filter");
allFilter.onclick = () => {
  clickButton(allFilter)
};
const italyFilter = document.getElementById("italy-filter");
italyFilter.onclick = () => {
  clickButton(italyFilter)
};
const usaFilter = document.getElementById("usa-filter");
usaFilter.onclick = () => {
  clickButton(usaFilter)
};
const chinaFilter = document.getElementById("china-filter");
chinaFilter.onclick = () => {
  clickButton(chinaFilter)
};

const clickButton = (button) => {
    const text = button.textContent;
    if (text == "USA") {
        errorSection.innerHTML ="You have chosen american cuisine";
    } else if (text == "China") {
        errorSection.innerHTML ="You have chosen chineese cuisine";
    } else if (text == "Italy") {
        errorSection.innerHTML ="You have chosen italian cuisine";
    } else {
        errorSection.innerHTML ="You have chosen recipies from all cuisines";
    }
};
*/


const recipesSection = document.getElementById("recipeSection");
const errorSection = document.getElementById("errorMessage");


const randomButton = document.getElementById("random")
const allButton = document.getElementById("all")
const italyButton = document.getElementById("italy")
const usaButton = document.getElementById("usa")
const chinaButton = document.getElementById("china")
const swedenButton = document.getElementById("sweden")

const allFilterButtons = [randomButton, allButton, italyButton, usaButton, chinaButton, swedenButton];

//check if the button all is active
//const allActive = allButton.classList.contains("active")
// set the button all to inactive
//allButton.classList.remove("active")
// set the button all to active
//allButton.classList.add("active")

const sortByTimeAscButton = document.getElementById("highToLow")
const sortByTimeDescButton = document.getElementById("lowToHigh")

const allSortButtons = [sortByTimeAscButton, sortByTimeDescButton];
  
//Array with recipes
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "images/carbonara.jpg",
    readyInMinutes: 30,
    servings: 4,
    diets: ["vegan"],
    cuisine: "Italian",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt",
    ],
    pricePerServing: 2.5,
    popularity: 85,
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "images/carbonara.jpg",
    readyInMinutes: 25,
    servings: 2,
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper",
    ],
    pricePerServing: 3.0,
    popularity: 92,
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "images/carbonara.jpg",
    readyInMinutes: 20,
    servings: 3,
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice",
    ],
    pricePerServing: 4.0,
    popularity: 78,
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "images/carbonara.jpg",
    readyInMinutes: 15,
    servings: 2,
    diets: ["dairy-free"],
    cuisine: "American",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado",
    ],
    pricePerServing: 2.8,
    popularity: 88,
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "images/carbonara.jpg",
    readyInMinutes: 10,
    servings: 4,
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: ["chickpeas", "tahini", "garlic", "lemon juice", "olive oil"],
    pricePerServing: 1.5,
    popularity: 95,
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "images/carbonara.jpg",
    readyInMinutes: 5,
    servings: 1,
    diets: ["vegan"],
    cuisine: "Italian",
    ingredients: ["bread", "avocado", "lemon juice", "salt"],
    pricePerServing: 2.0,
    popularity: 90,
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "images/carbonara.jpg",
    readyInMinutes: 90,
    servings: 5,
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms",
    ],
    pricePerServing: 5.5,
    popularity: 80,
  },
];

  //Function to filter, sort and display recepies
const displayRecipes = (button) => {
  //clear recepie section as well as any previous error messages
  recipesSection.innerHTML = "";
  errorSection.innerHTML = "";

  // find the group of buttons (either allkitchenButtons or allTimeButtons) that the clicked button belongs to
  const buttonGroup = button.classList.contains("sort-button") ? allSortButtons : allFilterButtons;
  // loop through all buttons in the group and remove the active class
  buttonGroup.forEach((button) => button.classList.remove("active"));
  // add the active class to the clicked button
  button.classList.add("active");

  // get the active filter option from the allFilterButtons array
  const filterOptionButton = allFilterButtons.find((kitchenButton) => kitchenButton.classList.contains("active"));
  // get id of the active filter option
  const kitchenOptionId = filterOptionButton.id;

  // get the active sort option from the allSortButtons array
  const sortOptionButton = allSortButtons.find((timeButton) => timeButton.classList.contains("active"));
  // get id of the active sort option 
  const sortOptionId = sortOptionButton.id;

  // filter the recipes based on the active filter option
  let filteredRecipes;
  if (kitchenOptionId === "all") {
    filteredRecipes = [...recipes];
  } else if (kitchenOptionId === "random") {
    const random = Math.floor(Math.random() * recipes.length);
    filteredRecipes = [recipes[random]];
  } else if (kitchenOptionId === "italy") {
    filteredRecipes = recipes.filter((recipe) => recipe.cuisine === "Italian");
  } else if (kitchenOptionId === "usa") {
    filteredRecipes = recipes.filter((recipe) => recipe.cuisine === "American");
  } else if (kitchenOptionId === "china") {
    filteredRecipes = recipes.filter((recipe) => recipe.cuisine === "Asian");
  } else if (kitchenOptionId === "sweden") {
    filteredRecipes = recipes.filter((recipe) => recipe.cuisine === "Sweden");
  }

  //if statement for no criterion
  if (recipes.length == 0) {
    errorSection.innerHTML =
      "There is no recipes matching criterion for " + button.textContent;
    return;
  }

  // sort the recipes based on the active sort option
  let sortedRecipes;
  if (sortOptionId === "highToLow") {
    sortedRecipes = filteredRecipes.sort(
      (a, b) => (b.readyInMinutes || Infinity) - (a.readyInMinutes || Infinity)
    );
  } else if (sortOptionId === "lowToHigh") {
    sortedRecipes = filteredRecipes.sort(
      (a, b) => (a.readyInMinutes || Infinity) - (b.readyInMinutes || Infinity)
    );
  }

  sortedRecipes.forEach((recipe) => {
    //for each sorted recipe, we are transporming elements from the list to LI HTML elements and joining them into single string
    const ingredientsList = recipe.ingredients
      .map((ingredient, index) => {
        return `<li>${ingredient}</li>`;
      })
      .join("");

    //replacing HTML recipe section with elements from an array
    recipesSection.innerHTML += `


        <div class="recipe">
        <img src="${recipe.image}"/>
        <h2>${recipe.title}</h2>
        <hr></hr>
        <section class="details">
          <div class="Cuisine">
            <div class="detailsElement"><div class="Recipe-title">Cuisine:</div><div class="Recipe-region">${recipe.cuisine}</div></div>
            <div class="detailsElement"><div class="Recipe-title">Time:</div><div class="Recipe-time">${recipe.readyInMinutes}</div></div>
          </div>
        </section>
        <hr/>
        <div class="Recipe-title">Ingredients</div>
        <div class="Ingredients">
        <ul>
        ${ingredientsList}
        </ul>
        </div>
      </div>
      `;
  });
};

// Adding event listeners to all buttons (filter and sort - displayed when clicked)

allFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayRecipes(button);
  });
});

allSortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    displayRecipes(button);
  });
});
  
displayRecipes(allButton)
