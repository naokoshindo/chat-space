$(function(){
  function buildHTML(message){
    var image = message.image ? `<div><img src="${message.image}"></div>` : "";
    var html = `<div class="message">
        <div class="upper-message">
           <div class="upper-message__user-name">
              ${message.user_name}
           </div>
           <div class="upper-message__date">
              ${message.date}
           </div>
        <div class="lower-message__content">
          ${message.content}
        </div>
        <div>${image}</div>
        </div>
        </div>
        `
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log(data)
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $(".form__submit").prop("disabled", false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
      })
    .fail(function(){
      alert('error');
      $(".form__submit").prop("disabled", false);
    })
  })
});
