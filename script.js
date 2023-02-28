//I'll make my function based on this one

function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

  const copyEmail = () => {
    const email = "jessie.moura19@gmail.com"
    //email.select();
    //email.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(email)
    alert(`Copied the text: ${email}`)
    console.log(email)
  }