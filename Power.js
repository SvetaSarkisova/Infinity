
You're a square!

function isSquare(n){
    return Math.sqrt(n) % 1 === 0;
}

Find the next perfect square!

    function findNextSquare(sq) {
        if ( Math.sqrt(sq) % 1 === 0 ) return Math.pow((Math.sqrt(sq) + 1), 2)
        else return -1;
    }
