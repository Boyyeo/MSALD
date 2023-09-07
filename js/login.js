
console.log("data:", DATA["url"]);
const url = DATA["url"];
var login_button = document.getElementById("login_button");

login_button.addEventListener("click", (e) => {


  var input_id = document.getElementById("id_input");
  const id = input_id.value;
  const url1 = `${url}?userid=${id}`;
  console.log(url1);

  if (id) {
    fetch(url1)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["status"]);
        if (data["status"] == "Pass") {
          localStorage.setItem("userid", id);
          window.location.href = "test.html";
        } else alert("Student ID incorrect");
      });

    //window.location.href = "mainpage.html";
  } else {
    alert("Student ID should not be empty");
  }

});