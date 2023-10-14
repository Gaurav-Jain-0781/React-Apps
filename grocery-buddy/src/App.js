import React, { useEffect, useState } from "react";
import List from "./List";
import Alert from "./Alert";
import { clear } from "@testing-library/user-event/dist/clear";

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isedit, setIsEdit] = useState(false);
  const [editIt, setEditId] = useState();
  const [alert, setAlert] = useState({show : false, message : '', type: ''})

  const handelSubmit = (e) => {
    e.preventDefault()
    if(!name){
      setAlert({show: true, message: 'Please Enter Value', type: 'danger'})
    }
    else if(name && isedit){

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
    setAlert({show: true, message: 'Items removed Successfully', type: 'success'})
    setList([])
  }

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
          <List items={list} />
          <buuton className='clear-btn' onClick={clearItems}>Clear Item</buuton>
        </div>
      }
    </section>
  );
}

export default App;
