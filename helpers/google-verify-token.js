
const {OAuth2Client} = require('google-auth-library');

const CLIENT_ID = '836290926727-oh1ftiijn1e509ebqjto2v4ovmhua4do.apps.googleusercontent.com';

const client = new OAuth2Client(CLIENT_ID);

const validarGoogleIdToken = async ( token ) => {

    try {

        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [
                CLIENT_ID,
                '836290926727-aa3n55ofrmftbf4a1uaop9ukds5jfea5.apps.googleusercontent.com'
            ],  
        
        });
        const payload = ticket.getPayload();

        console.log('========== PAYLOAD ==========');
        console.log( payload );

        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email'],
            

        }
        
    } catch (error) {
        return null;
        
    }

    


}

module.exports = {
    validarGoogleIdToken
}