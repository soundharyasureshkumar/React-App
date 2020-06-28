import React,{Component} from 'react';
import './App.css';
import Login from './components/Login';
import fire from './config/firebase';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      var googleSigninFlag=0;
      if(user){
        this.setState({user})
        console.log("inside signedin");
        document.getElementById("loginloader").style.display="";
        document.getElementById("loginbtn").style.pointerEvents="none";
        document.getElementById("loginbtn").style.cursor="unset";
        document.getElementById("loginbtn").style.background="#959595";
      
        if (user != null) {
  
          // var email_id = user.email;
          // document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
          // alert("user signed in" + user.displayName);
          debugger;
          
          localStorage.setItem("name", user.displayName);
          localStorage.setItem("email", user.email);
          localStorage.setItem("id", user.uid);
          localStorage.setItem("verified", user.emailVerified);
         
           var dref = fire.database().ref("users/" + user.uid +"/phone/");
            dref.once('value', function (snapshot) {
                 localStorage.setItem("phone", snapshot.val());
                  if (user.displayName !== null && user.emailVerified !== false) {
            
        
              if( googleSigninFlag === 1 ){
                var dbref = fire.database().ref("users/" + user.uid);
                dbref.update({
                  "email": user.email
                });
                if(localStorage.getItem("phone")!=null){
                    window.location.assign("productselection.html");
                }
                
            
              
          }
        }
        else{
        user.sendEmailVerification().then(function() {
        
           window.location.assign("/creationtool/verify");
        }).catch(function(error) {
          document.getElementById("errorsignin").innerHTML="please verify your email and reload the page to continue";
        window.location.assign("/creationtool/verify");
        });
        
        }
            });
    
        }




      }
      else{
        this.setState({user : null})
        console.log("inside signedout");
      }
    })
  }
  render(){
      return (
    <div className="App">
     <Login></Login>

    </div>
  );
  }

}

export default App;
