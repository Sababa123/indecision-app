const user = {
    name: 'Sababa',
    cities: ['Karachi','Lahore','Islamabad'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2,4,5,7],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
}

console.log(multiplier.multiply());