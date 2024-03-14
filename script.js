function validateSyntax() {
    let input = document.getElementById('petInput').value;

    // Declaration and assignment of empty strings

    let result1 = '';        
    let result2 = '';
    let result3 = '';
    let result4 = '';
    let result = '';

     // Checks the validity of the first four characters which are "pet_"
   
    if (input[0] == "p" && input[1] == "e" && input[2] == "t" && input[3] == "_") {
        result1 = "part 1 good";
    }
    else {
        result1 = "part 1 not good";        
    } 
   
     // Checks the validity of the birth year

    if (!isNaN(input[4]) && !isNaN(input[5]) && !isNaN(input[6]) && !isNaN(input[7]) ) {
        result2 = 'part 2 good';
    } else {
        result2 = 'part 2 not good';
    }
    
    // Checks the validity of the name of the pet

    const pattern = /^[a-zA-Z]*$/;
    const substring = input.slice(8);     //Slices the input string from index 8 to the last index
    Boolean3 = pattern.test(substring);

    if (Boolean3 == true) {
        result3 = 'part 3 good';
    }
    else {
        result3 = 'part 3 not good';
    }  

    // Checks the validity of the first character of the birth year.

    if (input[4] == 1 || input[4] == 2) {
        result4 = 'part 4 good'
    }
    else {
        result4 = 'part 4 not good'
    }
    
    // Compares results from all four validations and gives final result

    if (result1 == "part 1 good" && result2 == 'part 2 good' && result3 == 'part 3 good' && result4 == 'part 4 good') {
        result = "Valid syntax" + '\u{1F7E2}'
    }
    else {
        result = "Invalid syntax" + '\u{1F534}'
    }

    document.getElementById('result').innerText = result;
}


