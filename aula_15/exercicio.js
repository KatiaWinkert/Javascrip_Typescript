let varA = 'A'; //B
let varB = 'B'; //C
let VarC = 'C'; //A

varA = varB;
varB = VarC;
VarC = varA;

console.log(varA, varB, VarC)