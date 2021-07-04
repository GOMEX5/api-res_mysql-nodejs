const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('Api listening on https://localhost:'+app.get('port'));
});