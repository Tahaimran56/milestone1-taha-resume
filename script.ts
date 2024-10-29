document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById(
    "toggleSkill"
  ) as HTMLButtonElement;
  const skillList = document.getElementById("skillList") as HTMLDivElement;

  toggleButton.addEventListener("click", () => {
    skillList.classList.toggle("hidden");
  });
});
