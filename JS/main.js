let user = {
    name: "Aziz", // string
    surname: 'Adams',
    age: 15, // number
    isMarried: true, // boolean
    girls: ['nargiza', 'malika', 'karina', 'aziza'],
    passport: {
        serries: 'AC',
        number: 213123213
    },
}
let wallet = {
    cash: 19000,
    card: {
        password: 7777,
        cash: 13532
    }
}

let single_object = Object.assign(user, wallet);

let key = Object.keys(single_object)
let value = Object.values(single_object)

let arr = key.concat(value)

arr = arr.flat(Infinity)

let types = {
    number: [],
    string: [],
    object: [],
    boolean: []
}

arr.filter(item => {
    if(typeof(item) == Number){
        types.number.push(item)
    } else if(typeof(item) == String){
        types.string.push(item)
    }else if(typeof(item) == Object){
        types.object.push(item)
    }else if(typeof(item) == Boolean){
        types.boolean.push(item)
    }
})


console.log(types);



// ТЗ
// Седенить два объекта в один новый
// достать все значения в один массив и все ключи тоже в один но отдельный массив
// соеденить два массива в один целый
// отфильтровать данные по их типам данных в соответствующие переменные
// let newObj = Object.assign(user, addInfo)
// Object.freeze(user)
// Object.keys(user)
// Object.values(user)
// Object.entries(user)