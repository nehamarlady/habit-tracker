let habit=[{
    name:"running",
    streak:3,
    completeToday: true
},
{name:"walking",
    streak:4,
    completeToday:false

},
{
    name:"running",
    streak:3,
    completeToday:true
}]

function completeHabit(index){
    if (!habit[index].completeToday){
    habit[index].completeToday = true;
    habit[index].streak += 1;
    }
    else
    {console.log("You have already completed the task");}
}



function addHabit(name){
    let newHabit={
        name: name,
        streak:0,
        completeToday:false
    };
    habit.push(newHabit);
}

function resetHabit(index){
    habit[index].streak=0;
    habit[index].completeToday=false;
}

function showHabit(){
    for(let i=0;i<habit.length;i++){
        console.log(
            habit[i].name+
            "|Steak:"+habit[i].streak+
            "|Completed:"+habit[i].completeToday);
    }
}

addHabit("Dancing");
addHabit("Singing");
completeHabit(3);
resetHabit(0);
showHabit();

