const element = document.getElementById("tables")

function signinform(){

    const headingparadiv = document.createElement("div")
    headingparadiv.classList.add("main")

    const heading = document.createElement("h3")
    heading.classList.add("title")
    heading.textContent = "Welcome Back!"
    headingparadiv.appendChild(heading)

    const para = document.createElement("p")
    para.classList.add("para")
    para.textContent = "Please enter your details to sign in."
    headingparadiv.appendChild(para)

    const formelement = document.createElement("div")
    formelement.classList.add("inputs")

    const addressInput = document.createElement("input")
    addressInput.classList.add("input1")
    addressInput.type = "text"
    addressInput.placeholder = "Email address*"
    formelement.appendChild(addressInput)

    const PasswordInput = document.createElement("input")
    PasswordInput.classList.add("input2")
    PasswordInput.type = "text"
    PasswordInput.placeholder = "Password*"
    formelement.appendChild(PasswordInput)

    const parasecond = document.createElement("p1")
    parasecond.classList.add("parasecond")
    parasecond.textContent = "Forgot your password?"
    formelement.appendChild(parasecond)

    const containerforbutton = document.createElement("div")
    containerforbutton.classList.add("box")

    const signinbutton = document.createElement("button")
    signinbutton.classList.add("Button")
    signinbutton.textContent = "Sign In"
    containerforbutton.appendChild(signinbutton)
    
    const basediv = document.createElement("div")
    basediv.classList.add("base")

    const para3 = document.createElement("p2")
    para3.classList.add("para3")
    para3.textContent = "Don't have an account?"
    basediv.appendChild(para3)

    const para4 = document.createElement("p2")
    para4.classList.add("para4")
    para4.textContent = "Sign Up"
    basediv.appendChild(para4)

    para4.addEventListener('click',()=>{
        element.style.display = 'none';
        signoutform.style.opacity = 1;
    })

    element.appendChild(headingparadiv)
    element.appendChild(formelement)
    // element.appendChild(PasswordInput)
    element.appendChild(containerforbutton)
    element.appendChild(basediv)
}
signinform()

const signoutform = document.getElementById("formcontainer")

function newpage(){

    const allitems = document.createElement("div")
    allitems.classList.add("allelements")

    const headingdiv = document.createElement("div")
    headingdiv.classList.add("secondmain")

    const heading = document.createElement("h3")
    heading.classList.add("secondtitle")
    heading.textContent = "Create a new account"
    headingdiv.appendChild(heading)

    const para = document.createElement("p")
    para.classList.add("secondpara")
    para.textContent = "Get a free account in a few simple steps"
    headingdiv.appendChild(para)

    const firstLastName = document.createElement("div")
    firstLastName.classList.add("nameinfo")

    const firstName = document.createElement("input")
    firstName.classList.add("firstname")
    firstName.placeholder = "First name*"
    firstName.type = "text"
    firstLastName.appendChild(firstName)

    const lastName = document.createElement("input")
    lastName.classList.add("lastname")
    lastName.placeholder = "Last name*"
    lastName.type = "text"
    firstLastName.appendChild(lastName)

    allitems.appendChild(firstLastName)

    const workEmailIn = document.createElement("input")
    workEmailIn.classList.add("workinfo")
    workEmailIn.type = "text"
    workEmailIn.placeholder = "Enter your work email*"

    allitems.appendChild(workEmailIn)

    const companyWeb_Name = document.createElement("div")
    companyWeb_Name .classList.add("companyinfo")

    const companyName = document.createElement("input")
    companyName.classList.add("firstname")
    companyName.placeholder = "First name*"
    companyName.type = "text"
    companyWeb_Name.appendChild(companyName)

    const companyWebsite = document.createElement("input")
    companyWebsite.classList.add("lastname")
    companyWebsite.placeholder = "Last name*"
    companyWebsite.type = "text"
    companyWeb_Name.appendChild(companyWebsite)

    allitems.appendChild(companyWeb_Name)

    const Passwordfield = document.createElement("div")
    Passwordfield.classList.add("confirmpassword")

    const Inputpassword = document.createElement("input")
    Inputpassword.classList.add("workinfo")
    Inputpassword.type = "text"
    Inputpassword.placeholder = "Enter a Password*"
    Passwordfield.appendChild(Inputpassword)

    const Inputconfirmpassword = document.createElement("input")
    Inputconfirmpassword.classList.add("workinfo")
    Inputconfirmpassword.type = "text"
    Inputconfirmpassword.placeholder = "Confirm your Password*"
    Passwordfield.appendChild(Inputconfirmpassword)

    allitems.appendChild(Passwordfield)

    const boxforbutton = document.createElement("div")
    boxforbutton.classList.add("buttonbox")

    const signinbuttonbox = document.createElement("button")
    signinbuttonbox.classList.add("signinButton")
    signinbuttonbox.textContent = "Sign Up Now"
    boxforbutton.appendChild(signinbuttonbox)

    allitems.appendChild(boxforbutton)
    
    const bottomdiv = document.createElement("div")
    bottomdiv.classList.add("bottom")

    const para2 = document.createElement("p2")
    para2.classList.add("para2")
    para2.textContent = "Already have an account?"
    bottomdiv.appendChild(para2)

    const para3 = document.createElement("p3")
    para3.classList.add("para5")
    para3.textContent = "Sign in"
    bottomdiv.appendChild(para3)

    para3.addEventListener('click',()=>{
        element.style.display = "block";
        signoutform.style.opacity=0;
    })

    allitems.appendChild(bottomdiv)

    signoutform.appendChild(headingdiv)
    signoutform.appendChild(allitems)
    // signoutform.appendChild(firstLastName)
    // signoutform.appendChild(workEmailIn)

}
newpage()