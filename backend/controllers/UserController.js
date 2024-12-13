const User = require("../model/UserModel");
const History = require("../model/Historymodel");


const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const claimPoints = async (req, res) => {
  const { userId } = req.params;
  const randomPoints = Math.floor(Math.random() * 10) + 1;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.totalPoints += randomPoints;
    await user.save();
    const history = new History({ userId, pointsClaimed: randomPoints });
    await history.save();

    res.json({ message: 'Points claimed', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const addUser = async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = new User({ name });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getUsers, claimPoints, addUser };
