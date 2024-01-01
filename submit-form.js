let initSubject = '';

function submitHandler() {
    const to = "mo.wu@stud.sundsgarden.se";
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const body = `${document.getElementById("message").value}%0A%0A%0AFrom:${name}%0AEmail:${email}`;

    const mailTo = document.createElement("a");
    mailTo.href = `mailto:${to}?subject=${subject}&body=${body}`;
    document.body.appendChild(mailTo); 
    mailTo.click();
    document.body.removeChild(mailTo); 
}

function init() {
    document.getElementById("subject").value = initSubject;
}
