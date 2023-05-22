//Here we will define everything with db
const mongoose = require('mongoose');

// mongo-atlas-url = 'mongodb+srv://kamal:<password>@cluster0.rbyy9bd.mongodb.net/?retryWrites=true&w=majority

module.exports = () => mongoose.connect(process.env.MONGODB_URI)
    .then(
        () => console.log('Connected to DB')
    )
    .catch(
        (err) => {
            //this promise will log and throw Error if it not connected to DB
            console.error(`Connection Error ${err}`);
            //Crashes the app if it is not connecting to DB
            throw err;
        }
    );
