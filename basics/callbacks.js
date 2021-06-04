// async - 

const isEven = (num, callback) => {
    setTimeout(() => {
        if (num % 2 === 0) {
            callback(true);
        } else {
            callback(false);
        }
    }, 2000);
}

isEven(2, result => {
    if (result) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
})