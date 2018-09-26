const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')
var session = require('express-session')
const app = express()
const router = express.Router()
var path = require('path');
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/post"
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
/** configure cloudinary */
cloudinary.config({
					  cloud_name: 'YOUR_CLOUDINARY_NAME_HERE',
					  api_key: 'YOUR_CLOUDINARY_API_KEY_HERE',
					  api_secret: 'YOUR_CLOUDINARY_API_SECRET_HERE'
				  })

/** connect to MongoDB datastore */
try {
	mongoose.connect(url, {
		//useMongoClient: true
		useNewUrlParser: true
	})
} catch (error) {

}
/**session*/
var MongoStore  = require('connect-mongo')(session);
// app.use(express.cookieParser()); // required to handle session cookies!
app.use(session({
							secret  : 'YOUR_SESSION_SECRET',
					saveUninitialized: false, // don't create session until something stored
					resave: false, //don't save session if unmodified
							cookie  : {
								maxAge  : 1000000              // expire the session(-cookie) after 10 seconds
							},
							store   : new MongoStore({ url:url
														 //db: 'sessionstore'
													 })
						}));

/**/
let port = 5001 || process.env.PORT

/** set up routes {API Endpoints} */
routes(router)

/** set up middlewares */
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
//app.use('/static',express.static(path.join(__dirname,'static')))

app.use('', router)

/** start server */
app.listen(port, () => {
	console.log(`Server started at port: ${port}`);
});
module.exports=app;