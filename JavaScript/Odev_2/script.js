// DOM elementlerini seçme
const taskInput = document.getElementById("task");
const addButton = document.getElementById("liveToastBtn");
const taskList = document.getElementById("list");

// Local Storage'dan verileri alma
function getTasksFromLocalStorage() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    return JSON.parse(tasks);
  } else {
    return [];
  }
}

// Yapılacakları Local Storage'a kaydetme
function saveTasksToLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Yeni bir yapılacak öğesi oluşturma
function createTaskElement(task) {
  const li = document.createElement("li");
  li.innerText = task;

  // Silme düğmesi oluşturma
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close");
  closeBtn.innerHTML = "&times;";

  // Silme düğmesine tıklanınca yapılacakları listeden kaldırma
  closeBtn.addEventListener("click", function () {
    const listItem = this.parentElement;
    listItem.remove();
    updateLocalStorage();
  });

  li.appendChild(closeBtn);
  taskList.appendChild(li);

  // Yapılacakları işaretlemek ve stil uygulamak için click event'i ekleme
  li.addEventListener("click", function () {
    this.classList.toggle("checked");
    updateLocalStorage();
  });
}

// Yeni yapılacak öğesi ekleme
function newElement() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showErrorToast();
    return;
  }

  createTaskElement(taskText);
  taskInput.value = "";
  showSuccessToast();

  updateLocalStorage();
}

// Başlangıçta yapılacaklar listesini yükleme
document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});

// Local Storage'daki verileri sayfaya yükleme
function loadTasks() {
  taskList.innerHTML = ""; // Önceki liste içeriğini temizle

  const tasks = getTasksFromLocalStorage();
  tasks.forEach(function (task) {
    createTaskElement(task.text);
    if (task.completed) {
      const listItem = taskList.lastChild;
      listItem.classList.add("checked");
    }
  });
}

// Local Storage'ı güncelleme
function updateLocalStorage() {
  const tasks = [];
  const taskElements = taskList.getElementsByTagName("li");

  for (let i = 0; i < taskElements.length; i++) {
    const taskText = taskElements[i].innerText;
    const completed = taskElements[i].classList.contains("checked");
    tasks.push({ text: taskText, completed: completed });
  }

  saveTasksToLocalStorage(tasks);
}

// Bootstrap Toast bildirimlerini gösterme
function showToast(selector) {
  const toast = document.querySelector(selector);
  const bootstrapToast = new bootstrap.Toast(toast);
  bootstrapToast.show();
}

function showSuccessToast() {
  showToast("#liveToast.success");
}

function showErrorToast() {
  showToast("#liveToast.error");
}
