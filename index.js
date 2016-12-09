$(document).ready(function(){
  $('input[type="checkbox"]').click(function(){
    var value = $(this).prop('value');
    $('#closed' + value).toggle('.hide');
    $('#closed' + value + 'a').toggle('.hide');
  });

  // add break
  $('#addCol').click(function () {
    $('.hours').append('<td class="breakCol">We are away from  <input type="time"> to <input type="time"></td>');
    $('#addCol').hide();
    $('#removeCol').show();
  });

  // remove break
  $('#removeCol').click(function () {
    $('.breakCol').remove();
    $('#removeCol').hide();
    $('#addCol').show();
  });
});
