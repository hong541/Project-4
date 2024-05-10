// function SendMail(e) {
// let params = {
// from_name: document.getElementById("name").value,
// email_id: document.getElementById("email").value,
// message: document.getElementById("message").value,
// };
// emailjs.send("service_btdqbcf", "template_vqlenpa", params).then((res) => {
// alert("Succes! " + res.status);
// });
// }

const btn = document.getElementById("button");

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    let params = {
      from_name: document.getElementById("name").value,
      email_id: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_btdqbcf";
    const templateID = "template_vqlenpa";

    emailjs.send(serviceID, templateID, params).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  });
