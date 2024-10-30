
const users =[
    {name: "Alice", role: "admin"},
    {name: "Bob", role: "editor"},
    {name: "Charie", role: "viewer"},
    {name: "Emeline", role: "admin"},
    {name: "Ethan", role: "viewer"},
    {name: "Franklin", role: "viewer"}
]

const rolePermission = {
    admin : ["create", "read", "update", "delete"],
    editor : ["read", "update"],
    viewer : ["read"]
};

const machin = users.map(user => user.name  + " " +  rolePermission[user.role]);
console.log(machin);

const truc = users.map(user =>({...user,  permission : rolePermission[user.role]}));
console.log(truc);

const bidule = users.filter(user => user.role === "admin");
console.log(bidule);

const grostruc = bidule.map(user => user.name)
console.log(grostruc);

const numbers = [18, 23, 30, 45, 56, 62, 73, 80, 99, 106]

const oui = numbers.filter(number => number%2 === 0);
console.log(oui);

const cart =[
    {item : "laptop", price: 1000, quantity: 1},
    {item : "Phone", price: 500, quantity: 2},
    {item : "Tablet", price: 100, quantity: 3}
]

const toto = cart.reduce((sum, item)=> {
    return sum+(item.price*item.quantity)}
    , 0);
console.log(toto);

const cartExo = [
    { name: 'Laptop', price: 1000, quantity: 1, onSale: true },
    { name: 'Headphones', price: 200, quantity: 2, onSale: false },
    { name: 'Monitor', price: 300, quantity: 1, onSale: true },
    { name: 'Mouse', price: 50, quantity: 3, onSale: false },
    { name: 'Keyboard', price: 100, quantity: 1, onSale: true }
];

const onSale = cartExo.filter(product=> product.onSale)
console.log(onSale);

const discounted = onSale.map(product =>({...product, price: product.price * 0.8}));
console.log(discounted);

const discountedCart = discounted.reduce((sum, product)=> {
    return sum+(product.price*product.quantity)}
    , 0);
console.log(discountedCart);