const array = [1524084, 2978670, 8895244, 668814, 834528, 4290926, 2027230, 5852333, 7610058,]


const listMultiplier = (list, multiplier) => {
    list.forEach(num => console.log(`${num} x ${multiplier} = ${num * multiplier}`))
}

listMultiplier(array, 9)