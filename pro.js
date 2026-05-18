// script.js

// EXIT BUTTON

const exitBtn = document.querySelector(".exit-btn");

exitBtn.addEventListener("click", () => {

    window.history.back();

});

// SAVE BUTTON

const form = document.getElementById("profileForm");

const saveBtn = document.querySelector(".save-btn");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    saveBtn.innerHTML = "Saved ✓";

    setTimeout(() => {

        saveBtn.innerHTML = "Save Changes";

    }, 2000);

});

// UPDATE BUTTON

const updateBtn = document.querySelector(".update-btn");

updateBtn.addEventListener("click", () => {

    updateBtn.innerHTML = "Updated ✓";

    setTimeout(() => {

        updateBtn.innerHTML = "Update Profile";

    }, 2000);

});

// EXAM MOTIVATION

const examSelect = document.getElementById("examSelect");

const heading = document.querySelector(".board-content h1");

const paragraph = document.querySelector(".board-content p");

const motivationData = {

    JEE:[
        {
            title:"Hi Future Engineer",
            text:"Every mock test takes you one step closer to IIT."
        },
        {
            title:"Future IITian Loading",
            text:"Strong concepts and consistency create ranks."
        }
    ],

    NEET:[
        {
            title:"Hi Future Doctor",
            text:"Your dedication today will save lives tomorrow."
        },
        {
            title:"Medical Dream In Progress",
            text:"Every chapter learned builds your future."
        }
    ],

    CET:[
        {
            title:"Hi Top Ranker",
            text:"Practice daily and watch your rank rise."
        },
        {
            title:"Keep Solving",
            text:"Mock tests build speed and confidence."
        }
    ],

    CUET:[
        {
            title:"Hi Future Scholar",
            text:"Consistency is the bridge to success."
        },
        {
            title:"Dream University Awaits",
            text:"Trust your preparation journey."
        }
    ]

};

let currentMessage = 0;

function updateMotivation(){

    const selectedExam = examSelect.value;

    const messages = motivationData[selectedExam];

    heading.innerHTML =
    messages[currentMessage].title;

    paragraph.innerHTML =
    messages[currentMessage].text;

}

examSelect.addEventListener("change", () => {

    currentMessage = 0;

    updateMotivation();

});

setInterval(() => {

    const selectedExam = examSelect.value;

    const messages = motivationData[selectedExam];

    currentMessage =
    (currentMessage + 1) % messages.length;

    updateMotivation();

}, 5000);

// BLOBS PARALLAX

const blobs = document.querySelectorAll(".blob");

document.addEventListener("mousemove", (e) => {

    const x = e.clientX / window.innerWidth;

    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {

        const speed = (index + 1) * 1.5;

        const moveX = (x - 0.5) * speed;

        const moveY = (y - 0.5) * speed;

        blob.style.transform =
        `translate(${moveX}px, ${moveY}px)`;

    });

});