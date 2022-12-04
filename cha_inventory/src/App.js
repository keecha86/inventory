import './App.css';
import axios from 'axios'
import Items from "./components/Items"
import { useState, useEffect } from 'react'
import Form from './components/Form';


const API_URL = 'http://localhost:8000/api/v1/'

function getAPIData() {
  return axios.get(`${API_URL}items`).then((response) => response.data)
}

function postAPIData(newItem) {
  return axios.post(`${API_URL}items/`, newItem).then((response)=> response)
}

async function deleteAllData(itemsArray) {
  const request = axios.delete(`${API_URL}items/delete_all/`, { data: itemsArray })
  return await request.then((response) => { return response})
}
function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
    // TODO: add to sessionStorage to avoid api fetch request
    getAPIData().then((items) => {
      setItems(items)
    })
  }, [])

  const addInventoryItem= (newItem) => {
    let newItemObj = {item_name: newItem, quantity: 1}
    postAPIData(newItemObj)
  }

  return (
    <div className="App">
      <Items items={items} apiRequest={deleteAllData} />
      <Form clickHandler={addInventoryItem} btnNameValue={'Add Item'} />
    </div>
  );
}

export default App;
