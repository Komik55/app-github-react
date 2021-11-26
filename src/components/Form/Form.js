import React,{useState} from 'react'
import './Form.css';
import SearchIcon from './search.svg'
import User from '../User/User';
 function Form(props) {
    const [value,setValue] = useState('');
    const [search,setSearch] = useState(true);
    const [data,setData] = useState([]);
    const [show,setShow] = useState(false);
    const handleSub = e =>{
      e.preventDefault();
      fetch(`https://api.github.com/users/${value}`)
      .then(res => res.json())
      .then(data =>{
         if(!data.message){
            setData(data);
         }
      })
      setValue('');
      setSearch(true);
      setShow(true);

    }
    const handleChange = e =>{
       setValue(e.target.value);
       setSearch(false);
       if(e.target.value !== ''){
          setSearch(false);
       }else{
          setSearch(true);
       }
    }
    return (
       <>
   <form onSubmit={handleSub}>
      <div>
         <input type="text"
          className="inp" 
          value={value} 
          onChange={handleChange}
           placeholder="Search..." 
           required/>
         <img src={search ? SearchIcon : null}
          className="searchIcon"/>
     </div>
     {
        show ? <User {...data} /> : null
     }
   </form>
       </>
    )
}

export default Form;