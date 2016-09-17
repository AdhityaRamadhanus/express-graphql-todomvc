module.exports = (dbURI, mongoose) => {
  mongoose.connect(dbURI) 
  mongoose.connection.on('connected', function () {
    console.log('Connected to MongoDB at ', dbURI)
  })
  mongoose.connection.on('error', function (err) {
    console.log('Mongoose got error : ' + err)
  })
  mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected')
  })
  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log('Disconnected from MongoDB')
      process.exit(0)
    })
  })
  require('../models/todo')
}
