$(function() {
  $('#choiceFinishBtn-volume').click(() => {
    let choice = $('#choiceShape-volume').val();

    if(choice != '1' && choice != '2' && choice != '3')
    {
      alert('請先選擇圖形！');
      return;
    }
  });
})