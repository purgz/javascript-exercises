const fibonacci = function(num) {
    num = parseInt(num);
    if ( num <= 0 ){ return "OOPS"};

    a = 0;
    b = 1;
    
    for (let i = 1; i <= num; i ++){
        fib = a + b;
        let temp = a;
        a = fib;
        b = temp;
    }
    
    return fib;

};
fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
