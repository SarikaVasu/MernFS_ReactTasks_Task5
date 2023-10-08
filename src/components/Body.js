import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
const Body = ({date,setDate,age,setAge}) => {

    const calAge = () => {
        let dateInput = new Date(date);
        let dayAge = new Date().getDate() -dateInput.getDate();
        let monthAge = (new Date().getMonth() + 1)-dateInput.getMonth();
        let tempAge =  new Date().getFullYear() - dateInput.getFullYear();
        tempAge = monthAge < 0 ? tempAge - 1
            : monthAge === 0 ? 
            ( 
                dayAge < 0 ? tempAge - 1 
                : tempAge
            ) : tempAge ;
        setAge(tempAge);
        document.getElementById("result").style.display="flex"; 
    }

    useEffect(() => {
        document.getElementById("result").style.display="none";    
    },[date])

  return (
    <main>
        <h6>Enter your date of birth</h6>
        <input 
            type="date" 
            name="date" 
            id="date" 
            value = {date}
            onChange = {(e) => setDate(e.target.value)}/>
        <button 
            className="btn btn-primary mt-3" 
            name="button" id="button" 
            onClick={calAge}>
                Calculate Age
        </button>
        <h2 className='result' id='result'>You are {age} {age === 1 ? 'year' : 'years'} old</h2>
    </main>
  )
}

export default Body;