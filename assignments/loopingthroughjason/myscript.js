console.log("Hello world.")

fetch('my_data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

var mainContainer = document.getElementById("data_holder");

function appendData(data) {
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = '<img src=" ' + data[i].filename + '" class="galleryphoto">' + data[i].catname;
    mainContainer.appendChild(div);
  }
}
