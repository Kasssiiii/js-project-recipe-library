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

