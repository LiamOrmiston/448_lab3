function change() {
  var border_r = document.getElementById('border-r').value;
  var border_g = document.getElementById('border-g').value;
  var border_b = document.getElementById('border-b').value;
  var border_w = document.getElementById('border-w').value;

  var bkgr_r = document.getElementById('bkgr-r').value;
  var bkgr_g = document.getElementById('bkgr-g').value;
  var bkgr_b = document.getElementById('bkgr-b').value;

  var toChange = document.getElementById('magic');
  toChange.style.borderStyle = "solid"
  toChange.style.borderWidth = border_w + "px"

  toChange.style.borderColor = "rgb(" + border_r + ", " + border_g + ", " + border_b + ")"
  toChange.style.backgroundColor = "rgb(" + bkgr_r + ", " + bkgr_g + ", " + bkgr_b + ")"
}
