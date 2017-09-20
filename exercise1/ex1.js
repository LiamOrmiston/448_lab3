function validation() {
  var password1 = document.getElementById('pass1').value;
  var password2 = document.getElementById('pass2').value;

  if (password1.length < 8 || password2.length < 8) {
    window.alert("Password needs to be at least 8");
  }
  else if (password1 != password2) {
    window.alert("Passwords do not match");
  }
  else {
    window.alert("Your password has been validated!")
  }
}
