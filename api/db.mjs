import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    database:"myblog",
    password:""
})

connection.connect(err =>{
    if(err) {
        console.error('Error connecting', err)
        return
    }
    console.log('connected to mysql')
})

export default connection