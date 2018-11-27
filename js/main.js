(function(){
  'use strict';

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

  var selected_item = "";

  function red_click_action (item) {
    selected_item = item;
    red_1.classList.remove("selected");
    red_2.classList.remove("selected");
    red_3.classList.remove("selected");
    red_4.classList.remove("selected");
    mass_1_1.classList.remove("selected");
    mass_1_2.classList.remove("selected");
    mass_1_3.classList.remove("selected");
    mass_2_1.classList.remove("selected");
    mass_2_2.classList.remove("selected");
    mass_2_3.classList.remove("selected");
    mass_3_1.classList.remove("selected");
    mass_3_2.classList.remove("selected");
    mass_3_3.classList.remove("selected");
    if (item === "red_1"){
      red_1.classList.add("selected");
    }
    else if (item === "red_2"){
      red_2.classList.add("selected");
    }
    else if (item === "red_3"){
      red_3.classList.add("selected");
    }
    else if (item === "red_4"){
      red_4.classList.add("selected");
    }
    else if (item === "mass_1_1"){
      mass_1_1.classList.add("selected");
    }
    else if (item === "mass_1_2"){
      mass_1_2.classList.add("selected");
    }
    else if (item === "mass_1_3"){
      mass_1_3.classList.add("selected");
    }
    else if (item === "mass_2_1"){
      mass_2_1.classList.add("selected");
    }
    else if (item === "mass_2_2"){
      mass_2_2.classList.add("selected");
    }
    else if (item === "mass_2_3"){
      mass_2_3.classList.add("selected");
    }
    else if (item === "mass_3_1"){
      mass_3_1.classList.add("selected");
    }
    else if (item === "mass_3_2"){
      mass_3_2.classList.add("selected");
    }
    else if (item === "mass_3_3"){
      mass_3_3.classList.add("selected");
    }

  }

  function red_return_number (item) {
    if (item === "red_1"){
      selected_item = "";
      return "1";
    }
    else if (item === "red_2"){
      selected_item = "";
      return "2";
    }
    else if (item === "red_3"){
      selected_item = "";
      return "3";
    }
    else if(item === "red_4"){
      selected_item = "";
      return "4";
    }
  }

  function blue_click_action (item) {
    selected_item = item;
    blue_1.classList.remove("selected");
    blue_2.classList.remove("selected");
    blue_3.classList.remove("selected");
    blue_4.classList.remove("selected");
    mass_1_1.classList.remove("selected");
    mass_1_2.classList.remove("selected");
    mass_1_3.classList.remove("selected");
    mass_2_1.classList.remove("selected");
    mass_2_2.classList.remove("selected");
    mass_2_3.classList.remove("selected");
    mass_3_1.classList.remove("selected");
    mass_3_2.classList.remove("selected");
    mass_3_3.classList.remove("selected");
    if (item === "blue_1"){
      blue_1.classList.add("selected");
    }
    else if (item === "blue_2"){
      blue_2.classList.add("selected");
    }
    else if (item === "blue_3"){
      blue_3.classList.add("selected");
    }
    else if (item === "blue_4"){
      blue_4.classList.add("selected");
    }
    else if (item === "mass_1_1"){
      mass_1_1.classList.add("selected");
    }
    else if (item === "mass_1_2"){
      mass_1_2.classList.add("selected");
    }
    else if (item === "mass_1_3"){
      mass_1_3.classList.add("selected");
    }
    else if (item === "mass_2_1"){
      mass_2_1.classList.add("selected");
    }
    else if (item === "mass_2_2"){
      mass_2_2.classList.add("selected");
    }
    else if (item === "mass_2_3"){
      mass_2_3.classList.add("selected");
    }
    else if (item === "mass_3_1"){
      mass_3_1.classList.add("selected");
    }
    else if (item === "mass_3_2"){
      mass_3_2.classList.add("selected");
    }
    else if (item === "mass_3_3"){
      mass_3_3.classList.add("selected");
    }


  }

  function blue_return_number (item) {
    if (item === "blue_1"){
      selected_item = "";
      return "1";
    }
    else if (item === "blue_2"){
      selected_item = "";
      return "2";
    }
    else if (item === "blue_3"){
      selected_item = "";
      return "3";
    }
    else if(item === "blue_4"){
      selected_item = "";
      return "4";
    }
  }


  // var turn = "red";
  // ターンではないプレイヤーに対して, disableクラスを付与する.
  // if (turn === "red") {
  // var turn = red;
  function turn_red (){
    // blue.classList.add('disabled');
    // red.classList.remove('disabled');
    console.log("turn_red");

    // 選択されたnumberには, 選択されたことがわかる色を付与する.
    // それ以外には色をつけない.
    red_1.addEventListener('click', function(){
      if (selected_item === "red_1"){
        selected_item = "";
        red_1.classList.remove("selected");
      }else{
        red_click_action("red_1");
      }

    });

    red_2.addEventListener('click', function(){
      if (selected_item === "red_2"){
        selected_item = "";
        red_2.classList.remove("selected");
      } else{
        red_click_action("red_2");
      }
    });

    red_3.addEventListener('click', function(){
      if (selected_item === "red_3"){
        selected_item = "";
        red_3.classList.remove("selected");
      } else{
        red_click_action("red_3");
      }

    });

    red_4.addEventListener('click', function(){
      if (selected_item === "red_4"){
        selected_item = "";
        red_4.classList.remove("selected");
      } else{
        red_click_action("red_4");
      }
    });

    mass_1_1.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_1_1.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      }
      else {
        if (selected_item === "mass_1_1"){
          mass_1_1.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_1_1");
        }
      }

    });

    mass_1_2.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_1_2.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_1_2"){
          mass_1_2.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_1_2");
        }
      }

    });

    mass_1_3.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_1_3.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_1_3"){
          mass_1_3.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_1_3");
        }
      }

    });

    mass_2_1.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_2_1.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_2_1"){
          mass_2_1.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_2_1");
        }
      }

    });

    mass_2_2.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_2_2.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_2_2"){
          mass_2_2.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_2_2");
        }
      }

    });

    mass_2_3.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_2_3.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_2_3"){
          mass_2_3.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_2_3");
        }
      }

    });

    mass_3_1.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_3_1.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_3_1"){
          mass_3_1.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_3_1");
        }
      }

    });

    mass_3_2.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_3_2.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_3_2"){
          mass_3_2.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_3_2");
        }
      }

    });

    mass_3_3.addEventListener('click', function(){
      if(selected_item === "red_1" || selected_item === "red_2" || selected_item === "red_3" || selected_item === "red_4"){
        mass_3_3.textContent = red_return_number(selected_item);
        counter.textContent = "blue";
        selected_item = "";
        counter.classList.remove("red");
        counter.classList.add("blue");
        red.classList.add('disabled');
        blue.classList.remove('disabled');
        return ;
      } else {
        if (selected_item === "mass_3_3"){
          mass_3_3.classList.remove("selected");
          selected_item = "";
        } else{
          red_click_action("mass_3_3");
        }
      }

    });

   }


  //
  // turnが blueの場合
  //
  // else if (turn === "blue") {
  function turn_blue(){
  //else{
    red.classList.add('disabled');
    blue.classList.remove('disabled');
    console.log("turn_blue");

    // 選択されたnumberには, 選択されたことがわかる色を付与する.
    // それ以外には色をつけない.
    blue_1.addEventListener('click', function(){
      if (selected_item === "blue_1"){
        selected_item = "";
        blue_1.classList.remove("selected");
      }else{
        blue_click_action("blue_1");
      }

    });

    blue_2.addEventListener('click', function(){
      if (selected_item === "blue_2"){
        selected_item = "";
        blue_2.classList.remove("selected");
      } else{
        blue_click_action("blue_2");
      }
    });

    blue_3.addEventListener('click', function(){
      if (selected_item === "blue_3"){
        selected_item = "";
        blue_3.classList.remove("selected");
      } else{
        blue_click_action("blue_3");
      }

    });

    blue_4.addEventListener('click', function(){
      if (selected_item === "blue_4"){
        selected_item = "";
        blue_4.classList.remove("selected");
      } else{
        blue_click_action("blue_4");
      }
    });

    mass_1_1.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_1_1.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        counter.classList.add("red");
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      }
      else {
        if (selected_item === "mass_1_1"){
          mass_1_1.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_1_1");
        }
      }

    });

    mass_1_2.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_1_2.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_1_2"){
          mass_1_2.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_1_2");
        }
      }

    });

    mass_1_3.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_1_3.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_1_3"){
          mass_1_3.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_1_3");
        }
      }

    });

    mass_2_1.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_2_1.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_2_1"){
          mass_2_1.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_2_1");
        }
      }

    });

    mass_2_2.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_2_2.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_2_2"){
          mass_2_2.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_2_2");
        }
      }

    });

    mass_2_3.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_2_3.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_2_3"){
          mass_2_3.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_2_3");
        }
      }

    });

    mass_3_1.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_3_1.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_3_1"){
          mass_3_1.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_3_1");
        }
      }

    });

    mass_3_2.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_3_2.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_3_2"){
          mass_3_2.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_3_2");
        }
      }

    });

    mass_3_3.addEventListener('click', function(){
      if(selected_item === "blue_1" || selected_item === "blue_2" || selected_item === "blue_3" || selected_item === "blue_4"){
        mass_3_3.textContent = blue_return_number(selected_item);
        counter.textContent = "red";
        selected_item = "";
        counter.classList.remove("blue");
        counter.classList.add("red");
        blue.classList.add('disabled');
        red.classList.remove('disabled');
      } else {
        if (selected_item === "mass_3_3"){
          mass_3_3.classList.remove("selected");
          selected_item = "";
        } else{
          blue_click_action("mass_3_3");
        }
      }

    });
  }

  function play(){
    if (counter.classList.contains("red") && !counter.classList.contains("blue") ){
      turn_red();
      //console.log("aaaaa");
      // counter.classList.remove("red");
      // counter.classList.add("blue");
    }
    else if(counter.classList.contains("blue") && !counter.classList.contains("red")){
      turn_blue();
      // console.log("bbbbb");
      // counter.classList.remove("blue");
      // counter.classList.add("red");
    }
  }

  play();

})();
