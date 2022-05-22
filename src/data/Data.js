import axios from 'axios';

const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
const dataM = ''

requisicao.then(resposta => {
    dataM = resposta.data 
});

export default dataM;