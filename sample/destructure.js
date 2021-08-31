// const user = {
//     name: "fulan",
//     age: 12,
//     school: "alwildan"
// }

// const address = {
//     province: "Jakarta",
//     city: "Jakarta",
//     name: "Jakarta"
// }

// cara lain nambah object
// cara jadul
// Object.assign(user, { address: "bsd" })
// console.log(user);

// cara baru
//const userWithAddress = { ...user, address: address } //cara langsung di attribute object
// const userWithAddress = { ...user, ...address } //cara nambah dengan object attribute di extract
// console.log(userWithAddress);

// destructer
// const { name, age } = user

// console.log(name);

// function get({ name, age, school }, { name1, province, city }) {
//     console.log(name, age, school);
//     console.log(name1, province, city);
// }

// get(user, address)

// destruct Array
// const data = ["fulan",12,"alwildan"] data biasa
const [sekolah, nama, umur] = ["fulan", 12, "alwildan"] //destructure

console.log(umur, sekolah, nama);