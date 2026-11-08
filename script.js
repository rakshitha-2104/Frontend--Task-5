const form=document.getElementById("registrationForm");
const message=document.getElementById("message");
form.addEventListener("submit",function(event)
{
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const age=document.getELementById("age").value;
    const course=document.getElementById("course").value;
    const password=document.getElementById("password").value;
    if(name ==="" || email === "" || age ==="" || course ==="" || password ==="") {
        message.style.color="red";
        message.textContent="Please fill in all the fields!";
        return;
    }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    message.style.color="red";
    message.textContent="Please enter a valid email address!";
    return;
}
if (Number(age) <= 0) {
    message.style.color="red";
    message.textContext="Please enter a valid age!";
    return;
}
if (password.lenght < 6) {
    message.style.color="red";
    message.textContext = "Password must contain at least 6 characters!";
    return;
}
message.style.color="green";
message.textContext="Registration Successful!";
form.reset();
});
