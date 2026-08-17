Flow : 

For Sign Up Endpoint : 

1. Ask for email
2. User enters email
3. Validate if the entered email is in valid format
4. Query db and check if user already existing (one email can used only once)
5. If email already present in db, throw message and ask to log in
6. If email not present, move ahead and ask for password 
7. Validate Entered password (should contain a-z, one special character, one number and one capital letter)
8. Once valid password received, move ahead and as for age
9. If age => 18, continue and create user account. If age < 18, block sign up and throw blocking reason


For Log In :

1. User Enters Email and Password
2. All validation checks happen if the format is correct or not
3. Once passed, make db query, check if the entered email and password exist
4. If not present, ask to sign up
5. If present show logged in welcome message




Current Status : This project is live on web. 

Sample Payload : 

{

    "email" : "enter@test.com"
    "password" : "Pass123@"
    "age" : 19
    
}

url to test : https://jwt-v2.onrender.com/

sign up url : https://jwt-v2.onrender.com/signUp. - POST

login url : https://jwt-v2.onrender.com/login.  - POST

server ping url : https://jwt-v2.onrender.com/pingg  - GET
