function primeFactor(n){
    // Print the number of 2s that divide n
    while (n%2==0){
        console.log(2);
        n=n/2;
    }

    //n must be odd 
    for(var i=3; i*i<=n; i+=2){
        while(n%i==0){
            console.log(i);
            n=n/i;
        }
    }
// This condition is to handle the case when n is a prime number
// greater than 2
    if(n>2){
        console.log(n);
    }
}

primeFactor(123432); 
// 2
// 2
// 2
// 3
// 37
// 139

// Complexity root_n