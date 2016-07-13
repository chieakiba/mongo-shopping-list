exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    process.env.NODE_ENV === 'production'
'mongodb://localhost/shopping-list':
'mongodb://chieakiba:Etoile921mlab@ds015892.mlab.com:15892/mongo-shopping-list';
exports.PORT = process.env.PORT || 8080;
