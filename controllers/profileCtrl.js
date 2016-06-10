/**
 * Created by cjpowers on 6/10/16.
 */
var profiles = [
    {
        name: 'Preston McNeil',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/1117694_1614542_108355616_q.jpg',
        status: 'Everything is bigger in Texas'
    },
    {
        name: 'Ryan Rasmussen',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash4/211536_7938705_80713399_q.jpg',
        status: 'RR Rules'
    },
    {
        name: 'Terri Ruff',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41368_8222994_4799_q.jpg',
        status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
    },
    {
        name: 'Lindsey Mayer',
        pic: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/173210_10024969_2137324550_q.jpg',
        status: 'OMG MITTENS DID THE CUTEST THING TODAY'
    }
];

module.exports = {
    index: function(req, res, next){
        for(var i = 0; i < profiles.length; i++){
            if(req.session.currentUser.name === profiles[i].name){
                var currentUser = profiles[i];
            }
        }
        var friends = req.session.currentUser.friends;
        var friendProfiles = [];
        for(var i = 0; i < friends.length; i++){
            for(var i2 = 0; i2 < profiles.length; i2++){
                console.log(friends[i], " ", profiles[i2].name);
                if(friends[i] === profiles[i2].name){
                    friendProfiles.push(profiles[i2]);
                }
            }
        }
        res.send({
            currentUser: currentUser,
            friends: friendProfiles
        })
    }
}