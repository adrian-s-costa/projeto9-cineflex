const requisicao = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
const data = ''

requisicao.then(resposta => {
    data = resposta.data 
});

console.log(data)

export default data;