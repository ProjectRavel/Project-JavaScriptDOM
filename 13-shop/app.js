// *** DECLARATION DOCUMENT ***
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.querySelector("#grocery");
const submit = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// Edit Option
let editElement;
let editFlag = false;
let editId = "";

// *** EVENT LISTENER ***
// submit form
form.addEventListener("submit", addItem);
// clear button
clearBtn.addEventListener("click", clearItems);

// *** FUNCTION ***
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    displayAlert("List Telah Ditambahkan", "success");
    const element = document.createElement("article");
    // add class
    element.classList.add("grocery-item");
    // add attribute
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;
    list.appendChild(element);
    container.classList.add("show-container");
    // Add to Local Storage
    addToLocalStorage(id, value);
    //  Back to Default
    setBackToDefault();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("Mohon DiIsi", "danger");
  }
}

// Display Alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}

// Clear Button
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  items.forEach((item) => {
    if (item > 0) {
      displayAlert("Item berhasil dihapus!", "success");
      container.classList.remove("show-container");
    }
    item.remove();

    // localStorage.removeItem('list')
    setBackToDefault();
  });
}

// set back to default
function setBackToDefault() {
  console.log("set back to default");
  grocery.value = "";
  editFlag = false;
  editId = "";
  submit.textContent = "Submit";
}
// *** LOCAL STORAGE ***
function addToLocalStorage(id, value) {
  console.log("added to local storage");
}
