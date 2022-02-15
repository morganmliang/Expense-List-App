const person = {

    name:'Andrew',
    age: 26,
    location: {
        city: "Philly",
        temp: 92
    }
};

const {name = "james", age} = person;

console.log(`${name} is ${age}`);



const {city, temp:temperature} = person.location;

if(city && temperature){


    console.log(`It's ${temperature} in ${city}.`);
}


const address = ['1299 S juniper St', "philly", "penn", "19147"];

const [street, city1, state, zip] = address;


console.log(`You are in ${city1} ${state}`);

const item = ["conffee (hot)", "$2.00", "$2.50", "$2.75"]

const [coffee, s, m , l]=  item;


console.log( `A medium ${coffee} costs ${l}`)