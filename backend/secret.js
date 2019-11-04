const secrets = {
  dbUri: "mongodb+srv://ergastAdmin:2foi3vai7zdp@cluster0-dkrcl.mongodb.net/test?retryWrites=true&w=majority"
};

const getSecret = key => secrets[key];

module.exports = getSecret;
