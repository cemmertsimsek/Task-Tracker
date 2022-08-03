import AddTaskForm from "./AddTaskForm";
import { useState } from "react";


const Header = ({tasks, setTasks}) => {
  const [show, setShow] = useState(false);
  const [btnStyle, setBtnStyle] = useState({
    name: 'SHOW ADDTASK BAR',
    bgColor: 'purple',
  });
  const handleShow = () => {
    if(show){
      setBtnStyle({
        name: 'SHOW ADDTASK BAR',
        bgColor: 'purple',
      })
    }else{
      setBtnStyle({
        name: 'CLOSE ADDTASK BAR',
        bgColor: 'red',
      })
    }
    setShow(!show)
  };

  return (
  <header className="header">
    <h1>TASK TRACKER</h1>
    <button 
      onClick={handleShow} 
      className="btn" 
      style={{backgroundColor: btnStyle.bgColor}}>
      {btnStyle.name}
    </button>
    {show && <AddTaskForm tasks={tasks} setTasks={setTasks} />}
  </header>
  );
};


export default Header;