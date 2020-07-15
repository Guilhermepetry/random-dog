//  A Fetch API fornece uma interface para buscar recursos (por exemplo, em toda a rede).
// O Fetch fornece uma definição genérica de objetos de Request e
// Response (e outras coisas envolvidas com solicitações de rede).

const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')
const dogDownloadImg = document.querySelector('[data-js="download-img"]')



const validateHTTPStatus = dogDate => {
    if(!dogDate.ok) {
        throw new Error(`HTTP error, status ${dogDate.status}`)
    }
    return dogDate.json()
}
// dogDate.json() Retorna um Promise

const setDogImg = ({ message: url }) => {
    dogImg.setAttribute('src', url)
    dogDownloadImg.setAttribute('href', url)
    dogDownloadImg.setAttribute('download', url)

}
// setDogImg Atribui a url no atribui 'src' da tag img

const handleRequestError = error => {
    console.log(error.message)
}
// handleRequestError Mostra um eventual erro.

fetch(url)
    .then(validateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)
