//your JS code here. If required.
// let codes = document.querySelectorAll(".code");
let code1 = document.getElementById("code-1");
let code2 = document.getElementById("code-2");
let code3 = document.getElementById("code-3");
let code4 = document.getElementById("code-4");
let code5 = document.getElementById("code-5");
let code6 = document.getElementById("code-6");
// codes.forEach((code, index) => {
//   code.addEventListener("keydown", (e) => {
//     e.preventDefault();
//     let val = e.key;
//     // code.value = val;
//     if (val == "Backspace") focusPrev(index);
//     else focused(index, val);
//   });
// });

code1.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") code1.value = "";
  else {
    code1.value = val;
    focused("code-2", code2);
  }
});

code2.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") {
    code2.value = "";
    focused("code-1", code1);
  } else {
    code2.value = val;
    focused("code-3", code3);
  }
});

code3.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") {
    code3.value = "";
    focused("code-2", code2);
  } else {
    code3.value = val;
    focused("code-4", code4);
  }
});

code4.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") {
    code4.value = "";
    focused("code-3", code3);
  } else {
    code4.value = val;
    focused("code-5", code5);
  }
});

code5.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") {
    code5.value = "";
    focused("code-4", code4);
  } else {
    code5.value = val;
    focused("code-6", code6);
  }
});

code6.addEventListener("keydown", (e) => {
  e.preventDefault();
  let val = e.key;
  if (val == "Backspace") {
    code6.value = "";
    focused("code-5", code5);
  } else code6.value = val;
  //   else focused("code-6", code6);
});

function focused(id, code) {
  code.focus();
}