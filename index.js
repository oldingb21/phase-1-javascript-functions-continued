// code your solution here
const saturdayFun = (fun = 'roller-skate') => {
    return `This Saturday, I want to ${fun}!`;
}

const mondayWork = (work = 'go to the office') => {
    return `This Monday, I will ${work}.`;
}

const wrapAdjective = (wrap = '*') => {
    return function(adjective = 'special') {
        return `You are ${wrap}${adjective}${wrap}!`;
    }
}