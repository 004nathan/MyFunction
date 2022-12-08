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
   zohoSchools.call(this,name,age,development,empId);
   this.salary = salary;
}
const Employee1 = new Employee("Parvathinathan",18,"15k",2022)
console.log(Employee1);
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
    static getPiValue()
    {
        console.log(3.14);
    }
}
const sum1 = new MathMethod(155,14);
sum1.moduloFinder();
sum1.division();
MathMethod.getPiValue();
console.log(MathMethod.prototype)