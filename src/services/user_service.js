

export const userService = {
    getUsers,
    deleteUser
};

const  headers = { 'Content-Type': 'application/json' }
const urlApi = 'http://localhost:5000'


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

