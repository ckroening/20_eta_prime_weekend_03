var source = $("#template").html(); 
var template = Handlebars.compile(source); 
var data = { 
  memes: memes
}; 
$('body').append(template(data));