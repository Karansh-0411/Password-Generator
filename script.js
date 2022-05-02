myFunc = () => {
    const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const numbers = ['1','2','3','4','5','6','7','8','9','0'];
    const symbols = ['!','@','#','$','%','^','&','*'];

    const value = document.getElementById("password");
    let password = "";

    let elem;
    for(let i=0; i<8; i++) {
        if(i == 0 || i == 4) {
            elem = Math.floor(Math.random()*upperCase.length);
            password += upperCase[elem];
        }
        else if(i == 1 || i == 5) {
            elem = Math.floor(Math.random()*lowerCase.length);
            password += lowerCase[elem];
        }
        else if(i == 2 || i == 6) {
            elem = Math.floor(Math.random()*numbers.length);
            password += numbers[elem];
        }
        else {
            elem = Math.floor(Math.random()*symbols.length);
            password += symbols[elem];
        }
    }
    value.textContent = password;
}