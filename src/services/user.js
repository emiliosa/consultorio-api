const user = require('../models/user');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Async function to get the User List
exports.getUsers = async function (query, page, limit) {
  // Try Catch the awaited promise to handle the error 
  try {
    // Return the Userd list that was retured by the mongoose promise
    return await user.paginate(query, { page, limit });

  } catch (e) {
    // return a Error message describing the reason 
    throw Error('Error while Paginating Users');
  }
};

// Async function to get User by id
exports.getUserByDni = async function (dni) {
  // Try Catch the awaited promise to handle the error 
  try {
    const query = { 'dni': dni };
    return await user.find(query);

  } catch (e) {
    // return a Error message describing the reason 
    throw Error('Error while Paginating Users');
  };
}

exports.createUser = async function (attributes) {
  // Creating a new Mongoose Object by using the new keyword
  // var hashedPassword = bcrypt.hashSync(user.password, 8);

  try {
    console.log(attributes);
    return await (new user({
      nombre: attributes.nombre,
      apellido: attributes.email,
      fecha_nacimiento: attributes.fecha_nacimiento,
      dni: attributes.dni,
      email: attributes.email,
      password: attributes.password,
      role: attributes.role,
    })).save();
    // var savedUser = await user.save();
    // var token = jwt.sign({
    //     id: savedUser._id
    // }, process.env.SECRET, {
    //     expiresIn: 86400 // expires in 24 hours
    // });
    // return token;
  } catch (e) {
    // return a Error message describing the reason 
    console.log(e);
    throw Error("Error while Creating User");
  }
}

exports.updateUser = async function (dni, attributes) {
    var id = user.id
    try {
        //Find the old User Object by the Id
        var oldUser = await User.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    // If no old User Object exists return false
    if (!oldUser) {
        return false;
    }
    //Edit the User Object
    oldUser.name = user.name
    oldUser.email = user.email
    oldUser.password = user.password
    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

// exports.deleteUser = async function (id) {

//     // Delete the User
//     try {
//         var deleted = await User.remove({
//             _id: id
//         })
//         if (deleted.n === 0 && deleted.ok === 1) {
//             throw Error("User Could not be deleted")
//         }
//         return deleted;
//     } catch (e) {
//         throw Error("Error Occured while Deleting the User")
//     }
// }


// exports.loginUser = async function (user) {

//     // Creating a new Mongoose Object by using the new keyword
//     try {
//         // Find the User 
//         var _details = await User.findOne({
//             email: user.email
//         });
//         var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
//         if (!passwordIsValid) throw Error("Invalid username/password")

//         var token = jwt.sign({
//             id: _details._id
//         }, process.env.SECRET, {
//             expiresIn: 86400 // expires in 24 hours
//         });
//         return token;
//     } catch (e) {
//         // return a Error message describing the reason     
//         throw Error("Error while Login User")
//     }

// }