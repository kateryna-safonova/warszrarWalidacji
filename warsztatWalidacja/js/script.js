let newsletttorForm = document.getElementById("newsForm");
let agree3Chx = document.getElementById("agree3");

const validate = (event) => {
  let txtNode = document.getElementById("name");
  let txtEmail = document.getElementById("email");
  let agreeone = document.getElementById("agree1");
  let errors = document.getElementById("errors");

  errors.innerHTML = "";

  if (txtNode.value.trim() === "") {
    let liError = document.createElement("li");
    liError.innerText = 'Wpisz imie i nazwisko';
    errors.appendChild(liError);
  }

  if (txtEmail.value.trim() === "") {
    let liError = document.createElement("li");
    liError.innerText = 'Wpisz Adres e-mail';
    errors.appendChild(liError);
  }

  if (!txtEmail.value.includes("@")) {
    let liError = document.createElement("li");
    liError.innerText = 'Adres e-mail musi zawierać @';
    errors.appendChild(liError);
  }

  if (!agreeone.checked) {
    let liError = document.createElement("li");
    liError.innerText = 'Nie wyraziłeś zgode 1';
    errors.appendChild(liError);
  }
  if (errors.children.length > 0){
    event.preventDefault();
  }

};

const allAgree = (event) => {
  let agreeone = document.getElementById("agree1");
  let agreetwo = document.getElementById("agree2");

  agreeone.checked = event.target.checked;
  agreetwo.checked = event.target.checked;

  agreeone.disabled = event.target.checked;
  agreetwo.disabled = event.target.checked;
};

newsletttorForm.addEventListener("submit", validate);

agree3Chx.addEventListener("change", allAgree);
