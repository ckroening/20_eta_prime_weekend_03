var source = $("#template").html(); 
var template = Handlebars.compile(source); 
var data = { 
  firstName: "Bob"
}; 
$('body').append(template(data));