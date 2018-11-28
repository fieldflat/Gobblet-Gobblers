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
  var square = document.getElementById('square');

  var counter = document.getElementById('counter');
  var popped_area = document.getElementById('popped_area');

  var blue_buttons = document.getElementById('blue_buttons');
  var red_buttons = document.getElementById('red_buttons');

  var red_mass_class = document.getElementsByClassName('red_mass_class');
  var blue_mass_class = document.getElementsByClassName('blue_mass_class');
  var mass_all = document.getElementsByClassName('mass');

  var reset = document.getElementById('reset');

  var mass_1_1_array = new Array();
  var mass_1_2_array = new Array();
  var mass_1_3_array = new Array();
  var mass_2_1_array = new Array();
  var mass_2_2_array = new Array();
  var mass_2_3_array = new Array();
  var mass_3_1_array = new Array();
  var mass_3_2_array = new Array();
  var mass_3_3_array = new Array();

  var popped_mass;

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
    else{
      return false;
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
    else{
      return false;
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

  //
  //
  // is_larger
  // less < moreだったらtrueを返し, それ以外ならfalseを返す.
  //
  //
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
  // push_mass_stack
  // それぞれのマススタックに要素を追加する.
  //
  //
  function push_mass_stack (mass, color){
    if (mass === mass_1_1){
      mass_1_1_array.push(color);
      console.log(mass_1_1_array);
    }
    else if (mass === mass_1_2){
      mass_1_2_array.push(color);
      console.log(mass_1_2_array);
    }
    else if (mass === mass_1_3){
      mass_1_3_array.push(color);
      console.log(mass_1_3_array);
    }
    else if (mass === mass_2_1){
      mass_2_1_array.push(color);
      console.log(mass_2_1_array);
    }
    else if (mass === mass_2_2){
      mass_2_2_array.push(color);
      console.log(mass_2_2_array);
    }
    else if (mass === mass_2_3){
      mass_2_3_array.push(color);
      console.log(mass_2_3_array);
    }
    else if (mass === mass_3_1){
      mass_3_1_array.push(color);
      console.log(mass_3_1_array);
    }
    else if (mass === mass_3_2){
      mass_3_2_array.push(color);
      console.log(mass_3_2_array);
    }
    else if (mass === mass_3_3){
      mass_3_3_array.push(color);
      console.log(mass_3_3_array);
    }
  }

  //
  //
  // pop_mass_stack
  // マススタックから, スタックトップの要素を取得する.
  //
  //
  function pop_mass_stack(mass){
    var return_item;
    if (mass === mass_1_1){
      return mass_1_1_array.pop();
    }
    else if (mass === mass_1_2){
      return mass_1_2_array.pop();
    }
    else if (mass === mass_1_3){
      return mass_1_3_array.pop();
    }
    else if (mass === mass_2_1){
      return mass_2_1_array.pop();
    }
    else if (mass === mass_2_2){
      return mass_2_2_array.pop();
    }
    else if (mass === mass_2_3){
      return mass_2_3_array.pop();
    }
    else if (mass === mass_3_1){
      return mass_3_1_array.pop();
    }
    else if (mass === mass_3_2){
      return mass_3_2_array.pop();
    }
    else if (mass === mass_3_3){
      return mass_3_3_array.pop();
    }

  }

  //
  //
  // show_mass
  // マスに表示される値を, スタックを用いて表示する.
  //
  //
  function show_mass(top_item, where){
    //console.log(top_item);
    if (top_item === undefined){
      where.textContent = "";
    }
    else if(top_item === red_1 || top_item === red_2 || top_item === red_3 || top_item === red_4){
      where.classList.add("char_red");
      where.classList.remove("char_blue");

      if (top_item === red_1){
        where.textContent = 1;
        red_1.classList.add("disabled");
      }
      else if(top_item === red_2){
        where.textContent = 2;
        red_2.classList.add("disabled");
      }
      else if(top_item === red_3){
        where.textContent = 3;
        red_3.classList.add("disabled");
      }
      else if(top_item === red_4){
        where.textContent = 4;
        red_4.classList.add("disabled");
      }
    }

    else if(top_item === blue_1 || top_item === blue_2 || top_item === blue_3 || top_item === blue_4 ){
      where.classList.add("char_blue");
      where.classList.remove("char_add");

      if (top_item === blue_1){
        where.textContent = 1;
        blue_1.classList.add("disabled");
      }
      else if(top_item === blue_2){
        where.textContent = 2;
        blue_2.classList.add("disabled");
      }
      else if(top_item === blue_3){
        where.textContent = 3;
        blue_3.classList.add("disabled");
      }
      else if(top_item === blue_4){
        where.textContent = 4;
        blue_4.classList.add("disabled");
      }
    }

  }

  //
  //
  // show_all
  //
  //
  function show_all(){
    //
    //
    // マスの表示
    //
    //
    show_mass(mass_1_1_array.slice(-1)[0], mass_1_1);
    show_mass(mass_1_2_array.slice(-1)[0], mass_1_2);
    show_mass(mass_1_3_array.slice(-1)[0], mass_1_3);
    show_mass(mass_2_1_array.slice(-1)[0], mass_2_1);
    show_mass(mass_2_2_array.slice(-1)[0], mass_2_2);
    show_mass(mass_2_3_array.slice(-1)[0], mass_2_3);
    show_mass(mass_3_1_array.slice(-1)[0], mass_3_1);
    show_mass(mass_3_2_array.slice(-1)[0], mass_3_2);
    show_mass(mass_3_3_array.slice(-1)[0], mass_3_3);
  }


  //
  //
  // enter_number
  // マスに数字をenterする. マスの書き込みに成功したらtrue, 失敗したらfalseを返す.
  //
  //
  function enter_number (mass, color){

    if (color === red_1 || color === red_2 || color === red_3 || color === red_4){
      if (is_larger(mass.textContent, red_return_number(color))){
        push_mass_stack(mass, color);
        show_all();
        return true;
      }
      else{
        //show_all();
        return false;
      }
    }
    else if (color === blue_1 || color === blue_2 || color === blue_3 || color === blue_4){
      if (is_larger(mass.textContent, blue_return_number(color))){
        push_mass_stack(mass, color);
        show_all();
        return true;
      }
      else{
        //show_all();
        return false;
      }
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

    //
    // 結着がついたら選択させない.
    //
    if(square.classList.contains("disabled")){
      return ;
    }

    //
    // red-btnがどれか選択されている場合にマスをクリックしたとき.
    //
    if (red_1.classList.contains("selected") || red_2.classList.contains("selected") || red_3.classList.contains("selected") || red_4.classList.contains("selected")){
      if (red_1.classList.contains("selected")){ // すでにred-btnが選択されているときに, マスをクリックしたときの動作.
        if (enter_number(mass, red_1)){
          end_red_turn();
        }
        else{
          red_1.classList.remove("selected");
        }
      }
      else if (red_2.classList.contains("selected")){
        if (enter_number(mass, red_2)){
          end_red_turn();
        }
        else{
          red_2.classList.remove("selected");
        }
      }
      else if (red_3.classList.contains("selected")){
        if (enter_number(mass, red_3)){
          end_red_turn();
        }
        else{
          red_3.classList.remove("selected");
        }
      }
      else if (red_4.classList.contains("selected")){
        if (enter_number(mass, red_4)){
          end_red_turn();
        }
        else{
          red_4.classList.remove("selected");
        }
      }

      check_line();
    }

    //
    // blue-btnがどれか選択されている場合にマスをクリックしたとき.
    //
    else if(blue_1.classList.contains("selected") || blue_2.classList.contains("selected") || blue_3.classList.contains("selected") || blue_4.classList.contains("selected")){
      if (blue_1.classList.contains("selected")){ // すでにblue-btnが選択されているときに, マスをクリックしたときの動作.
        if (enter_number(mass, blue_1)){
          end_blue_turn();
        }
        else{
          blue_1.classList.remove("selected");
        }
      }
      else if (blue_2.classList.contains("selected")){
        if (enter_number(mass, blue_2)){
          end_blue_turn();
        }
        else{
          blue_2.classList.remove("selected");
        }
      }
      else if (blue_3.classList.contains("selected")){
        if (enter_number(mass, blue_3)){
          end_blue_turn();
        }
        else{
          blue_3.classList.remove("selected");
        }
      }
      else if (blue_4.classList.contains("selected")){
        if (enter_number(mass, blue_4)){
          end_blue_turn();
        }
        else{
          blue_4.classList.remove("selected");
        }
      }
      check_line();
    }

    //
    // red-btn, blue-btnがいずれも選択されていない場合にマスをクリックした場合.
    // マスが選択されている場合に, マスをクリックした場合も含む.
    //
    else {

      // 選択されたマスが存在しないとき...
      // 1. 何も数字がないマスをクリックしたとき
      //     -> 無反応にする.
      // 2. 相手の数字のマスをクリックしたとき
      //     -> 無反応にする.
      // 3. 自分の数字のマスをクリックしたとき
      //     -> マスを選択状態にし, スタックトップはpopped_areaに退避させる. さらに, 自分の1-4までのボタンを選択不可能にする.

      // 選択されたマスが存在するとき...
      // 1. 選択されたマスをもう一度クリックしたとき
      //    -> popped_areaにある数字を再び同じスタックに戻し, 再び自分のターンとする. さらに, 自分の1-4までのボタンを選択可能にする.
      // 2. 選択されていないマスをクリックしたとき
      //    -> popped_areaにある数字をクリックしたマスに戻し, 相手のターンとする. さらに, 自分の1-4までのボタンを選択不可能にする.


      // 選択されたマスが存在しないとき...
      if (!(mass_1_1.classList.contains('selected') || mass_1_2.classList.contains('selected') || mass_1_3.classList.contains('selected') ||
      mass_2_1.classList.contains('selected') || mass_2_2.classList.contains('selected') || mass_2_3.classList.contains('selected') ||
      mass_3_1.classList.contains('selected') || mass_3_2.classList.contains('selected') || mass_3_3.classList.contains('selected'))) {

        popped_mass = pop_mass_stack(mass);

        // 1. 何も数字がないマスをクリックしたとき
        //     -> 無反応にする.
        if (popped_mass === undefined){
          return ;
        }

        // 2. 相手の数字のマスをクリックしたとき
        //     -> 無反応にする.
        // 3. 自分の数字のマスをクリックしたとき
        //     -> マスを選択状態にし, スタックトップはpopped_areaに退避させる. さらに, 自分の1-4までのボタンを選択不可能にする.
        else{

          // 青のターンであった場合...
          if (red.classList.contains("disabled")){

            // 何も起こさない. (popped_massを元の場所に戻す.)
            if (popped_mass == red_1 || popped_mass == red_2 || popped_mass == red_3 || popped_mass == red_4){
              push_mass_stack(mass, popped_mass);
            }
            // 選択して, スタックトップの要素をpopped_areaに退避させる.
            else if (popped_mass == blue_1 || popped_mass == blue_2 || popped_mass == blue_3 || popped_mass == blue_4){
              mass.classList.add("selected");
              //enter_number(mass, popped_mass);
              popped_area.textContent = blue_return_number(popped_mass);
              popped_area.classList.add("blue");
              popped_area.classList.remove("red");
              blue.classList.add("disabled");
            }

            show_all();
          }

          // 赤のターンであった場合...
          else if (blue.classList.contains("disabled")){

            // 何も起こさない. (popped_massを元の場所に戻す.)
            if (popped_mass == blue_1 || popped_mass == blue_2 || popped_mass == blue_3 || popped_mass == blue_4){
              push_mass_stack(mass, popped_mass);
            }
            // 選択して, スタックトップの要素をpopped_areaに退避させる.
            else if (popped_mass == red_1 || popped_mass == red_2 || popped_mass == red_3 || popped_mass == red_4){
              mass.classList.add("selected");
              //enter_number(mass, popped_mass);
              popped_area.textContent = red_return_number(popped_mass);
              popped_area.classList.add("red");
              popped_area.classList.remove("blue");
              red.classList.add("disabled");
            }

            show_all();
          }

        }

      }


      // 選択されたマスが存在するとき...
      // 1. 選択されたマスをもう一度クリックしたとき
      //    -> popped_areaにある数字を再び同じスタックに戻し, 再び自分のターンとする. さらに, 自分の1-4までのボタンを選択可能にする.
      // 2. 選択されていないマスをクリックしたとき
      //    -> popped_areaにある数字をクリックしたマスに戻し, 相手のターンとする. さらに, 自分の1-4までのボタンを選択不可能にする.
      else {

        // 1. 選択されたマスをもう一度クリックしたとき
        //    -> popped_areaにある数字を再び同じスタックに戻し, 再び自分のターンとする. さらに, 自分の1-4までのボタンを選択可能にする.
        if (mass.classList.contains("selected")){
          mass.classList.remove("selected");
          console.log(mass);
          console.log(popped_mass);
          enter_number(mass, popped_mass);
          // push_mass_stack(mass, popped_mass);
          if (popped_mass == blue_1 || popped_mass == blue_2 || popped_mass == blue_3 || popped_mass == blue_4){
            popped_area.classList.remove("blue");
            blue.classList.remove("disabled");
            popped_area.textContent = "Popped Area";
          }
          else if(popped_mass == red_1 || popped_mass == red_2 || popped_mass == red_3 || popped_mass == red_4){
            popped_area.classList.remove("red");
            red.classList.remove("disabled");
            popped_area.textContent = "Popped Area";
          }

        }

        // 2. 選択されていないマスをクリックしたとき
        //    -> popped_areaにある数字をクリックしたマスに戻し, 相手のターンとする. さらに, 自分の1-4までのボタンを選択不可能にする.
        else{

          if (popped_mass == blue_1 || popped_mass == blue_2 || popped_mass == blue_3 || popped_mass == blue_4){
            popped_area.classList.remove("blue");
            popped_area.textContent = "Popped Area";

            if (enter_number(mass, popped_mass)){
              end_blue_turn();
            }
            else{
              var array = Array.prototype.slice.call(mass_all); //配列に変換
              for(var key in array){
                if (array[key].classList.contains("selected")){
                  blue.classList.remove("disabled");
                  push_mass_stack(array[key], popped_mass);
                }
              }

            }
          }

          else if(popped_mass == red_1 || popped_mass == red_2 || popped_mass == red_3 || popped_mass == red_4){
            popped_area.classList.remove("red");
            popped_area.textContent = "Popped Area";

            if (enter_number(mass, popped_mass)){
              end_red_turn();
            }
            else{
              var array2 = Array.prototype.slice.call(mass_all); //配列に変換
              for(var key in array2){
                if (array2[key].classList.contains("selected")){
                  red.classList.remove("disabled");
                  push_mass_stack(array2[key], popped_mass);
                }
              }
            }

          }

        }

        mass_1_1.classList.remove("selected");
        mass_1_2.classList.remove("selected");
        mass_1_3.classList.remove("selected");
        mass_2_1.classList.remove("selected");
        mass_2_2.classList.remove("selected");
        mass_2_3.classList.remove("selected");
        mass_3_1.classList.remove("selected");
        mass_3_2.classList.remove("selected");
        mass_3_3.classList.remove("selected");

        show_all();
        check_line();
      }

    } // else end


  } //function end


  //
  //
  // return_color
  // 色を返す.
  //
  //
  function return_color(color){
    if (color === red_1 || color === red_2 || color === red_3 || color === red_4){
      return "red";
    }

    else if (color === blue_1 || color === blue_2 || color === blue_3 || color === blue_4){
      return "blue";
    }

    else{
      return false;
    }
  }

  //
  //
  // check_line
  // 結着がついたか確認する.
  //
  //
  function check_line(){

    var mass_1_1_color = return_color(mass_1_1_array.slice(-1)[0]);
    var mass_1_2_color = return_color(mass_1_2_array.slice(-1)[0]);
    var mass_1_3_color = return_color(mass_1_3_array.slice(-1)[0]);
    var mass_2_1_color = return_color(mass_2_1_array.slice(-1)[0]);
    var mass_2_2_color = return_color(mass_2_2_array.slice(-1)[0]);
    var mass_2_3_color = return_color(mass_2_3_array.slice(-1)[0]);
    var mass_3_1_color = return_color(mass_3_1_array.slice(-1)[0]);
    var mass_3_2_color = return_color(mass_3_2_array.slice(-1)[0]);
    var mass_3_3_color = return_color(mass_3_3_array.slice(-1)[0]);

    var blue_win = false;
    var red_win = false;

    //
    // BLUE
    //
    if (mass_1_1_color == "blue" && mass_1_2_color == "blue" && mass_1_3_color == "blue"){

      blue_win = true;

      mass_1_1.classList.add("blue_end");
      mass_1_2.classList.add("blue_end");
      mass_1_3.classList.add("blue_end");
    }

    if (mass_1_1_color == "blue" && mass_2_1_color == "blue" && mass_3_1_color == "blue"){

      blue_win = true;

      mass_1_1.classList.add("blue_end");
      mass_2_1.classList.add("blue_end");
      mass_3_1.classList.add("blue_end");
    }

    if (mass_2_1_color == "blue" && mass_2_2_color == "blue" && mass_2_3_color == "blue"){

      blue_win = true;

      mass_2_1.classList.add("blue_end");
      mass_2_2.classList.add("blue_end");
      mass_2_3.classList.add("blue_end");
    }

    if (mass_1_2_color == "blue" && mass_2_2_color == "blue" && mass_3_2_color == "blue"){

      blue_win = true;

      mass_1_2.classList.add("blue_end");
      mass_2_2.classList.add("blue_end");
      mass_3_2.classList.add("blue_end");
    }

    if (mass_3_1_color == "blue" && mass_3_2_color == "blue" && mass_3_3_color == "blue"){

      blue_win = true;

      mass_3_1.classList.add("blue_end");
      mass_3_2.classList.add("blue_end");
      mass_3_3.classList.add("blue_end");
    }

    if (mass_1_3_color == "blue" && mass_2_3_color == "blue" && mass_3_3_color == "blue"){

      blue_win = true;

      mass_1_3.classList.add("blue_end");
      mass_2_3.classList.add("blue_end");
      mass_3_3.classList.add("blue_end");
    }

    if (mass_1_1_color == "blue" && mass_2_2_color == "blue" && mass_3_3_color == "blue"){

      blue_win = true;

      mass_1_1.classList.add("blue_end");
      mass_2_2.classList.add("blue_end");
      mass_3_3.classList.add("blue_end");
    }

    if (mass_1_3_color == "blue" && mass_2_2_color == "blue" && mass_3_1_color == "blue"){

      blue_win = true;

      mass_1_3.classList.add("blue_end");
      mass_2_2.classList.add("blue_end");
      mass_3_1.classList.add("blue_end");
    }


    //
    // RED
    //
    if (mass_1_1_color == "red" && mass_1_2_color == "red" && mass_1_3_color == "red"){

      red_win = true;

      mass_1_1.classList.add("red_end");
      mass_1_2.classList.add("red_end");
      mass_1_3.classList.add("red_end");
    }

    if (mass_1_1_color == "red" && mass_2_1_color == "red" && mass_3_1_color == "red"){

      red_win = true;

      mass_1_1.classList.add("red_end");
      mass_2_1.classList.add("red_end");
      mass_3_1.classList.add("red_end");
    }

    if (mass_2_1_color == "red" && mass_2_2_color == "red" && mass_2_3_color == "red"){

      red_win = true;

      mass_2_1.classList.add("red_end");
      mass_2_2.classList.add("red_end");
      mass_2_3.classList.add("red_end");
    }

    if (mass_1_2_color == "red" && mass_2_2_color == "red" && mass_3_2_color == "red"){

      red_win = true;

      mass_1_2.classList.add("red_end");
      mass_2_2.classList.add("red_end");
      mass_3_2.classList.add("red_end");
    }

    if (mass_3_1_color == "red" && mass_3_2_color == "red" && mass_3_3_color == "red"){

      red_win = true;

      mass_3_1.classList.add("red_end");
      mass_3_2.classList.add("red_end");
      mass_3_3.classList.add("red_end");
    }

    if (mass_1_3_color == "red" && mass_2_3_color == "red" && mass_3_3_color == "red"){

      red_win = true;

      mass_1_3.classList.add("red_end");
      mass_2_3.classList.add("red_end");
      mass_3_3.classList.add("red_end");
    }

    if (mass_1_1_color == "red" && mass_2_2_color == "red" && mass_3_3_color == "red"){

      red_win = true;

      mass_1_1.classList.add("red_end");
      mass_2_2.classList.add("red_end");
      mass_3_3.classList.add("red_end");
    }

    if (mass_1_3_color == "red" && mass_2_2_color == "red" && mass_3_1_color == "red"){

      red_win = true;

      mass_1_3.classList.add("red_end");
      mass_2_2.classList.add("red_end");
      mass_3_1.classList.add("red_end");
    }


    //
    // 判定結果
    //
    if (blue_win === true || red_win === true){
      blue.classList.add("disabled");
      red.classList.add("disabled");
      square.classList.add("disabled");

      if(blue_win === true && red_win === true){
        popped_area.textContent = "DRAW...";
        popped_area.classList.add("draw");
      }
      else if(blue_win === true){
        popped_area.textContent = "Congrats blue!!";
        popped_area.classList.add("blue");
      }

      else if(red_win === true){
        popped_area.textContent = "Congrats red!!";
        popped_area.classList.add("red");
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
    //check_line();
  });


  //
  //
  // mass_1_2
  //
  //
  mass_1_2.addEventListener('click', function(){
    mass_click(mass_1_2);
    //check_line();
  });


  //
  //
  // mass_1_3
  //
  //
  mass_1_3.addEventListener('click', function(){
    mass_click(mass_1_3);
    //check_line();
  });

  //
  //
  // mass_2_1
  //
  //
  mass_2_1.addEventListener('click', function(){
    mass_click(mass_2_1);
    //check_line();
  });


  //
  //
  // mass_2_2
  //
  //
  mass_2_2.addEventListener('click', function(){
    mass_click(mass_2_2);
    //check_line();
  });


  //
  //
  // mass_2_3
  //
  //
  mass_2_3.addEventListener('click', function(){
    mass_click(mass_2_3);
    //check_line();
  });

  //
  //
  // mass_3_1
  //
  //
  mass_3_1.addEventListener('click', function(){
    mass_click(mass_3_1);
    //check_line();
  });


  //
  //
  // mass_3_2
  //
  //
  mass_3_2.addEventListener('click', function(){
    mass_click(mass_3_2);
    //check_line();
  });


  //
  //
  // mass_3_3
  //
  //
  mass_3_3.addEventListener('click', function(){
    mass_click(mass_3_3);
    //check_line();
  });

  //
  //
  // リセット時の挙動
  //
  //
  reset.addEventListener('click', function(){
    mass_1_1_array = [];
    mass_1_2_array = [];
    mass_1_3_array = [];
    mass_2_1_array = [];
    mass_2_2_array = [];
    mass_2_3_array = [];
    mass_3_1_array = [];
    mass_3_2_array = [];
    mass_3_3_array = [];
    red_1.classList.remove("disabled");
    red_2.classList.remove("disabled");
    red_3.classList.remove("disabled");
    red_4.classList.remove("disabled");
    blue_1.classList.remove("disabled");
    blue_2.classList.remove("disabled");
    blue_3.classList.remove("disabled");
    blue_4.classList.remove("disabled");

    mass_1_1.classList.remove("red_end");
    mass_1_2.classList.remove("red_end");
    mass_1_3.classList.remove("red_end");
    mass_2_1.classList.remove("red_end");
    mass_2_2.classList.remove("red_end");
    mass_2_3.classList.remove("red_end");
    mass_3_1.classList.remove("red_end");
    mass_3_2.classList.remove("red_end");
    mass_3_3.classList.remove("red_end");

    mass_1_1.classList.remove("blue_end");
    mass_1_2.classList.remove("blue_end");
    mass_1_3.classList.remove("blue_end");
    mass_2_1.classList.remove("blue_end");
    mass_2_2.classList.remove("blue_end");
    mass_2_3.classList.remove("blue_end");
    mass_3_1.classList.remove("blue_end");
    mass_3_2.classList.remove("blue_end");
    mass_3_3.classList.remove("blue_end");

    square.classList.remove("disabled");
    popped_area.textContent = "Popped Area";
    popped_area.classList.remove("red");
    popped_area.classList.remove("blue");
    popped_area.classList.remove("draw");

    show_all();

    if(blue.classList.contains("disabled")){
      blue.classList.remove("disabled");
      red.classList.add("disabled");
    }

  });



})();
