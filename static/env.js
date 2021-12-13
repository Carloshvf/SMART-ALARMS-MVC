const AWS_URL = "http://localhost:5000"
var ProcessEnv = {
    BASE_URL:AWS_URL
}

window.processEnv = ProcessEnv;

var HOST = window.location.host;

if(HOST === 'localhost:3000' || HOST === 'localhost:3100') {
    window.processEnv.BASE_URL = AWS_URL;
} else if(HOST === 'smartalarms-dev.transformacaodigitalspassu.com.br:3100') {
    window.processEnv.BASE_URL = AWS_URL;
} else if (HOST === 'smartalarms-hmg.petrobras.com.br') {
    window.processEnv.BASE_URL = 'https://smartalarms-backend-hmg.petrobras.com.br';
} else {
    window.processEnv.BASE_URL = 'http://localhost:5000';
}

