const listInputs = document.querySelectorAll(".input");

function validField(field) {
    const id = field.id
     
    if(id == "day") {
        const day = +field.value;
        if(day < 1 || day > 31) {
            console.log("input a valid day")
        } else {
            console.log("ok ", day)
        }   
    }

    else if(id == "month") {
        const month = field.value
        if(month < 1 || month > 12) {
            console.log("input a valid month")
        } else {
            console.log("ok ", month)
        } 
    }

    else if(id == "year") {
        const year = field.value
        if(year > 2023) {
            console.log("input a valid year")
        } else {
            console.log("ok ", year)
        } 
    }
}

listInputs.forEach((input)=> {
    input.addEventListener("blur", ()=> {
        validField(input);
    });
})