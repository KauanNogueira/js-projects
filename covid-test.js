const family1 = ['NEGATIVE', 'POSITIVE', 'NEGATIVE', 'NEGATIVE']
const family2 = ['NEGATIVE', 'NEGATIVE', 'NEGATIVE', 'NEGATIVE']

const covidVerifier = (family) => {
    if (family.some(memberTest => memberTest == 'POSITIVE')) {
        console.log(`Unfortunately you and your family are not able to get in due to some of you had tested positive to covid`)
    } else {
        console.log(`All of your family members are able to get in`)
    }
}

covidVerifier(family1)
covidVerifier(family2)