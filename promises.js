//  Promise é um objeto usado para processamento assíncrono.
// Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.


// Como criar uma Promises 

// A função que recebe dois argumentos resolve e reject.

//  As funções "resolve" e "reject", quando chamadas, resolvem (em caso de sucesso)
// ou rejeitam (quando ocorre um erro) a promessa, respectivamente.

const aPromise = new Promise((resolve, reject) => {
    const aNumber = 37
    //resolve(aNumber)
    reject(aNumber)
})

//  O "Then" é responsável por receber a resposta de sucesso da Promise.
// O "Cath" é responsável por receber a resposta de erro da 
// Promise/Then.

aPromise
    .then(value => value)
    .then( value => {console.log(value)})
    .catch(rejectValue => {
        console.log(rejectValue)
    })