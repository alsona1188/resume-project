function sendMail(contactForm){
    emailjs.send("service_zmfo1gs","template_a00r2hq", {"from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
})
.then(
    function(response){
        console.log("SUCCESS", response);

    },
    function(error){
        console.log("FAILED", error);
    }
)

}