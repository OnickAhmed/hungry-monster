warning.style.display = "none";
const food = document.getElementById("foods");
btnSearch.addEventListener("click", function () {
  food.innerHTML = "";
  warning.style.display = "none";
  const item = document.getElementById("item").value;
  if (item === "") {
    warning.style.display = "block";
  } else {
    getFood(item);
  }
});

function getFood(item) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals == null || data.meals.length < 0) {
        warning.style.display = "block";
      } else {
        for (let i = 0; i < data.meals.length; i++) {
          renderItem(data.meals[i]);
        }
      }
    });
}

renderItem = (item) => {
  const img = item.strMealThumb;
  const title = item.strMeal;
  const foodDiv = document.createElement("div");
  foodDiv.className = "col-md-3 my-2";
  foodDiv.id = "item";
  foodDiv.innerHTML = `
            <div class="card shadow" onclick="displayDetails('${item.strMeal}')">
              <img class="card-img-top" src="${img}" alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
              </div>
            </div>
    `;
  food.appendChild(foodDiv);
};

displayDetails = (item) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
  const modalDiv = document.getElementById("itemModal");
  modalDiv.innerHTML = "";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let text = ``;
      modalDiv.innerHTML = `
        <img src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h2 class="card-title">${data.meals[0].strMeal}</h2>
            <h5>Ingredients</h5>
            <ul class="list-group list-unstyled border-0">
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure1} - ${data.meals[0].strIngredient1}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure2} - ${data.meals[0].strIngredient2}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure3} - ${data.meals[0].strIngredient3}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure4} - ${data.meals[0].strIngredient4}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure5} - ${data.meals[0].strIngredient5}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure6} - ${data.meals[0].strIngredient6}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure7} - ${data.meals[0].strIngredient7}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure8} - ${data.meals[0].strIngredient8}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure9} - ${data.meals[0].strIngredient9}
                </li>
                <li class="list-group-item border-0 ml-0 my-0 py-1 pl-0">
                    <i class="fas fa-check-square text-danger mr-3"></i>
                    ${data.meals[0].strMeasure10} - ${data.meals[0].strIngredient10}
                </li>
                
            </ul>
        </div>
        `;
    });
  $("#exampleModal").modal("show");
};