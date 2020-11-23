 //const BASE_API = 'https://enderecodaapi.com.br';

{/*  
 export default {
     checkLogin: async(token) => {
        const req = await fetch('${BASE_API}/auth/login', {  // endereço da autenticação
            method:'POST', //metodo
            header:{
                 Accept:'application/json',
                'Content-Type':'application/json' //formato json
            },
            body: JSON.stringify({token}) //conteudo que vou estar mandando, (email e password)
        });
        const json = await req.json();//tranformando resposta em json
        return json;

     },


     Login: async() => {
        const req = await fetch('${BASE_API}/auth/login', {
            method:'POST', //metodo
            header:{
                 Accept:'application/json',
                'Content-Type':'application/json' //formato json
            },
            body: JSON.stringify({email,password}) //conteudo que vou estar mandando, (email e password)
        });
        const json = await req.json();//tranformando resposta em json
        return json;
    },


    Cadastro: async(nome, email,telefone, senha) => { // oque sera recebido pela API (nome, email,telefone, senha)
        const req = await fetch('${BASE_API}/user', {
            method:'POST', //metodo
            header:{
                 Accept:'application/json',
                'Content-Type':'application/json' //formato json
            },
            body: JSON.stringify({nome, email,telefone, senha}) //conteudo que vou estar mandando, (email e password)
        });
        const json = await req.json();//tranformando resposta em json
        return json;
    },
 }
 Um comentário JSX. */}