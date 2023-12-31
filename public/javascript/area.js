$(function() {
  let shape;
  $('#choiceFinishBtn-area').click(() => {
    let shape = $('#choiceShape-area').val();

    if(shape == 's')
    {
      document.getElementById('area-init').innerHTML = "<div class='col3'><table><tr><th>邊長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>面積(cm²): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-area'>計算面積</button></div>";
      $('#countBtn-area').click(() => {
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
        $.post(
          '/area/s/' + num,
          (data) => {
            $('#result').val(data.area);
          }
        );
      })
    }
    else if(shape == 'r')
    {
      document.getElementById('area-init').innerHTML = "<div class='col3'><table><tr><th>長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>寬(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number2' class='form-control' /></div></td></tr><tr><th>面積(cm²): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-area'>計算面積</button></div>";
      $('#countBtn-area').click(() => {
        let num1 = $('#number1').val();
        let num2 = $('#number2').val();
        if(num1 == '' || num2 == '')
        {
          alert('請輸入計算值！');
          return;
        }
        let buffer1 = parseFloat(num1);
        let buffer2 = parseFloat(num2);
        if(buffer1 < 0 || buffer2 < 0)
        {
          alert('請輸入正數！');
          return;
        }
        $.post(
          '/area/r/' + num1 + '/' + num2,
          (data) => {
            $('#result').val(data.area);
          }
        );
      })
    }
    else if(shape == 'c')
    {
      document.getElementById('area-init').innerHTML = "<div class='col3'><table><tr><th>圓半徑長(cm): </th><td><div class='form-outline' style='width: 10rem;'><input step='0.01' value='0.00' type='number' id='number1' class='form-control' /></div></td></tr><tr><th>面積(cm²): </th><td><div class='form-outline' style='width: 10rem;'><input type='text' class='form-control' placeholder='等待結果' id='result'></div></td></tr></table><button type='button' class='btn btn-warning btn-lg fnchoice' id='countBtn-area'>計算面積</button></div>";
      $('#countBtn-area').click(() => {
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
        $.post(
          '/area/c/' + num,
          (data) => {
            $('#result').val(data.area);
          }
        );
      })
    }
    else
    {
      document.getElementById('area-init').innerHTML = "";
      alert('請先選擇圖形！');
      return;
    }
  });
})