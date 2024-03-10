# colourful greeting project breakdown

This is a high level breakdown of the colourful greeting project.

---

## styles

One thing to note is how we have put css styling into the head of the html document. This is one way to do css styles. We can also do it inline inside the elements themselves or we can write them in a seperate style sheet which is then linked to the html file.

---

## html form

Another thing to note is how we have used a form for the input fields. Typically, we would use a form element to group together form control elements such as *input* and *button* with the intention that the data from them is sent to a backend script which will use it in its own logic. This is why we have labelled the form control elements and added attributes such as *name* *for* and *id* etc. For more detail of how html forms work, please see my [notes](https://github.com/zigzaga00/html-css-notes/blob/main/html-css-notes.md#forms) on html and css.

---

## js code

```javascript=
const msgOutput = document.querySelector("#output");
const button = document.querySelector("#showMsg");
const user = document.querySelector("#name");
const color = document.querySelector("#color");
```

We start by selecting elements from the html document using the `querySelector()` method. These elements are stored inside variables.

```javascript=
button.addEventListener("click", showMsg);
```

Next, we add an event listener to the button element. It will listen for a *click* event and then execute the `showMsg()` function which we have defined and will walkthrough next.

>[!TIP]
>When we use a function as a callback function with `addEventListener()` we should not use `()` otherwise it will call the function even if the event has not been triggered

```javascript
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
```

We use a `switch` statement to control the flow in this function rather than an `if` statement combined with `else if` statements because we are merely comparing one value (the value given as the color) against a number of different possibilities. The `switch` syntax is cleaner and more appropriate for this use case.

>[!IMPORTANT]
>We need to use the `break` keyword in each `case` here because we do not want subsequent cases to execute after the one which matches the value of the color

---

Okay, a short breakdown of the project - thanks for reading it and I hope it was of use :smiley: 
