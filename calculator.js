const max = 10;
const min = 0;
let jump = 0.5;
let num = 24;

const calc = (num = 3) => {
    for (i = (min == 0) ? 1 : min; i < max + (jump == 0 ? 1 : jump); i++) {
        let multiplication = num * i
        console.log(`${num} x ${i}  = ${multiplication} \n`)
        i -= jump
    }
}

calc(num);