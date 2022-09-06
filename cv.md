<img src="https://hsto.org/getpro/moikrug/uploads/user/100/059/334/5/avatar/2bfc229fadbbf0e2fbfc21926c9ce31b.jpg" width="200">

# **Vladimir Kozlachkov**

## **Contacts**

- **E-mail:** kozlachkovvd@gmail.com
- **GitHub:** [RussianBoy64](https://github.com/RussianBoy64)
- **Phone:** +7 (927) 050-79-40
- **Telegram:** [@vld_k64](https://t.me/vld_k64)
- **Location:** Saratov, Russia

## **About me**

In September 2021, I first thought about changing my profession. I have always been attracted to information technology, but it was much more difficult to decide on a specialization.

I decided to start with the basics and signed up for [CS50's Introduction to Computer Science](https://www.edx.org/course/introduction-computer-science-harvardx-cs50x) which became a good starting point for me and lifted the veil of secrecy over the world of information technology.

On the course, I had to solve many interesting tasks, from writing simple programs such as encrypting messages or determining the difficulty of reading text written on “C” language, and ending with writing an application that simulates trading in securities with authorization, working with an external API and database (SQLite), implementation of the BackEnd and FrontEnd parts.

This course kindled in me an unprecedented interest and desire to work and develop in the IT field, and also helped me to clearly define the future vector of my development as a FrontEnd developer.

### **My strengths:**

- Quick lerner
- Responsible
- Sociable
- Team player

## **Skills**

- HTML5 (semantic layout)
- CSS (SASS/SCSS, BEM)
- JavaScript (JS Basics, ES6 syntax, async, fetch)
- Git/GitHub
- React (React Router, React Transition Group)

## **Code Examples**

#### **Task name: [ROT13](https://www.codewars.com/kata/530e15517bc88ac656000716/javascript)**

#### **Task details:**

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

#### **Algorithm:**

1. Create an array character-by-character splitting message
2. Iterate over an array from beginning to end
3. Get ascii code of character at each step
4. If the character is a letter, encrypt it
5. Сoncatenate the entire array into a message

#### **Solution:**

```
function rot13(message){
  let cipher = message.split('')
  for (let i = 0; i < cipher.length; i++) {
    let ascii = cipher[i].charCodeAt(0)
    if (ascii >= 65 && ascii <= 90) {
      ascii += 13
      if (ascii > 90) ascii -= 26
    }

    if (ascii >= 97 && ascii <= 122) {
      ascii += 13
      if (ascii > 122) ascii -= 26
    }

    cipher[i] = (String.fromCharCode(ascii))
  }
  return cipher.join('')
}
```
