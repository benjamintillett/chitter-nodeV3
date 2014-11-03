$(document).ready(function(){
  $('.message-form').on('submit', function(e) {
    e.preventDefault();
    socket.emit('message', $('#message-content').val());
    $('#message-content').val("");
    return false;
  })
});	


  
  
    
    