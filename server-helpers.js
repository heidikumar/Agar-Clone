//This will be a file to route information between the database and the client

var db = require('models.js');

//example function to send all user data from database

exports.sendUsers = function(){

};

exports.sendFriends = function(username){
  var friendsIDArray = [];
  var friendsNameArray = [];

  //I am trying to use Sequelize's then chaining to handle asynch.
  //Not sure if I can do that, but if not we can require bluebird.
  //Didn't jump into bluebird because then all "then" statments change which lib they use.

  //ALSO NEED TO ADD ERROR HANDLING!

  db.Friendship.findAll({where: {user1: user.id}}).then(function(friendIDs){
    for (var i=0; i<friendsArr.length; i++){
      friendsIDArray.push(friendIDs[i].user2);
    };

    db.Friendship.findAll({where: {user2: user.id}}).then(function(friendsArr){
      for (var i=0; i<friendsArr.length; i++){
        friendsIDArray.push(friendIDs[i].user1);
      };
    }).then(
      //translating all the user ids to names
      for (var i=0; i<friendsIDArray.length; i++){
        db.User.findOne({where: {id: friendsIDArray[i]}}).then(function(user){
          friendsNameArray.push(user.username);
        });
      };
    ).then(
      return friendsNameArray;
    )
  });
};

exports.sendDeath = function(finalStats){

  //final stats object needs to be written to database

  //CHECK ALL NAMES HERE. WE ARE STILL SYNCING UP WITH ONE ANOTHER
  //this should add to the database without needing to continue with the promise.
  db.TotalStats.findOne({where: {key:user.id}}).then(function(currentStats){
    currentStats.lifetime += finalStats.lifetime;
    currentStats.score += finalStats.score;
    currentStats.mass += finalStats.mass;
    currentStats.totalKills += finalStats.totalKills;
    currentStats.totalFood += finalStats.totalFood;
    currentStats.timeInFirst += finalStats.timeInFirst;
  });

  db.bestStats.findOne({where: {key:user.id}}).then(function(bestStats){
    if (finalStats.lifetime > bestStats.lifetime){
      bestStats.lifetime += finalStats.lifetime;
    }
    if (finalStats.score > bestStats.score){
      bestStats.score += finalStats.score;
    }
    if (finalStats.mass > bestStats.mass){
      bestStats.mass += finalStats.mass;
    }
    if (finalStats.totalKills > bestStats.totalKills){
      bestStats.totalKills += finalStats.totalKills;
    }
    if (finalStats.totalFood > bestStats.totalFood){
      bestStats.totalFood += finalStats.totalFood;
    }
    if (finalStats.timeInFirst > bestStats.timeInFirst){
      bestStats.timeInFirst += finalStats.timeInFirst;
    }
  });

  //for now I haven't set this to send something back to the client.
};

exports.newPlayer = function(clientInfo){

};



