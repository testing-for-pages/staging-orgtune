// Validation function
function validate() {
  /* Email validation */
  let mail = document.getElementById("email").value;
  if (mail == "") {
    document.getElementById("gmail").innerHTML = "*Email can't be blank*";
    return false;
  } else if (
    mail.indexOf("@") <= 0 ||
    mail.lastIndexOf(".") <= mail.indexOf("@")
  ) {
    document.getElementById("gmail").innerHTML = "*Invalid email format*";
    return false;
  } else {
    document.getElementById("gmail").innerHTML = "";
  }

  /* First name validation */
  let first = document.getElementById("fullName").value;
  if (first == "") {
    document.getElementById("check").innerHTML = "*Name can't be blank*";
    return false;
  } else {
    document.getElementById("check").innerHTML = "";
  }

  /* Company name validation */
  let company = document.getElementById("companyName").value;
  if (company == "") {
    document.getElementById("business").innerHTML =
      "*Company name can't be blank*";
    return false;
  } else {
    document.getElementById("business").innerHTML = "";
  }

  /* Role validation */
  let option = document.getElementById("role").value;
  if (option == "") {
    document.getElementById("business2").innerHTML = "*Please choose a role*";
    return false;
  } else {
    document.getElementById("business2").innerHTML = "";
  }

  /* Phone number validation */
  let num = document.getElementById("phone").value;
  if (num == "") {
    document.getElementById("check3").innerHTML =
      "*Phone number can't be blank*";
    return false;
  } else {
    document.getElementById("check3").innerHTML = "";
  }

  /* Message validation */
  let text = document.getElementById("message").value;
  if (text == "") {
    document.getElementById("check4").innerHTML = "*Message can't be blank*";
    return false;
  } else {
    document.getElementById("check4").innerHTML = "";
  }

  return true; // Return true if all validations pass
}

// Form submission event listener
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validate the form
    if (!validate()) {
      // If validation fails, do not proceed with form submission
      return;
    }

    // If validation passes, proceed with form submission
    const formData = new FormData(this);
    const jsonObject = {};
    formData.forEach((value, key) => {
      jsonObject[key] = value;
    });

    fetch("https://orgtune.com/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonObject),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("contactForm").reset(); // Reset form after successful submission
        // Display success modal
        const modal = document.getElementById("successModal");
        const span = document.getElementsByClassName("modal-content-close")[0];

        modal.style.display = "block"; // Show the modal

        // Close the modal when the user clicks on <span> (x)
        span.onclick = function () {
          modal.style.display = "none";
        };

        // Close the modal when the user clicks anywhere outside of the modal
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

//function for contactus divs to perform some action
function openInNewTab(url) {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.focus();
  }
}

document.getElementById("openAddress").addEventListener("click", function () {
  openInNewTab("https://maps.app.goo.gl/zHqstJgCkE5FP9qd9");
});

document.getElementById("openPhone").addEventListener("click", function () {
  openInNewTab("tel:+13104889221");
});

document.getElementById("openMail").addEventListener("click", function () {
  openInNewTab("mailto:info@orgtune.com");
});
