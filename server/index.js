require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 6000


<<<<<<< HEAD
=======


>>>>>>> 8452915f270c1f8ce6f21e84f93ee16b590c5510
const app = express()
app.use(cors({
	// origin: 'http://localhost:3000',
	// credentials: true,
}))
// app.options('*', cors());
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler)

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started  on port ${PORT}`))
	} catch (error) {
		console.log(error);
	}
}

start()