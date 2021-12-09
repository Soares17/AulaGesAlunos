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
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
    .catch(function(err){
        alert('Ocorreu um problema...')
    })
}

function initForm(){
    getNavbar();
    getTipos(); 
}