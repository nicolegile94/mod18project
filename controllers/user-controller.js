const { User } = require('../models');

const userController = {
    //get all Users
    getAllUser(req, res) {
        User.find({})
          .then(dbUserData => res.json(dbUserData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },
    
      //get user by ID
      getUserById({ params }, res) {
        User.findOne({ _id: params.id })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
      },

      //create user
      createUser({ body }, res) {
        User.create(body)
          .then(dbUserData => res.json(dbUserData))
          .catch(err => res.status(400).json(err));
      },

      //update user by id

      updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
      },

      //delete user

      deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
          .then(dbUserData => {
            if (!dbUserData) {
              res.status(404).json({ message: 'No user found with this id' });
              return;
            }
            res.json(dbUserData);
          })
          .catch(err => res.status(400).json(err));
      },

      addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId},
          { $addToSet: {friends: req.params.friendId } },
          { new: true })
          .then((dbUserData) => {
            if (!dbUserData) {
              return res.status(404).json({ message: 'No user with this id!' });
            }
            res.json(dbUserData);
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json(err);
          });
      },  

      removeFriend(req, res) {
        User.findOneAndUpdate(
          {_id: req.params.userId },
          { $pull: { friends: req.params.friendId } },
          { new: true }
        )
        .then((dbUserData) => {
          if (!dbUserData) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
          res.json(dbUserData);
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
      }
};

module.exports = userController;