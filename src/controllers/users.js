var User = require("../models/User");

module.exports = {
  create: (user, callback) => {
    if (!user.username || !user.firstname || !user.lastname)
      return callback(new Error("Wrong user parameters"), null);

    User.findOne({username: user.username}, function(err, data) {
      if (err || data !== null)
        return callback(new Error("This user exists"), null);

      var createdUser = new User({
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname
      });
      createdUser.save(function(err) {
        if (err)
          return callback(
            new Error(`Error: couldn't save user in database`),
            null
          );
        callback(null, user.username);
      });
    });
  },
  get: (username, callback) => {
    User.findOne({username: username}, function(err, data) {
      if (err)
        return callback(
          new Error(`Error: couldn't find user in database`),
          null
        );
      console.log(data);
      callback(null, data);
    });
  }
};
