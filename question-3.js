// Question #3
let userPassword = "swnalWadqQ";
let userPassword1 = "TechUp";
let userPassword2 = "abcde";
// เริ่มเขียนโค้ดตรงนี้

function checkPasswordStrength(userPassword) {
  if (userPassword.length < 6) {
    return "Weak";
  } else if (userPassword.length < 10 && userPassword.length >= 6) {
    return "Medium";
  } else {
    return "Storng";
  }
}
console.log(checkPasswordStrength(userPassword));
console.log(checkPasswordStrength(userPassword1));
console.log(checkPasswordStrength(userPassword2));
