const router=require('express').Router()
const {register}=require('../Controller/control')
const { check} = require('express-validator');


router.post('/register'
// ,[
//     check('names')
//         .notEmpty()
//         .withMessage('name should not be empty')
//         .isLength({min:3})
//         .withMessage('name should not be less than three letters'),
//     check('email')
//     .notEmpty()
//      .withMessage('email should not be empty')
//      .isLength({min:3})
//     .withMessage('email should not be less than three letters')
    


// ]
,register)

module.exports=router