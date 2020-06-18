

export const userService = {
    getUsers,
    deleteUser,
    insertUser
};

const  headers = { 'Content-Type': 'application/json' }
const urlApi = 'http://localhost:5000'


function insertUser (data) {
  console.log('tentando salvar')
  return fetch(`${urlApi}/usuarios`, {
    method: 'POST',
    mode: 'cors',
    cache: 'default',
    headers: headers,
    body: JSON.stringify(data)
  })
}

function getUsers () {
    return fetch(`${urlApi}/usuarios`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: headers
    })
}

function deleteUser (id) {
  return fetch(`${urlApi}/usuarios/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    cache: 'default',
    headers: headers
  })
}

