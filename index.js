
document.getElementById('vid').play();

var code = document.querySelector('.code');
    for (var i = 0; i < 100; i++) { 
      var clone = code.firstElementChild.cloneNode(true);
      clone.style.top = `${Math.random() * -100}vh`;
      clone.style.left = `${Math.random() * 100}vw`;
      clone.style.transform = `scale(${Math.random()})`;
      clone.style.animationDelay = `${Math.random() * 2}s`;
      clone.style.opacity = Math.random();
      code.appendChild(clone);
    }

    

function sendMail(){
  var params = {
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    message : document.getElementById("message").value,
  };

  const serviceID = "service_e9uds6e";
  const templateID = "template_ei6dph3";

  emailjs.send(serviceID, templateID, params)
  .then(function (response) {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log("SUCCESS!", response.status, response.text);
    openPopup()
  })
  .catch(function (error) {
    console.log("FAILED...", error);
  });
}

let popup = document.getElementById("popup");

function openPopup(name){
  popup.classList.add("show-popup")
}

function closePopup(){
  popup.classList.remove("show-popup")
}

