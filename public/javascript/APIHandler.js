
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
    .get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios
     .get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return axios
    .post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (id, newCharacter) {
    return axios
    .put(`${this.BASE_URL}/characters/${id}`, newCharacter)
  }

  deleteOneRegister (id) {
    const toDelete = confirm('Are you sure you want to delete?');

    if(toDelete) { 
    return axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    }
  }
}
