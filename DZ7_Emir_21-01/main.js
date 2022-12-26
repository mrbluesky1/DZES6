class Cars {
    constructor(selector) {
        this.model = selector.model;
        this.color = selector.color;
        this.wheels = selector.wheels
    }
    start(){
        console.log('Машина заведена')
    }
}

class Tesla extends Cars {
    constructor(options) {
        super(options);

        this.isElectrocar = options.isElectrocar
    }
}

const teslaCar = new Tesla({
    model: 'Model X',
    color: 'white',
    wheels: 4,
    isElectrocar: true
})

class Man extends Cars{
    constructor(options) {
        super(options);

        this.isTruck = options.isTruck
    }
}

const manTruck = new Man({
    model: 'The Man TGX',
    color: 'yellow',
    wheels: 10,
    isTruck: true
})

class Indian extends Cars{
    constructor(options) {
        super(options);

        this.peopleCapacity = options.peopleCapacity
    }
}

const indianMotorcycle = new Indian({
    model: 'FTR R Carbon',
    color: 'black',
    wheels: 2,
    peopleCapacity: 2
})

teslaCar.start()
console.log(teslaCar)
console.log(manTruck)
console.log(indianMotorcycle)