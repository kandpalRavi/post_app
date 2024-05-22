function Todo (){
    const [text,setText] = useState("");
    const [todos,setTodos] = useState([]);
    const handleAdd =()=>{
      setTodos([...todos,
        {
          id: Date.now().toString(),
          title:text,
          status:false
        }
      ])
    }
    return(
        <>
        <div>
        <input value={text} onChange={e=>setText(e.target.value)}/>
        <button onClick={handleAdd} >ADD</button>
       </div>
       <ul>
        {
          todos.map(item => <li key={item.id}>{item.title}</li>)
        }
       </ul>
       </>
    )
}