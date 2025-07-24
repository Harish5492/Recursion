function printDecreasingByRecursion(n){
    if(n > 0){
        console.log(n);
        printDecreasingByRecursion(n-1);
    }
}
printDecreasingByRecursion(10);