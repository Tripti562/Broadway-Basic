document.getElementById("calculate").addEventListener("click", function (e) {
  e.preventDefault();
  let fst_num = document.getElementById("fst-num").value;
  let scnd_num = document.getElementById("scd-num").value;

  let operation = document.getElementById("operation").value;

  let addition = document.getElementById("add").value;
  let subtraction = document.getElementById("sub").value;
  let multiplication = document.getElementById("mul").value;
  let division = document.getElementById("div").value;
  let remainder = document.getElementById("remain").value;

  let add = parseInt(fst_num) + parseInt(scnd_num);
  let subtract = parseInt(fst_num) - parseInt(scnd_num);
  let mul = parseInt(fst_num) * parseInt(scnd_num);
  let div = parseInt(fst_num) / parseInt(scnd_num);
  let remain = parseInt(fst_num) % parseInt(scnd_num);
  // let addNum = (fst_num, scnd_num) => {
  //     fst_num + scnd_num;
  // }
  let result = "";

  if (operation === "addition") {
    add;
    result = add;
  } else if (operation === "subtraction") {
    subtract;
    result = subtract;
  } else if (operation === "multiplication") {
    mul;
    result = mul;
  } else if (operation === "division") {
    div;
    result = div;
  } else if (operation === "remainder") {
    remain;
    result = remain;
  }

  document.getElementById("result").value = result;
});
