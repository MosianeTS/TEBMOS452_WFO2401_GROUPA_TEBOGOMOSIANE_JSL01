function validateSyntax() {
    let input = document.getElementById('petInput').value;

    // Validation logic goes here

    let result1 = ''; 
    let result2 = '';
    let result3 = '';
    let result = '';

    if (input[0] == "p" && input[1] == "e" && input[2] == "t" && input[3] == "_") {
        result1 = "part 1 good";
    }
    else {
        result1 = "part 1 not good";        
    }  

    if (!isNaN(input[4]) && !isNaN(input[5]) && !isNaN(input[6]) && !isNaN(input[7]) ) {
        result2 = 'part 2 good';
    } else {
        result2 = 'part 2 NOT good';
    }
    
    if (/[a-zA-Z]/.test(input[8]) == true && /[a-zA-Z]/.test(input[9]) == true && /[a-zA-Z]/.test(input[10]) == true && /[a-zA-Z]/.test(input[11]) == true) {
        result3 = 'part 3 good';
    }
    else {
        result3 = 'part 3 not good';
    }
    
    
    if (result1 == "part 1 good" && result2 == 'part 2 good' && result3 == 'part 3 good') {
        result = 'Valid syntax'
    }
    else {
        result = "Invalid syntax"
    }

    document.getElementById('result').innerText = result;
}


