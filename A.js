//installing firebase tools CLI
//1.1 sudo npm install -g firebase-tools//sudo is for permission
//1.1 check version
//firebase --version

//2.npm list -g//it's show globaly packeges. 
//a. firebase-tools
// b. nodemon start server for backend





//to check the version
//1. firebase --version


//to work by functions:-
//1.firebase login 
//2.? Allow Firebase to collect CLI and Emulator Suite usage and error reporting information? (Y/n)-->yes 
//then allow
//3. firebase init
//4. select:-
//❯◯ Functions: Configure a Cloud Functions directory and its files
//then space and enter
//❯ Use an existing project
//amazon-clone on firebase we created

//javascript
//i don't need(no)

//Amazon-clone
//yes

//2.cd functions
//2.1 npm i express cors stripe dotenv :- express
//     :- cors 
//     :- stripe
//     :- dotenv
//2.2 npm run serve
// functions[us-central1-api]: http function initialized (http://127.0.0.1:5001/clone-60794/us-central1/api).
//use for Thunder client link http://127.0.0.1:5001/clone-60794/us-central1/api

//on thunder client for payment link:- http://127.0.0.1:5001/clone-60794/us-central1/api/payment/create?total=300

// Publishable :- keypk_test_51Q1jT007rcARuSD274gwvtqokbFoGuxDdN01LOhu1C8MxyDETwjVTft125t57fZR987SXdEFZEjjmIlEAIPbQNQ8004X1eFO9Y

//Secret :- keysk_test_51Q1jT007rcARuSD27EuZWcTzahhDhwtctJsE8BQL3MZEVbIsAYdrzvWIckC0xhIIJh4Zmg6RC5eC2ySuCpT2fjB000yEuqjy2J


//"client_secret": "pi_3Q2Hcg07rcARuSD21JAf7PfN_secret_2fPP4hjpNbWXL46i93Z2flBso",


//1.1 firebase logout


///To deploy by firebase
//1. firebase login
//-> Already logged in as contactdevsamy@gmail.com
//2. npm run deploy








/////////
//1. npm install --save @stripe/react-stripe-js @stripe/stripe-js

//////on routing
//2.import {Elements} from '@stripe/react-stripe-js';
//import {loadStripe} from '@stripe/stripe-js';

//3.




//npm run serve

//////axios on front
//1.npm install axios



////////////Backend deployment using cloud firebase function
//1.firebase login //-->Already logged in as contactdavk@gmail.com
//2. npm run deploy //--> Error: Your project clone-3 must be on the Blaze
///--> hit upgrade from Spark to Blaze then continue to make payment
//After Blaze -->
//3. npm run deploy//--> ERROR: There was an error deploying functions//--> to fix this issue go in the functions file click on index.js then under the "const app = express();" type "setGlobalOptions({maxInstances: 10});"
//then
//4. clear
//5.npm run deploy//--> check your function URL
//then copy the link of baseurl from terminal then check on your browser and if it is ok sit your url in the file of axios interms of local url.


////////Backend deployment using Render
//1. cd amazon-clone
//2. ls --> amazon-api and Amazon-clone then choose amazon-api
//3. ls -la //to check git if it's no git then
//4. clear
//


