(function(){
  'use strict';

  //
  // index.htmlからId Elementの取得
  //
  var red_1 = document.getElementById('red_1');
  var red_2 = document.getElementById('red_2');
  var red_3 = document.getElementById('red_3');
  var red_4 = document.getElementById('red_4');
  var red = document.getElementById('red');
  var red_section = document.getElementsByClassName('red_section');

  var blue_1 = document.getElementById('blue_1');
  var blue_2 = document.getElementById('blue_2');
  var blue_3 = document.getElementById('blue_3');
  var blue_4 = document.getElementById('blue_4');
  var blue = document.getElementById('blue');
  var blue_section = document.getElementsByClassName('blue_section');

  var mass_1_1 = document.getElementById('mass_1_1');
  var mass_1_2 = document.getElementById('mass_1_2');
  var mass_1_3 = document.getElementById('mass_1_3');
  var mass_2_1 = document.getElementById('mass_2_1');
  var mass_2_2 = document.getElementById('mass_2_2');
  var mass_2_3 = document.getElementById('mass_2_3');
  var mass_3_1 = document.getElementById('mass_3_1');
  var mass_3_2 = document.getElementById('mass_3_2');
  var mass_3_3 = document.getElementById('mass_3_3');

  var counter = document.getElementById('counter');

  var red_mass_class = document.getElementsByClassName('red_mass_class');
  var blue_mass_class = document.getElementsByClassName('blue_mass_class');
  var mass_all = document.getElementsByClassName('mass');

  //
  // 関数定義
  //

  //
  //
  // function: red_click_action
  // red-btnをクリックした時の動作を記述.
  // 他のボタンが選択されている, またはボタンが何も選択されていない時の処理.
  //
  //
  function red_click_action (item) {


    //
    // red_mass_classをclassとしてもつものに対して, selectedを外す
    //
    var array = Array.prototype.slice.call(red_mass_class); //配列に変換
    for(var key in array){
        array[key].classList.remove("selected");
    }

    item.classList.add("selected");

  }

  //
  //
  // red_return_number
  // それぞれのidに対して, 適当な数を返す.
  //
  //
  function red_return_number (item) {
    if (item === red_1){
      return 1;
    }
    else if (item === red_2){
      return 2;
    }
    else if (item === red_3){
      return 3;
    }
    else if(item === red_4){
      return 4;
    }
  }

  //
  //
  // blue_click_action
  // blue-btnをクリックした時の動作を記述.
  // 他のボタンが選択されている, またはボタンが何も選択されていない時の処理.
  //
  //
  function blue_click_action (item) {


    //
    // blue_mass_classをclassとしてもつものに対して, selectedを外す
    //
    var array = Array.prototype.slice.call(blue_mass_class); //配列に変換
    for(var key in array){
        array[key].classList.remove("selected");
    }

    item.classList.add("selected");

  }

  //
  //
  // blue_return_number
  // それぞれのidに対して, 適当な数を返す.
  //
  //
  function blue_return_number (item) {
    if (item === blue_1){
      return 1;
    }
    else if (item === blue_2){
      return 2;
    }
    else if (item === blue_3){
      return 3;
    }
    else if(item === blue_4){
      return 4;
    }
  }

  //
  //
  // end_red_turn
  // マスに数字を加えたところで, redのターンを終了し, blueのターンに制御を渡す.
  //
  //
  function end_red_turn (){
    red_1.classList.remove("selected");
    red_2.classList.remove("selected");
    red_3.classList.remove("selected");
    red_4.classList.remove("selected");
    red.classList.add("disabled");
    blue.classList.remove("disabled");
  }

  //
  //
  // end_blue_turn
  // マスに数字を加えたところで, blueのターンを終了し, redのターンに制御を渡す.
  //
  //
  function end_blue_turn (){
    blue_1.classList.remove("selected");
    blue_2.classList.remove("selected");
    blue_3.classList.remove("selected");
    blue_4.classList.remove("selected");
    blue.classList.add("disabled");
    red.classList.remove("disabled");
  }

  function is_larger(less, more){
    if (less < more){
      console.log(less);
      console.log(more);
      console.log(true);
      return true;
    }
    else{
      console.log(less);
      console.log(more);
      console.log(false);
      return false;
    }
  }
  //
  //
  // enter_number
  // マスに数字をenterする.
  //
  //
  function enter_number (mass, color){

    if (color === red_1 || color === red_2 || color === red_3 || color === red_4){
      // if (is_larger(mass.textContent, red_return_number(color))){
        mass.classList.add("char_red");
        mass.classList.remove("char_blue");
        color.classList.add("disabled");
        mass.textContent = red_return_number(color);
      // }
      // else{
        // return ;
      // }
    }
    else if (color === blue_1 || color === blue_2 || color === blue_3 || color === blue_4){
      mass.classList.add("char_blue");
      mass.classList.remove("char_red");
      color.classList.add("disabled");
      mass.textContent = blue_return_number(color);
    }
  }

  //
  //
  // btn_click
  // ボタンをクリックした時の動作を記述.
  //
  //
  function btn_click (btn){
    if (btn === red_1 || btn === red_2 || btn === red_3 || btn === red_4){
      if (red.classList.contains("disabled")){
        return ;
      }
      else {
        if (btn.classList.contains("selected")){
          btn.classList.remove("selected"); // すでに選択されているボタンが再び選択されたとき, 選択を解除する.
        }else{
          red_click_action(btn); // 他のボタンが選択されている, またはボタンが何も選択されていない時の処理.
        }
      }
    }
    else if (btn === blue_1 || btn === blue_2 || btn === blue_3 || btn === blue_4){
      if (blue.classList.contains("disabled")){
        return ;
      }
      else {
        if (btn.classList.contains("selected")){
          btn.classList.remove("selected"); // すでに選択されているボタンが再び選択されたとき, 選択を解除する.
        }else{
          blue_click_action(btn); // 他のボタンが選択されている, またはボタンが何も選択されていない時の処理.
        }
      }
    }
  }

  //
  //
  // function: mass_click
  // マスをクリックしたときの動作を記述.
  //
  //
  function mass_click(mass){
    if (red_1.classList.contains("selected") || red_2.classList.contains("selected") || red_3.classList.contains("selected") || red_4.classList.contains("selected")){
      if (red_1.classList.contains("selected")){ // すでにred-btnが選択されているときに, マスをクリックしたときの動作.
        enter_number(mass, red_1);
      }
      else if (red_2.classList.contains("selected")){
        enter_number(mass, red_2);
      }
      else if (red_3.classList.contains("selected")){
        enter_number(mass, red_3);
      }
      else if (red_4.classList.contains("selected")){
        enter_number(mass, red_4);
      }
      end_red_turn();
    }
    else if(blue_1.classList.contains("selected") || blue_2.classList.contains("selected") || blue_3.classList.contains("selected") || blue_4.classList.contains("selected")){
      if (blue_1.classList.contains("selected")){ // すでにblue-btnが選択されているときに, マスをクリックしたときの動作.
        enter_number(mass, blue_1);
      }
      else if (blue_2.classList.contains("selected")){
        enter_number(mass, blue_2);
      }
      else if (blue_3.classList.contains("selected")){
        enter_number(mass, blue_3);
      }
      else if (blue_4.classList.contains("selected")){
        enter_number(mass, blue_4);
      }
      end_blue_turn();
    }
    else {
      if(mass.classList.contains("selected")){ // すでに選択されているマスを再びクリックしたときは, そのマスの選択を解除する.
        mass.classList.remove("selected");
      }
      else{ // 他のマスが選択されている, またはマスが選択されていない場合の処理. 一旦全てのマスのselectedを解除し, クリックされたマスのみを選択する.

        var array = Array.prototype.slice.call(mass_all); //配列に変換
        for(var key in array){
            array[key].classList.remove("selected");
        }
        mass.classList.add("selected");
      }
    }
  }


  //
  //
  // クリック時の動作
  //
  //

  red_1.addEventListener('click', function(){
    btn_click(red_1);
  });

  blue_1.addEventListener('click', function(){
    btn_click(blue_1);
  });

  red_2.addEventListener('click', function(){
    btn_click(red_2);
  });

  blue_2.addEventListener('click', function(){
    btn_click(blue_2);
  });

  red_3.addEventListener('click', function(){
    btn_click(red_3);
  });

  blue_3.addEventListener('click', function(){
    btn_click(blue_3);
  });

  red_4.addEventListener('click', function(){
    btn_click(red_4);
  });

  blue_4.addEventListener('click', function(){
    btn_click(blue_4);
  });


  //
  //
  // mass_1_1
  //
  //
  mass_1_1.addEventListener('click', function(){
    mass_click(mass_1_1);
  });


  //
  //
  // mass_1_2
  //
  //
  mass_1_2.addEventListener('click', function(){
    mass_click(mass_1_2);
  });


  //
  //
  // mass_1_3
  //
  //
  mass_1_3.addEventListener('click', function(){
    mass_click(mass_1_3);
  });

  //
  //
  // mass_2_1
  //
  //
  mass_2_1.addEventListener('click', function(){
    mass_click(mass_2_1);
  });


  //
  //
  // mass_2_2
  //
  //
  mass_2_2.addEventListener('click', function(){
    mass_click(mass_2_2);
  });


  //
  //
  // mass_2_3
  //
  //
  mass_2_3.addEventListener('click', function(){
    mass_click(mass_2_3);
  });

  //
  //
  // mass_3_1
  //
  //
  mass_3_1.addEventListener('click', function(){
    mass_click(mass_3_1);
  });


  //
  //
  // mass_3_2
  //
  //
  mass_3_2.addEventListener('click', function(){
    mass_click(mass_3_2);
  });


  //
  //
  // mass_3_3
  //
  //
  mass_3_3.addEventListener('click', function(){
    mass_click(mass_3_3);
  });


})();
