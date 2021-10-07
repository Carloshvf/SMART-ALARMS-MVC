var ProcessEnv = {
    IMG:"nginx",
    PORT:"3200",
    STAGE:"local",
    BASE_URL:"https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000"
}

window.processEnv = ProcessEnv;

var HOST = window.location.host;

if(HOST === 'localhost:3000') {
    window.processEnv.BASE_URL = 'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000';
} else if(HOST === 'smartalarms-dev.transformacaodigitalspassu.com.br:3100') {
    window.processEnv.BASE_URL = 'https://api-smartalarms-dev.transformacaodigitalspassu.com.br:3000';
} else if (HOST === 'smartalarms-hmg.petrobras.com.br') {
    window.processEnv.BASE_URL = 'https://smartalarms-backend-hmg.petrobras.com.br';
} else {
    window.processEnv.BASE_URL = 'https://smartalarms-backend.petrobras.com.br';
}
console.log(window.location);
