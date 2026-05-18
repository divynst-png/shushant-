// USER DATA

const userData = {
  firstName: "Ary",
  grade: "11",
  exam: "JEE Advanced"
};

// SUBJECT DATA

const subjects = [

  {
    title: "📐 Mathematics",
    meta: "Calculus, Algebra, Vectors, Coordinate Geometry and chapterwise tests."
  },

  {
    title: "⚛️ Physics",
    meta: "Mechanics, Thermodynamics, Waves and conceptual mock tests."
  },

  {
    title: "🧪 Chemistry",
    meta: "Organic reactions, Physical Chemistry numericals and NCERT drills."
  },

  {
    title: "📚 PYQs",
    meta: "Solve JEE Main & Advanced previous year questions with timer mode."
  },

  {
    title: "📝 Full Mock Tests",
    meta: "Complete syllabus mock exams with rank prediction and analytics."
  },

  {
    title: "📒 Revision Tests",
    meta: "Quick revision quizzes, formulas and important concepts."
  }

];

// DOM ELEMENTS

const greeting = document.getElementById("user-greeting");
const target = document.getElementById("user-target");

const subjectGrid = document.getElementById("subject-grid");

const searchInput = document.getElementById("search-input");

const searchBtn = document.getElementById("btn-search");

const logoutBtn = document.getElementById("btn-logout");

// DYNAMIC USER INFO

greeting.innerHTML = `
  Welcome, <strong>${userData.firstName}</strong> ✨
`;

target.innerHTML = `
  Class ${userData.grade} | Target: ${userData.exam}
`;

// CREATE SUBJECT CARDS

function renderCards(data){

  subjectGrid.innerHTML = "";

  data.forEach(subject => {

    const card = document.createElement("div");

    card.classList.add("subject-card");

    card.innerHTML = `

      <div class="card-title">
        ${subject.title}
      </div>

      <div class="card-meta">
        ${subject.meta}
      </div>

      <button class="start-btn">
        Take Mock Test
      </button>

    `;

    subjectGrid.appendChild(card);

  });

}

// INITIAL RENDER

renderCards(subjects);

// SEARCH FUNCTION

function searchSubjects(){

  const value = searchInput.value.toLowerCase();

  const filtered = subjects.filter(subject => {

    return (
      subject.title.toLowerCase().includes(value) ||
      subject.meta.toLowerCase().includes(value)
    );

  });

  renderCards(filtered);

}

// SEARCH EVENTS

searchBtn.addEventListener("click", searchSubjects);

searchInput.addEventListener("input", searchSubjects);

// ENTER KEY

searchInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){

    searchSubjects();

  }

});

// LOGOUT BUTTON

logoutBtn.addEventListener("click", () => {

  alert("Logging out...");

  // redirect example
  // window.location.href = "login.html";

});