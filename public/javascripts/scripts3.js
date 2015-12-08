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

$.ajax({
    url: '/comments'
  })
  .done(function(comments) {
    var data = { 
      memeInfo: getMemeInfo(memes, comments)
    };
    $('body').append(template(data));
  });

  $(document).ready(function() {
  var $contentArea = $('#comments');
  $('#comments').on('submit',function(event) {
    event.preventDefault();
    var data = $(this).serializeArray();

    var comment = {};

    for (var i = 0; i < data.length; i++) {
      if (data[i].name === 'message') {
        comment.name = data[i].value;
      } else if (data[i].name === 'type') {
        comment.type = data[i].value;
      }
    }

    $.ajax({url: '/comments',
      type: 'post',
      data: comment
    }).done(function(data) {
      console.log(data);

      $h2 = $('<h2>');
      $h2.text(data.message);

      $h3 = $('<h3>');
      $h3.text(data.imageId);

      $contentArea.append($h2);
      $contentArea.append($h3);
    });
    $(this)[0].reset();
  });
});
