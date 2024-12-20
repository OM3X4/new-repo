import jwt_decode from "jwt-decode"


console.log("hi")

function handleCredentialResponse(googleUser){
    console.log(jwt_decode(googleUser.credential))
}