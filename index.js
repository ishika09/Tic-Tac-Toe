function reload_page() {
  window.location.reload();
}
function disable_all_buttons() {
  document.getElementById(1).disabled = true;
  document.getElementById(2).disabled = true;
  document.getElementById(3).disabled = true;
  document.getElementById(4).disabled = true;
  document.getElementById(5).disabled = true;
  document.getElementById(6).disabled = true;
  document.getElementById(7).disabled = true;
  document.getElementById(8).disabled = true;
  document.getElementById(9).disabled = true;
}
function check_array() {
  var a = Number(sessionStorage.getItem("A"));
  var b = Number(sessionStorage.getItem("B"));
  var c = Number(sessionStorage.getItem("C"));
  var d = Number(sessionStorage.getItem("D"));
  var e = Number(sessionStorage.getItem("E"));
  var f = Number(sessionStorage.getItem("F"));
  var g = Number(sessionStorage.getItem("G"));
  var h = Number(sessionStorage.getItem("H"));
  var i = Number(sessionStorage.getItem("I"));

  var arr1 = [a, b, c];
  var arr2 = [d, e, f];
  var arr3 = [g, h, i];

  // console.log("I am here")
  console.log(arr1);
  console.log(arr2);
  console.log(arr3);
  // console.log(y)
  var result = false;
  var result_value = 0;

  if (
    arr1[0] == arr1[1] &&
    arr1[1] == arr1[2] &&
    arr1[0] != 0 &&
    arr1[1] != 0 &&
    arr1[2] != 0
  ) {
    result = true;
    result_value = a;
    disable_all_buttons();
  }
  if (
    arr2[0] == arr2[1] &&
    arr2[1] == arr2[2] &&
    arr2[0] != 0 &&
    arr2[1] != 0 &&
    arr2[2] != 0
  ) {
    result = true;
    result_value = d;
    disable_all_buttons();
  }
  if (
    arr3[0] == arr3[1] &&
    arr3[1] == arr3[2] &&
    arr3[0] != 0 &&
    arr3[1] != 0 &&
    arr3[2] != 0
  ) {
    result = true;
    result_value = g;
    disable_all_buttons();
  }
  if (
    arr1[0] == arr2[0] &&
    arr2[0] == arr3[0] &&
    arr1[0] != 0 &&
    arr2[0] != 0 &&
    arr3[0] != 0
  ) {
    result = true;
    result_value = a;
    disable_all_buttons();
  }
  if (
    arr1[1] == arr2[1] &&
    arr2[1] == arr3[1] &&
    arr1[1] != 0 &&
    arr2[1] != 0 &&
    arr3[1] != 0
  ) {
    result = true;
    result_value = b;
    disable_all_buttons();
  }
  if (
    arr1[2] == arr2[2] &&
    arr2[2] == arr3[2] &&
    arr1[2] != 0 &&
    arr2[2] != 0 &&
    arr3[2] != 0
  ) {
    result = true;
    result_value = c;
    disable_all_buttons();
  }
  if (
    arr1[0] == arr2[1] &&
    arr2[1] == arr3[2] &&
    arr1[0] != 0 &&
    arr2[1] != 0 &&
    arr3[2] != 0
  ) {
    result = true;
    result_value = a;
    disable_all_buttons();
  }
  if (
    arr1[2] == arr2[1] &&
    arr2[1] == arr3[0] &&
    arr1[2] != 0 &&
    arr2[1] != 0 &&
    arr3[0] != 0
  ) {
    result = true;
    result_value = c;
    disable_all_buttons();
  }
  // if(arr1[0]!=0 && arr1[1]!=0 && arr1[2]!=0 && arr2[0]!=0 && arr2[1]!=0 && arr2[2]!=0 && arr3[0]!=0 && arr3[1]!=0 && arr3[2]!=0){
  //     result=false
  //     console.log("Draw")
  //     document.getElementById('result').innerHTML=`Game ended in a draw!`
  // }

  if (result === true) {
    console.log("We have a winner");
    if (result_value == 1) {
      console.log("Zero wins");
      document.getElementById("result").innerHTML = `Player 0 has won!`;
    }
    if (result_value == 2) {
      console.log("Kaata wins");
      document.getElementById("result").innerHTML = `Player X has won!`;
    }
  }
  //result is false and y is 10 then it's a draw.
  else if (result === false && y == 9) {
    document.getElementById("result").innerHTML = `Game ended in a draw!`;
  }
}
var y = Number(sessionStorage.getItem("j"));
function change_value(clicked_id) {
  var z = clicked_id;

  // console.log(y)
  if (y % 2 === 1) {
    //Put 0 on the button which is pressed by the user
    document.getElementById(z).innerHTML = `0`;
    document.getElementById(z).style.color = "yellow";
    document.getElementById(z).style.backgroundColor = "green";
    document.getElementById(z).disabled = true;
    if (z < 4) {
      // console.log(z)
      if (z == 1) {
        sessionStorage.setItem("A", 1);
        check_array();
      }
      if (z == 2) {
        sessionStorage.setItem("B", 1);
        check_array();
      }
      if (z == 3) {
        sessionStorage.setItem("C", 1);
        check_array();
      }
    }
    if (z > 3 && z < 7) {
      // console.log("hello")
      if (z == 4) {
        sessionStorage.setItem("D", 1);
        check_array();
      }
      if (z == 5) {
        sessionStorage.setItem("E", 1);
        check_array();
      }
      if (z == 6) {
        sessionStorage.setItem("F", 1);
        check_array();
      }
    }
    if (z > 6) {
      if (z == 7) {
        sessionStorage.setItem("G", 1);
        check_array();
      }
      if (z == 8) {
        sessionStorage.setItem("H", 1);
        check_array();
      }
      if (z == 9) {
        sessionStorage.setItem("I", 1);
        check_array();
      }
    }
  } else if (y % 2 === 0) {
    //Put X on the button which is pressed by the user
    document.getElementById(z).innerHTML = `X`;
    document.getElementById(z).style.color = "white";
    document.getElementById(z).style.backgroundColor = "hsl(340deg 100% 32%)";
    document.getElementById(z).disabled = true;
    if (z < 4) {
      if (z == 1) {
        sessionStorage.setItem("A", 2);
        check_array();
      }
      if (z == 2) {
        sessionStorage.setItem("B", 2);
        check_array();
      }
      if (z == 3) {
        sessionStorage.setItem("C", 2);
        check_array();
      }
    }
    if (z > 3 && z < 7) {
      if (z == 4) {
        sessionStorage.setItem("D", 2);
        check_array();
      }
      if (z == 5) {
        sessionStorage.setItem("E", 2);
        check_array();
      }
      if (z == 6) {
        sessionStorage.setItem("F", 2);
        check_array();
      }
    }
    if (z > 6) {
      if (z == 7) {
        sessionStorage.setItem("G", 2);
        check_array();
      }
      if (z == 8) {
        sessionStorage.setItem("H", 2);
        check_array();
      }
      if (z == 9) {
        sessionStorage.setItem("I", 2);
        check_array();
      }
    }
  }

  y = y + 1;
  console.log(y);
  sessionStorage.setItem("j", y);
}
