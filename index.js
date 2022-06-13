// code your solution here
function saturdayFun(activity="roller-skate") {
   
    console.log(`This Saturday, I want to ${activity}!`)
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(par1="*") {
    
    return function(emphatic="special"){ 
        return `You are ${par1}${emphatic}${par1}!` 
     
    }
}