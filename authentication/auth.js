
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js"
  // import { getFirestore,collection,addDoc} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js"
  const firebaseConfig = {
    apiKey: "AIzaSyAirN8OZ1ySvBsU4uxargwF7cg5QWsQFW8",
    authDomain: "signup-and-login-page-35ecc.firebaseapp.com",
    projectId: "signup-and-login-page-35ecc",
    storageBucket: "signup-and-login-page-35ecc.firebasestorage.app",
    messagingSenderId: "6015295795",
    appId: "1:6015295795:web:499ba34908ac7899b11e46",
    measurementId: "G-N3LEB4RQ3F"
  };
  const app = initializeApp(firebaseConfig);
  const auth= getAuth(app);

  
    const signupBtn = document.getElementById('signup-btn');
    const loginBtn = document.getElementById('login-btn');

    signupBtn.addEventListener('click',() => {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();

    })

    const submitSignup = document.getElementById('submitSignup')
    submitSignup.addEventListener("click",async()=>{
        let username=document.getElementById("username").value.trim();
        let email=document.getElementById("email").value.trim();
        let password=document.getElementById("password").value.trim();

        if(username==="" || email==="" || password===""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields!'
            })
            .then(()=>{
              modal.show()
            })

            return;
    
  }
    try{
            await createUserWithEmailAndPassword(auth,email,password).then(()=>{
            Swal.fire({
                title: "Registered Successfully!!",
                icon: "success",
                
              }).then(()=>{
                    document.getElementById("username").value=""
                    document.getElementById("email").value=""
                    document.getElementById("password").value=""

                    location.href="../../dashboard/dashboard.html"

              })

            })
        }catch(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          })
    }
  
  })




           

    loginBtn.addEventListener('click',async() => {
        const modal = new bootstrap.Modal(document.getElementById('exampleModal2'));
        modal.show();

    })

    const submitlogin = document.getElementById('submitlogin')
    submitlogin.addEventListener("click",async()=>{
        
        let lemail=document.getElementById("lemail").value.trim();
        let lpassword=document.getElementById("lpassword").value.trim();

        if( lemail==="" || lpassword===""){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill out all fields!'
            })
            .then(()=>{
                modal.show()
            })

            return;
    
  }
    try{
            await signInWithEmailAndPassword(auth,lemail,lpassword).then(()=>{
            Swal.fire({
                title: "loggedin Successfully!!",
                icon: "success",
                
              }).then(()=>{
                    
                    document.getElementById("lemail").value=""
                    document.getElementById("lpassword").value=""

                    location.href="../../dashboard/dashboard.html"
              })

            })
        }catch(error){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message,
          })
    }
  })
    


  

    











