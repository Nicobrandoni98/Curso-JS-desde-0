// Social Media Profile.

// 1. User information
const username = "todococo123"
const fullName = "Nicolas Brandoni"
const age = 26
const isSttudent = true

// 2. Address.
const address = {
    street: "Presidente roca 1259",
    city: "Rosario",
    state: "estudiante",
    zipCode: 2000
}

// 3. Hobbies.
const hobbies = ["Gimansio", "Estudiar", "Gaming"]


// 4. Generating personalized bio
const bio = `Hola mi nombre es ${fullName}, tengo ${age} y vivo en ${address.city}. Actualmente soy ${address.state}. Lo que me gusta hacer en mi dia a dia es ir al ${hobbies.join(", ")}.`

// 5. Print the user profile and bio.

console.log(bio);