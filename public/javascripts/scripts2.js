var source = $("#template").html(); 
var template = Handlebars.compile(source);

var getCommentsForMeme = function(meme, comments) {
  var result = [];
  for (var i = 0; i < comments.length; i++) {
    if (comments[i].imageId === meme.imageId) {
      result.push(comments[i]);
    }
  }
  return result;
};

var getMemeInfo = function(memes, comments) {
  for (var i = 0; i < memes.length; i++) {
    memes[i].comments = getCommentsForMeme(memes[i], comments)
  }
  return memes;
};

var render = function(memes, comments) { 
  var data = { 
    memeInfo: getMemeInfo(memes, comments)
  };
  $('body').append(template(data));
};

var addComment = function (imageId) {
  //event.preventDefault();
  var comment = {
    message: $('#comment' + imageId).val(),
    imageId: imageId
  };
  $.ajax({
    url: '/comments',
    type: 'post',
    data: comment
  })
  .done(function() {
    comments.push(comment);
    render(memes, comments);
  });
};

$.ajax({
      url: '/comments'
    })
    .done(function(comments) {
      render(memes, comments)
    });



