var toggleButton = document.getElementById("toggleSkill");
var skillList = document.getElementById("skillList");
toggleButton.addEventListener("click", function () {
    skillList.classList.toggle("hidden");
});
