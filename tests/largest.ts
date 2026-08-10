let n:number[] = [2,4,5,6,8,67]
let largest:number = n[1]
for(let num of n)
{
    if(num>largest)
        largest=num

}

console.log(largest)
