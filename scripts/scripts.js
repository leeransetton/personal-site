// function loadJSON(callback) {   
//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', '../data/data.json', true);
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }

//  function init() {
//  loadJSON(function(response) {
//     var actual_JSON = JSON.parse(response);
//     document.getElementById('skill1-star1').className += " fa fa-star";
//  });
// }


function init() {
    document.getElementById('logo').style.height = window.innerHeight + "px";
    document.getElementById('header-text').style.height = (window.innerHeight / 2) + "px";
} 