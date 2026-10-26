//Task 1
const laptop = {
brand: "Lenovo",
model: "ThinkPad",
price: 450000,
isAvailable: true,
}

console.log(laptop);
console.log(laptop.brand)
console.log(laptop.model)
console.log(laptop["price"])
console.log(laptop["isAvailable"])


//Task 2
laptop.price= 420000;
console.log(laptop);
laptop.colour= "Black";
console.log(laptop);
laptop.quantity= 5;
console.log(laptop);
delete laptop.isAvailable;
console.log(laptop);


//Task 3
const learningCentre ={
    name: "Code Academy",
    welcome: function () {
        console.log("Welcome to Code Academy!")
    },
    announce (){
        console.log("Please complete your homework before the next class.")
    },
}

console.log(learningCentre.name);
learningCentre.welcome();
learningCentre.announce();

//Task 4
const numberTool={
    add(a, b){
        return a+ b;
    },
    multiply(a, b){
        return a*b;
    },
    isEven(number){
        if (number%2 === 0){
            return true;
        }
        return false;
    },
}

console.log(numberTool.add(18, 12));
console.log(numberTool.multiply(6, 7));
console.log(numberTool.isEven(15));
console.log(numberTool.isEven(20));


const employee = {
    name: "Zainab",
    role: "Frontend Developer",
    company: "BrightTech",
    introduce(){
        return `My name is ${this.name}. I work as a ${this.role} at ${this.company}.`;
    },
}
console.log(employee.introduce());
employee.role= "Full Stack Developer";
console.log(employee.introduce());

//Task 6 
const wallet ={
    balance: 10000,
    deposit(amount){
        return this.balance+= amount;
    },
    spend(amount){
        return this.balance-= amount;
    },
    getBalance(){
        return this.balance;
    }
}
console.log(wallet.deposit(5000));
console.log(wallet.spend(3000));
console.log(wallet.deposit(2000));
console.log(wallet.getBalance());


//Task 7
const course = {
    courseName: "JavaScript",
    tutor: "Bukola",
    duration: "4 weeks",
    fee: 50000
};

const {courseName, tutor}= course;
console.log(courseName);
console.log(tutor);
const courseDuration= course.duration;
const courseFee= course.fee;
console.log(courseDuration);
console.log(courseFee);


//Task 8 
const classroom = {
    name: "Full Stack Class",
    students: 12,
    location: "Lagos",
    isActive: true,
};

Object.keys(classroom);
Object.values(classroom);
Object.entries(classroom);

//Task 9
for (k in classroom){
    console.log(`${k}: ${classroom[k]}`)
}
for (const [key, value] of Object.entries(classroom)) {
    console.log(`${key}: ${value}`)
}