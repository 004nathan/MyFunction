//Create a constructor function for a Person, each person should have a firstName, lastName, favoriteColor and favoriteNumber.
const Person = function (firstName,lastName,favoriteColor,favoriteNumber) 
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor=favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber=function (number) {
    console.log(favoriteNumber*number);
  }
}
const person1 = new Person("Parvathinathan","S","Green",5);
console.log(person1.__proto__);
//Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number.
person1.multiplyFavoriteNumber(5);
//Create your own custom prototype methods for Array and String objects.
console.log(String.prototype);
String.prototype.vowelCount = function (){
  let vowels = ["a","e","i","o","u"];
  let word = this;
  let input = word.toLowerCase();
  let wordArray = input.split(" ");
  let count = 0;
   for(let i = 0;i<wordArray.length;i++)
     {
       let word = wordArray[i];
       for (let j = 0; j < word.length; j++) {
         if(vowels.includes(word[j])){
              count++;
            }
       }
     }
  return count;
  
}
console.log("frontEnd".vowelCount())
String.prototype.reverse = function () {
  let st = this ;
  let answer ="";
  for(let i = st.length-1;i>=0;i--)
    {
       answer += st[i];
    }
  return answer;
}
console.log("hesitate".reverse());
Array.prototype.power = function (){
  let answer =[];
  let inputArray = this;
  for (let x of inputArray) {
    answer.push(x*x);
  }
  return answer;
}

console.log([1,2,3,4,5,6,7,8,9,10,11,12,14,15].power());
// constructor function and the new operator
const zohoSchools = function(name,age,development,empId,batchYear)
{
   this.name = name;
   this.age = age;
   this.development = development;
   this.empId = empId;
   this.batchYear = batchYear;
/*   this.findBatch = function()
    {
        console.log(batchYear - 2011);
  };*/
}
const student1 = new zohoSchools("Parvathinathan",18,"FrontEnd",297,2022);
const student2 = new zohoSchools("iyyanar",18,"FrontEnd",303,2022);
// student1.findBatch();
console.log(student1);
console.log(student2);
// now it will checked the object is instance no/yes
console.log(student2 instanceof zohoSchools);
// external method creation
zohoSchools.prototype.findBatch = function()
{
    console.log(this.batchYear - 2011);
};
student1.findBatch();
student1.idColor="Black";
console.log(student1);
console.log(zohoSchools.prototype)
console.log(student1.__proto__)
const Employee = function(name,age,salary,batchYear,development,empId)
{
   zohoSchools.call(this,name,age,batchYear,development,empId);
   this.salary = salary;
}
const Employee1 = new Employee("Parvathinathan",18,"15k",2022,"FrontEnd development",297);
console.log(Employee1);
//linked prototypes because inherit parent methods
Employee.prototype = Object.create(zohoSchools.prototype);

// constructor function coding challenge 1
const Car = function(brandName,speed)
{
    this.brandName = brandName;
    this.speed = speed;
}
// this function increase speed
Car.prototype.accelerate = function()
{
    if(this.speed < 200){
        this.speed = this.speed+10
        console.log(this.speed);
    }
    else{
        console.log("overspeed");
    }
    
}
// this function decrease speed
Car.prototype.break = function()
{
    this.speed = this.speed - 5;
    console.log(this.speed);
}
const BMW = new Car("BMW",50);
const FIAT = new Car("FIAT",100);
BMW.accelerate();
FIAT.break();
BMW.break();
FIAT.accelerate();
// class Declaration
class MathMethod{
    constructor(number1,number2)
    {
        this.number1=number1;
        this.number2 = number2;
    }
    moduloFinder()
    {
        console.log(this.number1%this.number2)
    }
    division()
    {
        console.log(this.number1/this.number2);
    }
    //static method
    
    moduloFinder()
      {
          console.log(this.number1%this.number2)
      }
      division()
      {
          console.log(this.number1/this.number2);
      }
      //static method
      static getPiValue()
      {
          
        console.log(3.14);
      }
}
const sum1 = new MathMethod(155,14);
sum1.moduloFinder();
sum1.division();
MathMethod.getPiValue();
console.log(MathMethod.prototype);
//coding challenge 3
const Electriccar = function(brandName,speed,charge)
{
  Car.call(this,brandName,speed);
  this.charge = charge;
}
Electriccar.prototype.chargeBattery=function()
{
  this.charge = this.charge+1;
  console.log(`charge ${this.charge}% succesfully`);
}
Electriccar.prototype.accelerate = function()
{
  this.speed = this.speed+20;
  this.charge = this.charge -1;
  console.log(`${this.brandName } going at ${this.speed} km/h, with a charge of ${this.charge}%`);
}
const Evcar = new Electriccar("Testla",40,100);
Evcar.accelerate();
Evcar.chargeBattery();


// using extends keyword to access parent methods from childclass
// when you create class method , methods in class.Automatically,These are provide prototype method from class method
// cl = class
class PersonCl{
constructor(firstName,lastName)
{
  this.firstName=firstName;
  this.lastName = lastName;
}
greet()
{
  return `Hello, ${this.firstName+this.lastName}`
}
}
class StudentCl extends PersonCl
{
  constructor(firstName,lastName,id)
  {
    super(firstName,lastName);
    this.id=id;
  }
  checkSalary()
  {
     return "Your salary was credited to your account";
  }
}
const Parvathinathan = new PersonCl("Parvathi","nathan");
const ParvathinathanS = new StudentCl("Parvathi","nathan",297);
console.log(Parvathinathan.greet());
console.log(ParvathinathanS.checkSalary());
console.log(PersonCl.prototype);
console.log(StudentCl.prototype);
// Now we create class name Bank for using private variable and private methods
class HDFCBank{
  #statements = [];
   balance = 0;
   #pin;
  constructor(userName,AccountNo,pin)
  {
     this.userName = userName;
     this.AccountNo = AccountNo;
     this.#pin = pin;
  }
  deposit(amount,date)
  {
    this.balance = this.balance + amount;
    this.#statements.push(`You have a balance +${this.balance} on ${date} debited +${amount} rupees`);
    console.log(`your balance is successfully debited`);
    return this;
    
  }
  withdraw(amount,date)
  {
     this.balance = this.balance - amount;
     this.#statements.push(`You have a balance ${this.balance} on ${date} by withdraw -${amount} rupees`);
     return this;
  }
  balanceInquiry(AccountNo)
  {
      if(this.AccountNo = AccountNo)
      {
        console.log(`Your balance is ${this.balance}`);
        return this;
      }
  }
  requestLoan(amount)
  {
   
       this.#approveLoan(amount);
       return this;
  }
  #approveLoan(amount)
  {
     if(amount<= 200000 && amount >= 100000)
     {
        return "your loan is approved";
     }
     this.deposit(amount);
  }
  statements()
  {
    return this.#statements;
  }
}
const nathan = new HDFCBank("Parvathi nathan",1234567890,1111);
console.log(nathan.deposit(20000,"3-12-2022"));
console.log(nathan.withdraw(5000,"3-12-2022"));
console.log(nathan.requestLoan(100000));
console.log(nathan.balanceInquiry(1234567890));
// method chaining
console.log(nathan.deposit(10000,"13-12-2022").deposit(20000,"15-12-2022").withdraw(10000,"16-12-2022").requestLoan(150000).withdraw(2000,"28-12-2022").deposit(50000,"30-12-2022"))
console.log(nathan.statements())
// how to get userInput from codechef;
/* importPackage(java.io);!!!
 importPackage(java.lang);!!!
 
let reader = new BufferedReader( new InputStreamReader(System['in']) );

let t = parseInt(reader.readLine());

for (let i = 0; i<t; i++){
    let v = reader.readLine().split(" ").map(function(i){return parseInt(i)});
    print(Math.max(v[0],v[1]))
}*/



// http request and Ajax call
function getHttpRequest()
{
   const httpRequest = new XMLHttpRequest();
   httpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(JSON.parse(httpRequest.responseText));
    }
  }
  let url = "https://api.api-ninjas.com/v1/quotes?category=happiness";
  httpRequest.open('GET',url);
  httpRequest.setRequestHeader("x-api-key","aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX")
  httpRequest.send();
}

function getHttpRequestWeather()
{
   const httpRequest = new XMLHttpRequest();
   httpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let weatherObject = JSON.parse(httpRequest.responseText);
        console.log(weatherObject);
        console.log(weatherObject.temp);
        
        
    }
  }
  let url = "https://api.api-ninjas.com/v1/weather?city=Tenkasi";
  httpRequest.open('GET',url);
  httpRequest.setRequestHeader("x-api-key","aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX")
  httpRequest.send();
}
getHttpRequestWeather();
let getTime = (milli) => {
  let time = new Date(milli);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();
  let milliseconds = time.getUTCMilliseconds();
  return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
}
var milli = 1671453343;
console.log(milli)
console.log(getTime(milli))
function getHttpRequestRestCountry()
{
   const httpRequest = new XMLHttpRequest();
   httpRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let RestCountryObject = JSON.parse(httpRequest.responseText);
        console.log(RestCountryObject);  
        console.log(typeof(RestCountryObject))
        console.log(RestCountryObject[0].flag)
        let border = RestCountryObject[0].borders ;
        console.log(border);   
    }
  }
  let url = "https://restcountries.com/v3.1/name/india";
  httpRequest.open('GET',url);
  // httpRequest.setRequestHeader("x-api-key","aCS6s21ieOzKE7sqceqLzA==h32c2RsJuoQKT7yX")
  httpRequest.send();
}
getHttpRequestRestCountry();
// Now we learn about new API callling method 
// The Method name is Fetch(url or page file(index.html))
// Promise method give two type of response  one is resolved response. rejected response ;
// Rejected response give error now we have catch the error and show the user response

const getCountryDetail = function(country){
  fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response){
    console.log(response);
    return response.json();
  }).then(function (data){
   let borders = data[0].borders;
   console.log(borders)
   if(!borders)throw new Error(`No neighbour found!${data[0].status}`);
    console.log(data);
    console.log(data[0])
   })
   .catch(err =>{
      console.log(`Country not found ${err}`)
    })
  .finally(()=>{
    console.log("Api calling finished")
  })
}
getCountryDetail("australia");