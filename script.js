var generate = document.querySelector(".gen");
var copy = document.querySelector(".copyb");




  function copyclip() {
    document.getElementById("password").select();
    document.execCommand("copy");
    alert("Your password has been copied")
  }


   function generatePassword() {
     var length = 128,
     charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=?~",
     retVal = "";
     for (var i = 0, n = charset.length; i < length; ++i) {
       retVal += charset.charAt(Math.floor(Math.random() * n));
     }

     document.getElementById("password").value = retVal;

     console.log(retVal)
     return (retVal);
    } 

    generate.addEventListener("click", generatePassword); 
    copy.addEventListener("click", copyclip);
    
    // document.addEventListener("click", myFunction())