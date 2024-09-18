var firstNum = null;
var operation = null;

function submitNumber() {
  if (firstNum == null) {
    firstNum = Number(document.getElementById("numberField").value);
    document.getElementById("numberInput").style = "display: none";
    document.getElementById("operationInput").style = "display: block";
  } else {
    switch (operation) {
      case "add":
        document.getElementById("numberField").value = firstNum + Number(document.getElementById("numberField").value);
        break;
      case "sub":
        document.getElementById("numberField").value = firstNum - Number(document.getElementById("numberField").value);
        break;
      case "mul":
        document.getElementById("numberField").value = firstNum * Number(document.getElementById("numberField").value);
        break;
      case "div":
        document.getElementById("numberField").value = firstNum / Number(document.getElementById("numberField").value);
    }

    if (document.getElementById("numberField").value == 86) {
      document.getElementById("calculator").style = "display: none";
      document.getElementById("video_display").style = "display: block";

      loadStream();
    }

    firstNum = null
  }
}

function addOp() {
  operation = "add";

  document.getElementById("numberInput").style = "display: block";
  document.getElementById("operationInput").style = "display: none";
}

function subOp() {
  operation = "sub";

  document.getElementById("numberInput").style = "display: block";
  document.getElementById("operationInput").style = "display: none";
}

function mulOp() {
  operation = "mul";

  document.getElementById("numberInput").style = "display: block";
  document.getElementById("operationInput").style = "display: none";
}

function divOp() {
  operation = "div";

  document.getElementById("numberInput").style = "display: block";
  document.getElementById("operationInput").style = "display: none";
}