let habitName="drink water";
let streak = 5;
let completeToday = true;
let habits =["running","reading","walking"];
let habit=[{
    name:"running",
    streak:3,
    completeToday: true
},
{name:"walking",
    streak:4,
    completeToday:false

}]
console.log(habitName);
console.log(streak);
console.log(completeToday);
console.log(habits);
console.log(habit)
console.log(habit[1].streak)
console.log(habit[0].completeToday)

function sayHello(){
    console.log("Hello")
}

sayHello();

function completeHabit(index){
    if (!habit[index].completeToday){
    habit[index].completeToday = true;
    habit[index].streak += 1;
    }
    else
    {console.log("You have already completed the task");}
}

completeHabit(0);

console.log(habit);
