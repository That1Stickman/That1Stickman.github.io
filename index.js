/* Fighting Fantasy Cipher Program
* Last updated December 23 2025
* Copright (c) 2025 Katherine Vrtismarsh */

function decoder() {
    let codestring = document.getElementById("codeInput").value;
    if (!validateInput(codestring)) {
        alert("Invalid input! No special characters other than quotes or punctuation.");
        return;
    }
    // This function will handle the decoding logic
    codestring = codestring.replace(/ |\n/g, "");
    codestring = codestring.replace(/a|e|i|o|u/gi, " ");
    codestring = codestring.replace(/\./gi, ". ");
    codestring = codestring.replace(/b/g, "a").replace(/B/g, "A");
    codestring = codestring.replace(/f/g, "e").replace(/F/g, "E");
    codestring = codestring.replace(/j/g, "i").replace(/J/g, "I");
    codestring = codestring.replace(/p/g, "o").replace(/P/g, "O");
    codestring = codestring.replace(/v/g, "u").replace(/V/g, "U");
    document.getElementById("output").textContent = codestring;
}

function encoder() {
    let codestring = document.getElementById("encodeInput").value;
    if (!validateInput(codestring)) {
        alert("Invalid input! Please enter only letters, spaces, and punctuation.");
        return;
    }
    let lastvowel = " ";
    codestring=codestring.split("")
    newCodeString = [];
    // This function will handle the encoding logic
    for (element of codestring) {
        if (element === "a") {
            newCodeString.push("b");
            lastvowel = "a";
        } else if (element === "e") {
            newCodeString.push("f");
            lastvowel = "e";
        } else if (element === "i") {
            newCodeString.push("j");
            lastvowel = "i";
        } else if (element === "o") {
            newCodeString.push("p");
            lastvowel = "o";
        } else if (element === "u") {
            newCodeString.push("v");
            lastvowel = "u";
        } else if (element === "A") {
            newCodeString.push("B");
            lastvowel = "A";
        } else if (element === "E") {
            newCodeString.push("F");
            lastvowel = "E";
        } else if (element === "I") {
            newCodeString.push("J");
            lastvowel = "I";
        } else if (element === "O") {
            newCodeString.push("P");
            lastvowel = "O";
        } else if (element === "U") {
            newCodeString.push("V");
            lastvowel = "U";
        } else if (element === " ") {
            newCodeString.push(lastvowel);
        }else if (element === ".") {
            newCodeString.push(".");
            lastvowel = " ";
        }else{
            newCodeString.push(element);
        }
    }
    
    // This function will handle the encoding logic
    newCodeString = newCodeString.join("");
    document.getElementById("encodeoutput").textContent = newCodeString;
}

function validateInput(input) {
    const regex = /^[a-zA-Z\s.?!\"]*$/;
    return regex.test(input);
}