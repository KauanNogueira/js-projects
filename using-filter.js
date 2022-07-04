const numbers = [12, 32, 32, 11, 76, 45, 772, 5];

const findNumbers = list => {
    const oddNumbers = []
    const evenNumbers = []

    evenNumbers.push(list.filter(num => num % 2 === 0))
    oddNumbers.push(list.filter(num => num % 2 != 0))
    console.log(oddNumbers)
    console.log(evenNumbers)
}

findNumbers(numbers)

const zipcodes = [215, 561, 889, 299, 965, 318, 935, 893, 433, 706, 732, 805, 633, 156, 978, 914, 621, 626, 636, 890, 895, 545, 328, 448, 948, 717, 769, 887, 598, 693, 895, 712, 773, 665, 423, 134, 449, 296, 193, 359, 273, 546, 591, 872, 890, 114, 861, 145, 880, 572]

const findEspecifcNumber = (list, expectedNum) => {
    if (list.filter(num => num == expectedNum) == expectedNum) {
        console.log(`The number ${expectedNum} was found`)
    } else {
        console.log(`Couldn't find the number ${expectedNum} on this list`)
    }
}

findEspecifcNumber(zipcodes, 54)
