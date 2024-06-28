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
// windowLoad
window.addEventListener("DOMContentLoaded", loadItems);

const deleteButton = document.querySelector(".delete-button");
// *** FUNCTION ***
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

 

  if (value && !editFlag) {
    // Add to Local Storage
    createListItem(id, value);
    displayAlert("List Telah Ditambahkan", "success");
    addToLocalStorage(id, value);
    //  Back to Default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = value;
    displayAlert("Item berhasil diubah!", "success");
    editLocalStorage(editId, value);
    setBackToDefault();
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
    if (items.length > 0) {
      displayAlert("Item berhasil dihapus!", "success");
      container.classList.remove("show-container");
    }
    item.remove();
    localStorage.removeItem("list");
    setBackToDefault();
  });
}

// edit function
function editItem(e) {
  const itemEdit = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = itemEdit.dataset.id;
  // console.log(editId)
  submit.textContent = "Edit";
}

// delete function
function deleteItem(e) {
  const itemDelete = e.currentTarget.parentElement.parentElement;
  itemDelete.remove();
  const id = itemDelete.dataset.id;
  const element = list.children.length;
  console.log(id);
  if (element == 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Berhasil Dihapus!", "success");
  removeFromLocalStorage(id);
  setBackToDefault();
  // remove from local storage
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
  const data = { id, value };
  let keys = getLocalStorage();
  keys.push(data);
  localStorage.setItem("list", JSON.stringify(keys));
}
function removeFromLocalStorage(id) {
  let keys = getLocalStorage();
  keys = keys.filter((key) => {
    if (key.id !== id) {
      return key;
    }
  });
  localStorage.setItem("list", JSON.stringify(keys));
}
function editLocalStorage(id, value) {
  let keys = getLocalStorage();
  keys = keys.map((key) => {
    if (key.id == id) {
      key.value = value;
    }
    return key;
  });
  localStorage.setItem("list", JSON.stringify(keys));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// *** SETUP ITEMS ***
function loadItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
  }
}

function createListItem(id, value) {
  
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
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.appendChild(element);
  container.classList.add("show-container");
}
