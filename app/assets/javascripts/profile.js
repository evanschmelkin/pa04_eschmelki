//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

console.log("hello");
function showDateTime() {
    let now = new Date();
    let dateTime = now.toLocaleString();
    document.getElementById('dateTime').innerHTML = dateTime;
    setTimeout(showDateTime, 1000);
    document.getElementById("dateDisplay").innerText = "Hello World";
}

//this attempt to use javascript came from https://medium.com/@rjaloudi/javascript-a-basic-example-followed-by-10-cool-program-snippets-to-elevate-your-web-projects-4e5bca40046e
//i had to modify it a lot to work on rails