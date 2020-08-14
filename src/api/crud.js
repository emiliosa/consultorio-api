const User = require("./../src/User.model");

const getAll = async () => {
  users = await User.find();
  return users;
};

const addOne = async (id, age, hobby) => {

  const user = new User({
    username: id,
    age: age,
    hobbies: hobby
  });

  await user.save().then(() => { console.log(`User ${id} added!`); return "success"; })
    .catch((e) => { console.log(e); return "error"; });

};

module.exports = { getAll, addOne };