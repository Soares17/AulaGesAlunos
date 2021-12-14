/*function insertData(){
    fetch('http://localhost:3000/db')
    .then(res => res.json())
    .then(data => getData(data))
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getData(data){
        const divCidades = document.getElementById('tblCidades')
        divCidades.innerHTML = ''
            for(let i = 0; i < 200; i++){
                let nome = data[i].Name
                let distrito = data[i].District
                let pop = data[i].Population
                divCidades.innerHTML += `<tr>
                                            <td>${nome}</td>
                                            <td>${distrito}</td>
                                            <td>${pop} Pessoas</td>
                                            <td> <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
                                            <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
                                            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
                                          </td>
                                        </tr>`
            }
    }*/

function initForm(){
    getNavbar();
    getTipos(); 
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function getTipos(){
    const tipo = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res => res.json())
    .then(data => {
        for (i in data) {
            let op = `<option value=${data[i].idtipo}>${data[i].nometipo}</option>`
            tipo.innerHTML += op
        }
    })
    .catch(function(err){
        alert('Erro no pedido...')
    })
}

function inserir(){
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let username = document.getElementById('username').value
    let morada = document.getElementById('morada').value
    let telemovel = document.getElementById('telemovel').value
    let datanasc = document.getElementById('datanasc').value
    let idtipo = document.getElementById('idtipo').value

   //criar um objeto com os valores
   let objeto ={
    nome: nome,
    email: email,
    username: username,
    morada: morada,
    telemovel: telemovel,
    datanascimento: datanasc,
    idtipo: tipo
}

//transformar o obgjeto em JSON
let objetoJSON = JSON.stringify(obj)
//preparar as opçoes do pedido
const options = {
    method:'POST',
    Headers: {
        'Content-type': 'application/json'
    },
    boddy: objetoJSON
}
//fazer fetch com as opçoes acima definidas
fetch('http://localhost:3006/inserirAlunos',options)
.then(res => res.text())
.then(text =>{
    alert(text)
})
.catch((err)=>{
    alert('Ocorreu um erro no pedido...')
})
}
