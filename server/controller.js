require('dotenv').config()
const { CONNECTION_STRING } = process.env
const Sequelize = require('sequelize')

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
})

module.exports = {
  getInputs: (req, res) => {
    sequelize
      .query(
        `
      SELECT * FROM
      input
      `
      )
      .then(dbRes => {
        res.status(200).send(dbRes[0])
      })
  },
  createInput: (req, res) => {
    let { text } = req.body
    sequelize
      .query(
        `
      INSERT INTO input(text)
      VALUES (${text})
      `
      )
      .then(dbRes => {
        res.status(200).send(dbRes[0])
      })
  },
}
