//your JS code here. If required.
let codes = document.querySelectorAll(".code");
codes.forEach((code, index) => {
  code.addEventListener("keydown", (e) => {
    e.preventDefault();
    let val = e.key;
    // code.value = val;
    if (val == "Backspace") focusPrev(index);
    else focusNext(index, val);
  });
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
