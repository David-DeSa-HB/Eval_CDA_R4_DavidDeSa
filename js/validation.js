function showValidationPage(){
  document.title = "validation"

  const validationForm = document.getElementById("validationForm");
  const app = document.getElementById("app");
  app.className = "validation";
  app.innerHTML = "";

  const element = document.createElement("div");
  element.innerHTML = `

    <form id="validationForm" name="reserve" action="index.html" method="get" id="form-pay">
        <div class="formData">
            <label>Prénom</label>
            <br />
            <input
                class="text-control"
                type="text"
                id="first"
                name="first"
                minlength="2" />
            <br />
        </div>
        <div class="formData">
            <label>Nom</label>
            <br />
            <input class="text-control" type="text" id="last" name="last" />
            <br />
        </div>
        <div class="formData">
            <label>E-mail</label>
            <br />
            <input class="text-control" type="email" id="email" name="email" />
            <br />
        </div>
        <div class="formData">
            <label>Date de naissance</label>
            <br />
            <input
                class="text-control"
                type="date"
                id="birthdate"
                name="birthdate" />
            <br />
        </div>

        <div class="formData">
            <input
                class="checkbox-input"
                type="checkbox"
                id="checkbox1"
                required />
            <label class="checkbox2-label" for="checkbox1" required>
                <span class="checkbox-icon"></span>
                J'ai lu et accepté les conditions de vente.
            </label>
            <br />
            <input class="checkbox-input" type="checkbox" id="checkbox2" />
            <label class="checkbox2-label" for="checkbox2">
                <span class="checkbox-icon"></span>
                Je souhaite recevoir des emails commerciaux sur les nouveautés du site.
            </label>
            <br />
        </div>
        <input
            class="btn-submit"
            type="submit"
            class="button"
            value="Je paye" />
    </form>
  `
  app.appendChild(element);

  validationForm.addEventListener("submit", event => {
    const contactForm = document.getElementById('contactForm');
    const formMail = document.getElementById('formMail');
    const formSubject = document.getElementById('formSubject');
    const formContent = document.getElementById('formContent');
    event.preventDefault();
    alert("Placeholder")
    removeFromCart()});
}
