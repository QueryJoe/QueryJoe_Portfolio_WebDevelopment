const petBox = document.getElementById('petBox');
const petImage = document.getElementById('petImage');
const messageBox = document.getElementById('messageBox');


function playSound(opt) {
  var complete = new Audio("sounds/complete.mp3");
  var pet = new Audio("sounds/pet.mp3");
  var click = new Audio("sounds/click.mp3");
  var paper = new Audio("sounds/paper.mp3");
  switch(opt) {
    case "complete":
      complete.play()
      break;
    case "pet":
      pet.play()
      break;
    case "click":
      click.play()
      break;
    case "paper":
      paper.play()
      break;
  }
}

document.querySelectorAll('.click-snd').forEach(btn => {
  btn.addEventListener('click', () => playSound("click"));
});

function updateTime() {
    const now = new Date();
    const timeElement = document.getElementById('current-time');
    timeElement.textContent = now.toLocaleTimeString();
}

// Call updateTime initially and then every second
updateTime();
setInterval(updateTime, 1000);

const holidays = {
  "2025-01-01": { name: "New Year's Day", type: "national" },
  "2025-02-14": { name: "Shab‑e‑Barat", type: "muslim" },
  "2025-02-21": { name: "Language Martyrs' Day", type: "national" },
  "2025-03-26": { name: "Independence Day", type: "national" },
  "2025-03-27": { name: "Laylat al‑Qadr", type: "muslim" },
  "2025-03-28": { name: "Jumatul Bidah", type: "muslim" },
  "2025-03-29": { name: "Eid ul‑Fitr", type: "muslim" },
  "2025-03-30": { name: "Eid ul‑Fitr (continued)", type: "muslim" },
  "2025-03-31": { name: "Eid ul‑Fitr (continued)", type: "muslim" },
  "2025-04-01": { name: "Eid ul‑Fitr (continued)", type: "muslim" },
  "2025-04-02": { name: "Eid ul‑Fitr (continued)", type: "muslim" },
  "2025-04-03": { name: "Eid ul‑Fitr (continued)", type: "muslim" },
  "2025-04-14": { name: "Pohela Boishakh (Bengali New Year)", type: "national" },
  "2025-05-01": { name: "May Day", type: "national" },
  "2025-05-11": { name: "Buddha Purnima", type: "buddhist" },
  "2025-06-05": { name: "Eid al‑Adha", type: "muslim" },
  "2025-06-06": { name: "Eid al‑Adha (continued)", type: "muslim" },
  "2025-06-07": { name: "Eid al‑Adha (continued)", type: "muslim" },
  "2025-06-08": { name: "Eid al‑Adha (continued)", type: "muslim" },
  "2025-06-09": { name: "Eid al‑Adha (continued)", type: "muslim" },
  "2025-06-10": { name: "Eid al‑Adha (continued)", type: "muslim" },
  "2025-07-06": { name: "Ashura (10 Muharram)", type: "muslim" },
  "2025-08-05": { name: "July Mass Uprising Day", type: "national" },
  "2025-08-16": { name: "Krishna Janmashtami", type: "hindu" },
  "2025-09-05": { name: "Eid‑e‑Milad un‑Nabi", type: "muslim" },
  "2025-09-29": { name: "Durga Puja Holiday", type: "hindu" },
  "2025-09-30": { name: "Durga Puja (Ashtami)", type: "hindu" },
  "2025-10-01": { name: "Mahanabami (Durga Puja)", type: "hindu" },
  "2025-10-02": { name: "Bijoya Dashami (Durga Puja)", type: "hindu" },
  "2025-12-16": { name: "Victory Day", type: "national" },
  "2025-12-25": { name: "Christmas Day", type: "national" }
};


// List of messages and scores
const messages = [
  { text: "I'm really sorry pookie wookie", score: 1 }, //sad
  { text: "You mean a lot for me", score: 2 }, //bouqent
  { text: "I really liked how you texted me first during constipation", score: 9}, //tolit
  { text: "I want to give you a lot of things", score: 2 },
  { text: "I want to hug you and kiss you every time i see you", score: 3 }, //hug
  { text: "forgive me for hurting you", score: 1 },
  { text: "I can be myself to the fullest when Im with you", score: 4 }, //anxiety
  { text: "Dont forget me when you are rich ", score: 5}, //rich
  { text: "I want to see what is your panty colour", score: 6}, //panty
  { text: "You are stronger than a construction man pookie", score: 8}, //mascle
  { text: "your booty wooty holes are tight", score: 11}, //butt
  { text: "I want to sleep with you one day like in a sleepover", score: 12}, //sleep
  { text: "I would have drawn you several times by now", score: 13}, //art
  { text: "I get really confused when you are angry...", score: 4},
  { text: "I dont like it when you are mad with me", score: 14},
  { text: "we havent done the firework-watching cannon event of all friendships yet", score: 10 }, //firewokr
];

// Map scores to image filenames
const petImages = {
  1: "images/cat_sad.jpg",
  2: "images/cat_with_bouqet.jpg",
  3: "images/cat_hug.jpg",
  4: "images/cat_anxiety.jpg",
  5: "images/cat_rich.jpg",
  6: "images/cat_panty.jpg",
  8: "images/cat_mascular.jpg",
  9: "images/cat_bathroom.jpg",
  10: "images/cat_firework.jpg",
  11: "images/cat_showbutt.jpg",
  12: "images/cat_sleep.jpg",
  13: "images/cat_artist.jpg",
  14: "images/cat_angry.jpg"
};

function showMessageModal() {
  playSound("paper");
  document.getElementById("paperModal").classList.remove("hidden");
}

function hideMessageModal() {
  playSound("paper");
  document.getElementById("paperModal").classList.add("hidden");
}

function showAlertModal(message) {
  document.getElementById('alert-text').textContent = message;
  document.getElementById('alert-modal').classList.remove('hidden');
}

function closeAlertModal() {
  document.getElementById('alert-modal').classList.add('hidden');
}


petBox.addEventListener('click', () => {
  playSound("pet");
  // Add bounce effect
  petImage.classList.add('bounce');

  // Remove bounce effect after animation completes
  setTimeout(() => {
    petImage.classList.remove('bounce');
  }, 300);

  // Fade out message
  messageBox.style.opacity = 0;

  setTimeout(() => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    messageBox.textContent = random.text;

    // Change the pet image based on score
    const newImage = petImages[random.score] || 'pet_default.png';
    petImage.src = newImage;

    // Fade in message
    messageBox.style.opacity = 1;
  }, 400);
});

function setStopwatchButtons(running) {
  document.getElementById('start-btn').disabled = running;
  document.getElementById('pause-btn').disabled = !running;
  document.getElementById('reset-btn').disabled = !running;
}
function setPomodoroButtons(running) {
  document.getElementById('pomodoro-pause-btn').disabled = !running;
  document.getElementById('pomodoro-reset-btn').disabled = !running;
}

function showTab(tabId, tab_btn) {
  document.querySelectorAll('.tab-content').forEach( tab => {tab.classList.add('hidden')});
  document.querySelectorAll('.tab-btn').forEach(btn => {btn.classList.remove('active')});
  document.getElementById(tabId).classList.remove('hidden');
  document.getElementById(tab_btn).classList.add('active');
}

let pomodoroTime = 0;
let pomodoroInterval = null;
let onBreak = false;
let pause = false;
let pomodoroSessionLength = 0;

function updatePomodoroStatus() {
   const statusEl = document.getElementById('pomodoro-status');
  const statusText = document.getElementById('pomodoro-status-text');
  const statusImg = document.getElementById('pomodoro-status-img');
  if (onBreak) {
    statusText.textContent = "Break Time";
    statusEl.classList.add('break');
    statusImg.src = "images/cat_sleep.jpg"; // Use your break image
    statusImg.alt = "Break";
  } else {
    statusText.textContent = "Study Session";
    statusEl.classList.remove('break');
    statusImg.src = "images/cat_study.jpg"; // Use your study image
    statusImg.alt = "Study";
  }
}

function saveStopwatchState() {
  localStorage.setItem('stopwatchTime', stopwatchTime);
  localStorage.setItem('stopwatchRunning', !!stopwatchInterval);
}

function loadStopwatchState() {
  const savedTime = localStorage.getItem('stopwatchTime');
  const savedRunning = localStorage.getItem('stopwatchRunning') === 'true';
  stopwatchTime = savedTime ? parseInt(savedTime) : 0;
  updateStopwatchDisplay();
  setStopwatchButtons(savedRunning);
  if (savedRunning) startStopwatch();
}

function savePomodoroState() {
  localStorage.setItem('pomodoroTime', pomodoroTime);
  localStorage.setItem('pomodoroRunning', !!pomodoroInterval);
  localStorage.setItem('pomodoroOnBreak', onBreak);
  localStorage.setItem('pomodoroSessionLength', pomodoroSessionLength);
}

function loadPomodoroState() {
  const savedTime = localStorage.getItem('pomodoroTime');
  const savedRunning = localStorage.getItem('pomodoroRunning') === 'true';
  const savedOnBreak = localStorage.getItem('pomodoroOnBreak') === 'true';
  const savedSessionLength = localStorage.getItem('pomodoroSessionLength');
  pomodoroTime = savedTime ? parseInt(savedTime) : pomodoroSessionLength * 60;
  onBreak = savedOnBreak;
  pomodoroSessionLength = savedSessionLength ? parseInt(savedSessionLength) : 25;
  updatePomodoroDisplay();
  setPomodoroButtons(savedRunning);
  if (savedRunning) startPomodoro(pomodoroSessionLength);
}

const pomodoroOptionBtns = document.querySelectorAll('.pomodoro-optn');

// Disable all pomodoro option buttons except the one clicked
pomodoroOptionBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    pomodoroOptionBtns.forEach(b => b.disabled = true);
    this.disabled = false; // Keep the clicked button enabled
  });
});

function startPomodoro(min) {
  pomodoroSessionLength = min || pomodoroSessionLength;
  pomodoroTime = pomodoroTime || pomodoroSessionLength * 60;
   updatePomodoroStatus();
  if (pomodoroInterval) return;

  pomodoroInterval = setInterval(() => {
    if (pomodoroTime > 0) {
      pomodoroTime--;
      updatePomodoroDisplay();
      savePomodoroState();
    } else {
      playSound("complete");
      showAlertModal("Congratulations! You have finished your session. Now consider taking a break!");
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
      onBreak = !onBreak;
      pomodoroTime = onBreak ? 5 * 60 : pomodoroSessionLength * 60;
      updatePomodoroStatus();
      savePomodoroState();

      startPomodoro(pomodoroSessionLength);
    }
  }, 1000);
  setPomodoroButtons(true);
  savePomodoroState();
}

function resetPomodoro() {
  if (pause){
    pause = false;
    document.getElementById('pomodoro-resume-btn').classList.add('hidden');
    document.getElementById('pomodoro-pause-btn').classList.remove('hidden');
  }
  clearInterval(pomodoroInterval);
  pomodoroInterval = null;
  onBreak = false;
  pomodoroTime = 0;
  updatePomodoroDisplay();
  updatePomodoroStatus();
  setPomodoroButtons(false);
  savePomodoroState();

  pomodoroOptionBtns.forEach(b => b.disabled = false);
}

function pausePomodoro(){
  pause = true;
  clearInterval(pomodoroInterval);
  pomodoroInterval = null; 
  document.getElementById('pomodoro-pause-btn').classList.add('hidden');
  document.getElementById('pomodoro-resume-btn').classList.remove('hidden');
  savePomodoroState();
}

function resumePomodoro(){
  pause = false;
  document.getElementById('pomodoro-resume-btn').classList.add('hidden');
  document.getElementById('pomodoro-pause-btn').classList.remove('hidden');

  pomodoroInterval = setInterval(() => {
    if (pomodoroTime > 0) {
      pomodoroTime--;
      updatePomodoroDisplay();
    } else {
      clearInterval(pomodoroInterval);
      pomodoroInterval = null;
      onBreak = !onBreak;
      pomodoroTime = onBreak ? 5 * 60 : min * 60; // toggle between break & session
      document.getElementById('pomodoroStatus').textContent = onBreak ? "Break!" : "Session";
      startPomodoro();
    }
  }, 1000);
}

function updatePomodoroDisplay() {
  const minutes = String(Math.floor(pomodoroTime / 60)).padStart(2, '0');
  const seconds = String(pomodoroTime % 60).padStart(2, '0');
  document.getElementById('pomodoroDisplay').textContent = `${minutes}:${seconds}`;
}

window.addEventListener('DOMContentLoaded', () => {
  loadStopwatchState();
  loadPomodoroState();
});

/////////////////////////////////////////////////


let stopwatchTime = 0;
let stopwatchInterval = null;
let pause_stopwatch = false;


function startStopwatch() {
  if (stopwatchInterval) return;
  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatchDisplay();
    saveStopwatchState();
  }, 1000);
  setStopwatchButtons(true);
  saveStopwatchState();
}

function pauseStopwatch() {
  pause_stopwatch = true
  document.getElementById('pause-btn').classList.add('hidden');
  document.getElementById('resume-btn').classList.remove('hidden');

  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  saveStopwatchState();
}

function resumeStopwatch(){
  document.getElementById('resume-btn').classList.add('hidden');
  document.getElementById('pause-btn').classList.remove('hidden');

  stopwatchInterval = setInterval(() => {
    stopwatchTime++;
    updateStopwatchDisplay();
  }, 1000);
}

function resetStopwatch() {
  if (pause_stopwatch) {
    pause_stopwatch = false;
    document.getElementById('resume-btn').classList.add('hidden');
    document.getElementById('pause-btn').classList.remove('hidden');
  }
  clearInterval(stopwatchInterval);
  stopwatchInterval = null;
  stopwatchTime = 0;
  updateStopwatchDisplay();
  setStopwatchButtons(false);
  saveStopwatchState();
}

function updateStopwatchDisplay() {
  const hours = String(Math.floor(stopwatchTime / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((stopwatchTime % 3600) / 60)).padStart(2, '0');
  const seconds = String(stopwatchTime % 60).padStart(2, '0');
  document.getElementById('stopwatchDisplay').textContent = `${hours}:${minutes}:${seconds}`;
}

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthYearElem = document.getElementById("month-year");
const calendarBody = document.getElementById("calendar-body");
const yearSelect = document.getElementById("yearSelect");

function generateCalendar(month, year) {
  calendarBody.innerHTML = "";
  monthYearElem.textContent = `${monthNames[month]} ${year}`;
  
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();
  let date = 1;

  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      let cell = document.createElement("td");

      if (i === 0 && j < firstDay) {
        cell.innerHTML = "";
      } else if (date > daysInMonth) {
        break;
      } else {
        let dateStr = `${year}-${(month+1).toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`;
        cell.innerHTML = `<div class="date">${date}</div>`;

        if (holidays[dateStr]) {
          const { name, type } = holidays[dateStr];
          let colorClass = type === 'muslim' ? 'holiday-muslim'
                        : type === 'hindu' ? 'holiday-hindu'
                        : type === 'buddhist' ? 'holiday-buddhist'
                        : 'holiday-national';
          cell.classList.add(colorClass);
          cell.innerHTML += `<div class="holiday-name">${name}</div>`;
        }

        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
    if (date > daysInMonth) break;
  }
}


function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
}

function changeYear() {
  currentYear = parseInt(yearSelect.value);
  generateCalendar(currentMonth, currentYear);
}

function populateYears() {
  for (let y = 2020; y <= 2030; y++) {
    let option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    if (y === currentYear) option.selected = true;
    yearSelect.appendChild(option);
  }
}

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo;

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "✏️";
    editBtn.onclick = () => {
      const updated = prompt("Edit your task:", todo);
      if (updated !== null && updated.trim() !== "") {
        todos[index] = updated.trim();
        saveToLocalStorage();
        renderTodos();
      }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "🗑️";
    deleteBtn.onclick = () => {
      todos.splice(index, 1);
      saveToLocalStorage();
      renderTodos();
    };

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
  });
}

addBtn.onclick = () => {
  const text = input.value.trim();
  if (text !== "") {
    todos.push(text);
    input.value = "";
    saveToLocalStorage();
    renderTodos();
  }
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBtn.click();
});

renderTodos();


populateYears();
generateCalendar(currentMonth, currentYear);

setStopwatchButtons(false);
setPomodoroButtons(false);
updatePomodoroDisplay();
updateStopwatchDisplay();

