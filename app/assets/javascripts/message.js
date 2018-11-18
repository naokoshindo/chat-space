$(function(){
  function buildHTML(message){
    var html = `<div class="message">
        <div class="upper-message">
           <div class="upper-message__user-name">
              ${message.user_name}
           </div>
           <div class="upper-message__date">
              ${message.created_at}
           </div>
        <div class="lower-message__content">
          ${message.content}
        </div>
        <div><img width= 200 height= 200 src="${message.image}"></div>
        </div>
        </div>
        `
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    // console.log(formData)
    // console.log(url)
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
      // console.log(html)
      $('.messages').append(html)
      $('.form__message').val('')
      $(".form__submit").prop("disabled", false);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
    .fail(function(){
      alert('error');
    })
  })
});
