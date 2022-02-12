const buttonAlert = document.querySelector(".buttonAlert");
const textH2 = document.querySelector(".textH2");
const input = document.querySelector("input");

buttonAlert.addEventListener("click", ( event ) => {
    event.preventDefault();
    textH2.textContent = input.value;
    alert( textH2.textContent );
})