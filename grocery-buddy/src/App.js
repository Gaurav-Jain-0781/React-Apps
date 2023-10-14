import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else{
    return []
  }
}

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isedit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState();
  const [alert, setAlert] = useState({show : false, message : '', type: ''})

  const handelSubmit = (e) => {
    e.preventDefault()
    if(!name){
      setAlert({show: true, message: 'Please Enter Value', type: 'danger'})
    }
    else if(name && isedit){
      setList(list.map((item) => {
        if(item.id === editId){
          return {...item, title: name}
        }
        else{
          return item
        }
      }))
      setName('')
      setEditId(null)
      setIsEdit(false)
      setAlert({show: true, message: 'Value Changed', type: 'success'})
    }
    else{
      setAlert({show: true, message: 'Item added Successfully', type: 'success'})
      const newItem = {id : new Date().getTime().toString(), title : name }
      setList([...list, newItem])
      setName('')
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert({show: false, message: '', type: ''})
    }, 2000)

    return () => clearTimeout(timeout);
  }, [alert])

  const clearItems = () => {
    setAlert({show: true, message: 'Items removed Successfully', type: 'danger'})
    setList([])
  }

  const removeItem = (id) => {
    setAlert({show: true, message: 'Item removed Successfully', type: 'danger'})
    setList(list.filter((item) => {
      return item.id !== id
    }))
  }

  const editItem = (id) => {
    const item = list.find((item) => item.id === id);

    setIsEdit(true)
    setEditId(id)
    setName(item.title);
  }

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <section className="section-center">
      <form className='grocery-form' onSubmit={handelSubmit}>
        {(alert.show) ? <Alert {...alert}/> : null}
        <h3>Grocery Buddy</h3>
        <div className="form-control">
          <input type='text' className="grocery" placeholder="e.g. Egg" value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit' className='submit-btn'>{(isedit) ? 'Edit' : 'Submit'}</button>
        </div>
      </form>
      {(list.length === 0) ? null :  
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <buuton className='clear-btn' onClick={clearItems}>Clear Item</buuton>
        </div>
      }
    </section>
  );
}

export default App;
