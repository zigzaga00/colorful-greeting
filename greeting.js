function showMsg() {
    console.log(`${color.value}`);
    switch(color.value) {
        case "red":
            msgOutput.setAttribute("style", "color:white;background-color:red;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love red, too!!!</b>`;
            break;
        case "orange":
            msgOutput.setAttribute("style", "color:white;background-color:orange;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love orange, too!!!</b>`;
            break;
        case "green":
            msgOutput.setAttribute("style", "color:white;background-color:green;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love green, too!!!</b>`;
            break;
        case "blue":
            msgOutput.setAttribute("style", "color:white;background-color:blue;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love blue, too!!!</b>`;
            break;
        case "purple":
            msgOutput.setAttribute("style", "color:white;background-color:purple;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love purple, too!!!</b>`;
            break;
        case "pink":
            msgOutput.setAttribute("style", "color:white;background-color:pink;");
            msgOutput.innerHTML = `<b>Hello, ${user.value} - I love pink, too!!!</b>`;
            break;
        default:
            msgOutput.setAttribute("style", "color:white;background-color:black;");
            msgOutput.innerHTML = `<b>Hello, ${user.value}!!!</b>`;
    }
}

const msgOutput = document.querySelector("#output");
const button = document.querySelector("#showMsg");
const user = document.querySelector("#name");
const color = document.querySelector("#color");
button.addEventListener("click", showMsg);

