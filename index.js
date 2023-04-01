let result = document.getElementById("result");

      function insertNumber(number) {
        if (result.value == "0") {
          result.value = number;
        } else {
          result.value += number;
        }
      }

      function insertSymbol(symbol) {
        if (result.value != "0") {
          result.value += symbol;
        }
      }

      function calculateResult() {
        result.value = eval(result.value);
      }

      function clearResult() {
        result.value = "0";
      }

      function backspace() {
        result.value = result.value.slice(0, -1);
        if (result.value == "") {
          result.value = "0";
        }
      }
