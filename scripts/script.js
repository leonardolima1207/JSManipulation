document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    
    // alert("A página foi totalmente carregada e js foi implantado!")

    const form = document.querySelector('form')
    form.addEventListener('submit', loadUserData)
    
    // chamando a função para carregar os usuários
    loadUserDataList();

})


function loadUserData(event) {
    event.preventDefault();

     let listUser = [] //array - vetores


//   capturando valores e colocando eles dentro de um objeto (userData)
  
    const userData = {

        
        // capturando os valores e colocando eles dentro das propriedades ou também atributos.
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age:document.getElementById('age').value

    }

    if(localStorage.getItem('users')) {
        listUser = JSON.parse(localStorage.getItem('users'))

    }
    
    listUser.push(userData)
    localStorage.setItem('users', JSON.stringify (listUser) )
    
    
    console.log(listUser);
     window.location.reload();
}


const loadUserDataList = () => {

    const tableData = document.getElementById('tableBodyList');

    if (localStorage.getItem('users')) {
       const listUsers = JSON.parse(localStorage.getItem('users')) //json -> objeto

       let template = ''

       listUsers.forEach(user => {
        template += `
            <tr>
                <td> ${user.name} </td>
                <td> ${user.email} </td>
                <td> ${user.age} </td>
            </tr>
        
        `



         });
        tableData.innerHTML = template

       }else{
            alert('nenhum usuário cadastrado')
       }

    }

