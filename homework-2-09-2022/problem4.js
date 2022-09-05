//Given stored username and password and input username and password, Print if the user can login or not.
let reg_username="Amit12"
let reg_pass="412gf"
var enter_username="Amit12"
var enter_pass="412gf"

if(reg_username==enter_username){
  if(reg_pass==enter_pass){
    console.log("Welcome"+"\n"+"Login Successful")
  }else {
    console.log("Wrong Password")
  }
}else {
  console.log("Wrong Credential")
  
}