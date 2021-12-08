function prime(n){
    if(n%2==0 && n!=2){
    console.log('not prime number');
}else if(n%2==1){
    if(n==1 || n==3 || n==2){
            console.log("prime number");
    }else if(n%3!=0){
            console.log("prime number");
    }else{
        console.log('not prime number');
    }
}
}
prime(15);