//your JS code here. If required.
let codes = document.querySelectorAll(".code");
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
//     else focusNext(index, val);
//   });
// });

code1.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code1.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(0);
  else focusNext(0, val);
});
code2.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code2.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(1);
  else focusNext(1, val);
});
code3.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code3.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(2);
  else focusNext(2, val);
});
code4.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code4.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(3);
  else focusNext(3, val);
});
code5.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code5.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(4);
  else focusNext(4, val);
});
code6.addEventListener("focus", (e) => {
  e.preventDefault();
  //   if (code6.value == "") return;
  let val = e.key;
  if (val == "Backspace") focusPrev(5);
  else focusNext(5, val);
});
function focusNext(idx, val) {
  codes[idx].value = val;
  let next = idx + 1;
  if (next >= 6) return;
  let c = codes[next];
  c.focus();
  c.value = "";
}
function focusPrev(idx) {
  codes[idx].value = "";
  let pre = idx - 1;
  if (pre < 0) return;
  let c = codes[pre];
  c.focus();
}
