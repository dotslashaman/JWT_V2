const bcrypt = require("bcrypt");

const saltRount = 10;
const pass = "Amanpass"
let newPass;


const hasPass = async() => {
    newPass = await bcrypt.hash(pass,saltRount);
    console.log(newPass);   
}
console.log("before hashed pass");


console.log("---break---");
const decryptPass = async() => {
    await bcrypt.compare('Amanpass',newPass, function(err,result){
        console.log("before result");
        console.log(result);

    });
    
}


async function runFunction(){
    await hasPass();
    await decryptPass();
}

runFunction();




