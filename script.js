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
        alert("You have chosen american cuisine");
    } else if (text == "China") {
        alert("You have chosen chineese cuisine");
    } else if (text == "Italy") {
        alert("You have chosen italian cuisine");
    } else {
        alert("You have chosen recipies from all cuisines");
    }
};
*/


const recipesSection = document.getElementById("recipeSection");
const errorSection = document.getElementById("errorMessage");
  
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

  //Function to display recepies
  const displayRecipes = (recipes, button) => {
    //clear recepie section as well as any previous error messages
    recipesSection.innerHTML = ""
    errorSection.innerHTML = ""

    //if statement for no criterion
    if (recipes.length == 0 && button != null) {
      errorSection.innerHTML = "There is no recipes matching criterion for "+button.textContent;
      return
    }
  
    recipes.forEach((recipe) => {
        //for each receipe , we are transporming elements from the list to LI HTML elements and joining them into single string
      const ingredientsList = recipe.ingredients
        .map((ingredient, index) => {
          return `<li>${ingredient}</li>`
        })
        .join("")
        
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
      `
    })
  }

  //Delaring all the CONSTs for buttons

const randomButton = document.getElementById("random")
const allButton = document.getElementById("all")
const italyButton = document.getElementById("italy")
const usaButton = document.getElementById("usa")
const chinaButton = document.getElementById("china")
const swedenButton = document.getElementById("sweden")


const sortByTimeAscButton = document.getElementById("highToLow")
const sortByTimeDescButton = document.getElementById("lowToHigh")

//random button - math random - random element 
randomButton.addEventListener("click", () => {
    const random = Math.floor(Math.random() * recipes.length);
    const randomRecipe = recipes[random];
    displayRecipes([randomRecipe], randomButton)
  })

  allButton.addEventListener("click", () => {
    displayRecipes(recipes, allButton)
  })
  
  italyButton.addEventListener("click", () => {
    const italianRecipes = recipes.filter((recipe) =>
      recipe.cuisine.includes("Italian")
    )
    displayRecipes(italianRecipes, italyButton)
  })
  
  chinaButton.addEventListener("click", () => {
    const asianRecipes = recipes.filter((recipe) =>
      recipe.cuisine.includes("Asian")
    )
    displayRecipes(asianRecipes, chinaButton)
  })
  
  usaButton.addEventListener("click", () => {
    const AmericanRecipes = recipes.filter((recipe) =>
      recipe.cuisine.includes("American")
    )
    displayRecipes(AmericanRecipes, usaButton)
  })

  swedenButton.addEventListener("click", () => {
    const SwedenRecipes = recipes.filter((recipe) =>
      recipe.cuisine.includes("Sweden")
    )
    displayRecipes(SwedenRecipes, swedenButton)
  })
  
  //sorting by time
  sortByTimeAscButton.addEventListener("click", () => {
    const sortedRecipes = [...recipes].sort(
      (a, b) => (a.readyInMinutes || Infinity) - (b.readyInMinutes || Infinity)
    )
    displayRecipes(sortedRecipes, sortByTimeAscButton)
  })
  sortByTimeDescButton.addEventListener("click", () => {
    const sortedRecipes = [...recipes].sort(
      (a, b) => (b.readyInMinutes || Infinity) - (a.readyInMinutes || Infinity)
    );
    displayRecipes(sortedRecipes, sortByTimeDescButton);
  })
  
  displayRecipes(recipes, null)
