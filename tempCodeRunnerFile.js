const numbers=[12,16,28,59,68,78,100,25];
let greatestno=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]>greatestno){
        greatestno=numbers[i];
    }
    else{
        continue;
    }
}
console.log(greatestno);