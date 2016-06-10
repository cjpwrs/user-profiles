angular.module('userProfiles')
.factory('friendService', function( $http ) {
  return {
    
    login: function( user ) {
      console.log(user);
      var newUser = {
        "name": user.userName,
        "password": user.password
      }
      console.log(newUser);

      return $http({
        method: 'POST',
        url: '/api/login',
        data: {
          "name": user.userName,
          "password": user.password
        }
      })
    },

    getFriends: function() {
    	return $http.get('/api/profiles')
    }
  }
});