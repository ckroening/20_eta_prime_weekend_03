var source = $("#template").html(); 
var template = Handlebars.compile(source); 
var data = { 
  memes: memes
};
$('body').append(template(data));

$.ajax({
       url: 'data/comments.jade'
   })
   .done(function(json) {
       console.log(json)
       var object = JSON.parse(json);
       console.log(object);
   });