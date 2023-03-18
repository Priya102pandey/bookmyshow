import react,{useState,useEffect} from 'react'
import './Login.css'

const SingnIn=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [Sccessfull,setSccessfull]=useState("");
  
    function validateForm() {
        let isValid = true;
    
       
       
    
        // Check that email field is filled out and in a valid format
        if (email === "") {
          setEmailError("Please enter your email");
          isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          setEmailError("Please enter a valid email address");
          isValid = false;
        } else {
          setEmailError("");
        }
    
        // Check that password field is filled out
        if (password === "") {
          setPasswordError("Please enter a password");
          isValid = false;
        } else {
          setPasswordError("");
        }
    
        return isValid;
      }
    
      function handleSubmit(event) {
        event.preventDefault();
        if (validateForm()) {
          // Call API to submit form data or submit form via AJAX
          setSccessfull("successfully SignUp")
        }
        // let temp =JSON.parse(localStorage.getItem('users')) || [];
        // localStorage.setItem('users',JSON.stringify([...temp,{email,password}]));
        localStorage.setItem('users',JSON.stringify({email,password}));
      }

      useEffect(()=>{
           let temp=localStorage.getItem('users')
            console.log(JSON.parse(temp))
      } ,[Sccessfull])
    return(
        <>
        <div  className="Main-Container">
                     <div><h4>Sign In</h4></div>
                <div>
                    <input type='text' placeholder="Email" className="input-login" onChange={(event) => setEmail(event.target.value)}/>
                    <div>{emailError}</div>
                </div>
                <div>
                    <input type='text' placeholder="Password" className="input-login"  onChange={(event) => setPassword(event.target.value)}/>
                    <div>{passwordError}</div>
                </div>
                <button className="btn-login" onClick={handleSubmit}>REGISTER</button>
                <div>{Sccessfull}</div>
        </div>
        </>
    )
}
export default SingnIn;