
You're a square!

function isSquare(n){
    return Math.sqrt(n) % 1 === 0;
}

Find the next perfect square!

    function findNextSquare(sq) {
        if ( Math.sqrt(sq) % 1 === 0 ) return Math.pow((Math.sqrt(sq) + 1), 2)
        else return -1;
    }

  SQRT

function squareOrSquareRoot(array) {
    let arr = [];
    for(let i = 0; i< array.length;i++){
        if (Math.sqrt(array[i]) % 1 === 0) arr.push(Math.sqrt(array[i]));
        else arr.push(Math.pow(array[i], 2));
    }
    return arr;
}