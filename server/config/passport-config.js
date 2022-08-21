const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../model/User');

module.exports = (passport) => {
    const customFields = {
        usernameField: 'uniqueId',
        passwordField: 'password'
    };
    
    const verifyCallback = async (username, password, done) => {
        try
        {
            console.log('[*] Username : '+username);
            console.log('[*] Password : '+password);
            const user = await User.findById(username).populate('userInfo').exec();
            console.log(user);
            if(!user) 
            {
                console.log('[-] User not found !');
                return done(1, false);
            }
            if(password === user.password)
            {
                console.log('[+] Password matched !');
                return done(null, user);
            }
            else
            {
                console.log('[-] Password didnt match !');
                return done(2, false);
            }
        }
        catch(err)
        {
            console.log('[-] Error in passport config strategy');
            console.dir(err);
            done(3, false);
        }
    }
    
    passport.use(new LocalStrategy(customFields, verifyCallback));
    
    passport.serializeUser((user, done) => {
        console.log("Serializing now");
        done(null, user.id);
    });
    
    passport.deserializeUser(async (userId, done) => {
        console.log("Deserializing now");
        try
        {
            const user = await User.findById(userId).populate('userInfo').exec();
            done(null, user);
        }
        catch(err)
        {
            console.log('[-] Error in passport config deserialization');
            console.dir(err);
            done(null, false);
        }
    });  
}