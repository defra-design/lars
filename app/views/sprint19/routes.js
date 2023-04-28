const express = require('express')
const router = new express.Router()
//const {logOnPost} = require('../../../../lib/utils')


// Log session to console on POST requests
//router.use(logOnPost)


router.use((req, res, next) => {
 // res.locals.todayDate = getTestDate()
  next()
})

// router.get('/', (req, res) => {
//   res.redirect(`/${req.feature}/${req.sprint}/settings`)
// })
module.exports = router
