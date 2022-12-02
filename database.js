require('dotenv').config()
const {Client} = require('pg');

const client = new Client ({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: process.env.PASSWORD,
    database: "test"
})

//Connects to my database (PostGres)
client.connect();

//Spits out the whole data table
function dropDB(){
    client.query(`Select * from data`)
        .then(res => console.log(res.rows))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}

//insert a new element to the table
function insertToDB(firstName, lastName, birthday, info){
    client.query(`INSERT INTO data ("firstName", "lastName", birthday, info) VALUES ('${firstName}', '${lastName}', '${birthday}', '${info}');`)
        .then(res => console.log(`${firstName} ${lastName} was successfully inserted into the database`))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}

//deletes an element from the table
function deleteFromDB(firstName, lastName){
    client.query(`DELETE FROM data WHERE "firstName"='${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(`${firstName} ${lastName} was successfully deleted from the database`))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}


//--------------------------------------
//  Getters n Setters
//--------------------------------------

//Gets everyone in the database
function getEveryone(){
    //     .then(res => console.log(`Everyone in the Database: ${res.rows}`))??????

    console.log(`Getting everyone in the Database:`)
    client
     .query(`Select "firstName", "lastName" from data`)
     .then(res => console.log(res.rows))
     .catch(err => console.error(err.message))
     .then(() => client.end())
}

//Gets All data from a person
function getPerson(firstName, lastName){

    console.log("--------------------------------");
    console.log(`${firstName} ${lastName}:`);
    console.log("--------------------------------");

    client
        .query(`SELECT * FROM data WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(res.rows))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}

//Gets the person or persons that have the inputed name
function getName(name){
    console.log("--------------------------------");
    console.log(`${name}:`);
    console.log("--------------------------------");
    client
        .query(`SELECT "firstName", "lastName" FROM data WHERE "firstName"= '${name}' or "lastName"= '${name}';`)
        .then(res => console.log(res.rows))
        .catch(err => console.error(err.message))
        .then(() => client.end())

}

//Gets info from the inputed person
function getInfo(firstName, lastName){

    console.log("--------------------------------");
    console.log(`${firstName} ${lastName} Information:`);
    console.log("--------------------------------");

    client
        .query(`SELECT info FROM data WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(res.rows))
        .catch(err => console.error(err.message))
        .then(() => client.end())

}

//Gets the inputed persons birthday
function getBirthday(firstName, lastName){
    //console.log(`${firstName} ${lastName}'s birthday is on the: ${res.rows.birthday}`)) ???
    client
        .query(`SELECT birthday FROM data WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(res.rows))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}

//Updates the inputed persons first name 
function setFirstName(firstName, lastName, newFirstName){
    client
        .query(`UPDATE public.data SET "firstName" = '${newFirstName}' WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(`${firstName} ${lastName} first name was updated`))
        .catch(err => console.error(err.message))
        .then(() => client.end())

}

//Updates the inputed persons last name
function setLastName(firstName, lastName, newLastName){
    client
        .query(`UPDATE public.data SET "lastName" = '${newLastName}' WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(`${firstName} ${lastName} last name was updated`))
        .catch(err => console.error(err.message))
        .then(() => client.end())

}

//Updates the inputed persons information
function setInfo(firstName, lastName, info){
    client
        .query(`UPDATE public.data SET info = '${info}' WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(`${firstName} ${lastName}'s information was updated`))
        .catch(err => console.error(err.message))
        .then(() => client.end())

}

//Updates the inputed persons birthday
function setBirthday(firstName, lastName, birthday){
    client
        .query(`UPDATE public.data SET birthday = '${birthday}' WHERE "firstName"= '${firstName}' and "lastName"= '${lastName}';`)
        .then(res => console.log(`${firstName} ${lastName}'s birthday was updated to: ${birthday}`))
        .catch(err => console.error(err.message))
        .then(() => client.end())
}
//--------------------------------------
//--------------------------------------








//--------------------------------------
//  TODO
//--------------------------------------
// - Implement autoInc id (later if necessary)
// - FrontEnd (React Native)
// - getFirstName and getLastName into a single getter --> getSingleName (can be either)
// - the getters cannot be void they have to return the json!! figure out how to do that
/*
        let birthdayBarbosa = getBirthday('tomas', 'barbosa')
        console.log(birthdayBarbosa);
*/
// - create Repo on Github



