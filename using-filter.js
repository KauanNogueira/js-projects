const numbers = [12, 32, 32, 11, 76, 45, 772, 5];

const findNumbers = list => {
    const oddNumbers = []
    const evenNumbers = []

    oddNumbers.push(list.filter(num => num % 2 === 0))
    evenNumbers.push(list.filter(num => num % 2 != 0))
    console.log(oddNumbers)
    console.log(evenNumbers)
}

findNumbers(numbers)

