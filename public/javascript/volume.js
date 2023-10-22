$(function() {
  let shape;
  $('#choiceFinishBtn-volume').click(() => {
    let shape = $('#choiceShape-volume').val();
    if(shape == 's')
    {
      document.getElementById('volume-init').innerHTML = "<div class='col3'><table><tr><th>邊長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>體積(cm³): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-volume'>計算體積</button></div>";
      $('#countBtn-volume').click(() => {
        let num = $('#number1').val();
        if(num == '')
        {
          alert('請輸入計算值！');
          return;
        }
        let buffer = parseFloat(num);
        if(buffer < 0)
        {
          alert('請輸入正數！');
          return;
        }
        $.ajax({
          url: '/volume/s',
          method: 'POST',
          data: {num: num},
          datatype: 'json',
          success: (data) => {
            $('#result').val(data.area);
          }
        });
      })
    }
    else if(shape == 'r')
    {
      document.getElementById('volume-init').innerHTML = "<div class='col3'><table><tr><th>長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>寬(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number2' class='form-control' /></div></td></tr><tr><th>高(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number2' class='form-control' /></div></td></tr><tr><th>體積(cm³): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-volume'>計算體積</button></div>";
    }
    else if(shape == 'c')
    {
      document.getElementById('volume-init').innerHTML = "<div class='col3'><table><tr><th>圓半徑長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>體積(cm³): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-volume'>計算體積</button></div>";
    }
    else
    {
      document.getElementById('volume-init').innerHTML = "";
      alert('請先選擇圖形！');
      return;
    }
  });
})