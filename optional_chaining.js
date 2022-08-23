// JSON = JavaScript Object Notation
let user = {}

user = {
    address: {}
}

user = {
    address: {
        street: 'Random Street Value'
    }
}

console.log('user', user)
console.log('colony', user.address.colony?.municipality)

user = {
    address: {
        street: 'Random Street Value',
        colony: {
            municipality: '1'
        }
    }
}

console.log('colony', user.address.colony?.municipality)
