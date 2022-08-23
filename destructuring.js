let arr = ['Luis', 'Esteban', 'Haro']

// const firstName = arr[0]
// const lastName = arr[1]

const [ firstName, lastName ] = arr;

// console.log('firstName, lastName', firstName, lastName)


let arr2 = ['Luis', 'Esteban', 'Haro']

// const firstName = arr[0]
// const lastName = arr[1]

const [ firstName2,lastName2 ] = arr2;
// console.log('My new vars', firstName2, lastName2)

let [a,b,c] = 'xyz'
let mySet = new Set([1, 1, 3])
let [one, two, three] = mySet;

// console.log('mySet', mySet)

let user = {
    userName: 'Luis',
    userLastName: 'Haro',
}

const { userName } = user;
console.log('userName', userName)

// const { userLastName : apellido, userPhone = '55555555' } = user;
// const apellido = user.userLastName


user = {
    userName: 'Luis',
    userLastName: 'Haro',
    // userPhone: '4'
}

const { userLastName : apellido, userPhone = '55555555' } = user;
console.log('userPhone', userPhone)

// const [userName, userLastName] = user;
// const user2 = {
//     userName,
//     userName: userName,
//     userLastName: userLastName,
//     userName: 'Jose',
//     nationality: 'Mex'
// }

const user2 = {
    // Spread Operator
    ...user,
    userName: 'Jose',
    nationality: 'Mex'
}

console.log('user2', user2)

const { nationality, ...rest} = user2;
console.log('rest', rest)

const item = {
    itemName: 'Casa',
    itemDescription: {
        size: 14,
        color: 'red'
    }
}

const { itemDescription: { size, color: clr } } = item;
console.log('size', size)
console.log('clr', clr)

const myFunction = ({ itemName }) => {
    console.log('itemName', itemName)
}

console.log('myFunction(user)', myFunction(item))
