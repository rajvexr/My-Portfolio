let menu = document.querySelector(".menu-icon");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".btn-send");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
      console.log(name.value);
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function emptyerror() {
  swal({
    title: "Your forgot something?",
    text: "Fill the Required Fields",
    icon: "error",
  });
}

function success() {
  swal({
    title: "Good job!",
    text: "Message has been sent",
    icon: "success",
    button: "Aww yiss!",
  });
}

function sendmail(name, email, msg) {
  emailjs.send("service_jqogwwh", "template_tgaylun", {
    to_name: email,
    from_name: name,
    message: msg,
  });
}
