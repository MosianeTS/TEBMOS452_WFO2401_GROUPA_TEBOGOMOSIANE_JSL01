function validateSyntax() {
    let input = document.getElementById('petInput').value;  
    let check1 = '';        
    let check2 = '';
    let check3 = '';
    let check4 = '';
    let result = '';     
    
    check1 = (input.slice(0,4) == "pet_") ? "okay" : "not okay"

    check2 = (!isNaN(input[4]) && !isNaN(input[5]) && !isNaN(input[6]) && !isNaN(input[7]) ) ? "okay" : "not okay"                    

    check3 = (/^[a-zA-Z]+$/.test(input.slice(8))) ? 'okay' : 'not okay'
  
    check4 = (input[4] == 1 || input[4] == 2) ? "okay" : "not okay"
    
    result = (check1 == "okay" && check2 == 'okay' && check3 == 'okay' && check4 == 'okay') ? "Valid syntax" + '\u{1F7E2}' : "Invalid syntax" + '\u{1F534}' 
        
    document.getElementById('result').innerText = result;
}