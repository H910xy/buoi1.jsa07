const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
const storeVal = JSON.parse(localStorage.getItem('userInfo'))   
console.log(storeVal);

// signInBtn.addEventListener("click", () => {
// 	container.classList.remove("right-panel-active");
// });

// signUpBtn.addEventListener("click", () => {
// 	container.classList.add("right-panel-active");

// });

// fistForm.addEventListener("submit", (e) => e.preventDefault());
// secondForm.addEventListener("submit", (e) => e.preventDefault());

const signInOverlay = () => {
    container.classList.remove("right-panel-active");
}

const signUpOverlay = () => {
    container.classList.add("right-panel-active");
}






const emailQuery = document.querySelector('#email')
const passwordQuery = document.querySelector('#password')
const nameQuery = document.querySelector('#name')
// const repasswordvalue = document.querySelector('#repassword')
// const loginValue = JSON.parse(localStorage.getItem('login')) 

// console.log(loginValue);

const handleLogin = () => {
    event.preventDefault()
    const emailQuery = document.querySelector('#emailLogin')
const passwordQuery = document.querySelector('#passwordLogin')  

  
    const emailValue = emailQuery.value
    const passwordValue = passwordQuery.value


    // lấy giá trị trong storage

    if (
        emailValue !== '' && emailValue === storeVal.email  && passwordValue === storeVal.pass
      ) {
        alert('sign in   success')
        window.location.href = 'ckJSA2.html'
      } else {
        alert('sign in fail')
      }
  
    
  }
  
const handleSignUp = () => {
    console.log('test');
    // event.preventDefault()
    	container.classList.add("right-panel-active");  

  
        const emailvalue = emailQuery.value
        const passwordvalue = passwordQuery.value
        const nameVal = nameQuery.value
      


        const userInfo = {
            name : nameVal,
            email : emailvalue,
            pass : passwordvalue
        }

        if (
          emailvalue !== '' && passwordvalue.length >5 && nameVal !== ''
        ) {
            localStorage.setItem('userInfo',JSON.stringify(userInfo))
          alert('Sign Up Success')


          window.open='http://127.0.0.1:5500/ck/ckJSA2.html'
        } else {
          alert('Sign Up Fail')
        }
    // if (
    //   emailvalue !== '' &&
    //   passwordvalue !== '' &&
    //   passwordvalue.length >= 5 &&
    //   emailvalue.includes('@')
    // ) {
    //   localStorage.setItem(
    //     'userInfo',
    //     JSON.stringify({
    //       username: emailvalue,
    //       password: passwordvalue,
    //     })
    //   )
  
    //   alert('Sign up success')
    //   window.location.href = 'main.html'
    // } else {
    //   alert('Sign up fail')
    // }
  }