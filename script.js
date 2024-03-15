function validateSyntax() {
    let input = document.getElementById('petInput').value;  
    let check1 = '';        
    let check2 = '';
    let check3 = '';
    let check4 = '';
    let result = '';  
    const pattern = /^[a-zA-Z]*$/;   
    
    if (input.slice(0,4) == "pet_") {     // Checks the validity of the first four characters which are "pet_"
        check1 = "okay";
    }
    else {
        check1 = "not okay"; 
    }      

    if (!isNaN(input[4]) && !isNaN(input[5]) && !isNaN(input[6]) && !isNaN(input[7]) ) {    // Checks the validity of the birth year
        check2 = 'okay';
    } else {
        check2 = 'not okay';
    }                    

    if (pattern.test(input.slice(8)) == true) {   // Checks the validity of the name of the pet
        check3 = 'okay';
    }
    else {
        check3 = 'not okay';
    }      

    if (input[4] == 1 || input[4] == 2) {        // Checks the validity of the first character of the birth year.
        check4 = 'okay'
    }
    else {
        check4 = 'not okay'
        alert('Birth year has to start with a 1 or a 2.')
    }   

    if (check1 == "okay" && check2 == 'okay' && check3 == 'okay' && check4 == 'okay') {  // Compares all four checks and gives final result
        result = "Valid syntax" + '\u{1F7E2}'
    }
    else {
        result = "Invalid syntax" + '\u{1F534}'        
    }
    document.getElementById('result').innerText = result;
}