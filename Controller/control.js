const User = require('../Model/model')
const { validationResult } = require('express-validator');

exports.register = async (req, res) => {
    try {
        const {
            names,
            email,
            password,
            phoneNumber,
        } = req.body
        // if(names == ""){
        //     throw new Error('name must be not empty')
        // }

        // if (names.length < 3) {
        //     throw new Error('name must be more than three letters')
        // }

        // const error = validationResult(req);
        // console.log(error);
        // res.status(404).json({message: error.errors[0].msg})

        const user = new User({
            names,
            email,
            password,
            phoneNumber,
        })

        const validationError = user.validateSync();

        if (validationError) {
            let errors = [];
            for (const field in validationError.errors) {
                console.log(`${field}: ${validationError.errors[field].message}`);
                errors.push(`${validationError.errors[field].message}`);
                // res.status(400).json({message:`${field}: ${validationError.errors[field].message}`});
            }
            res.status(505).json({message:errors});
        } else {
            User.create(user)
            console.log('User is valid');
            res.status(200).json({message: "User Created Woooooooooooooo"});
        }






    } catch (error) {
        res.status(400).json({ message: error.message })

    }

}

