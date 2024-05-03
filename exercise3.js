//1. Write a code to display the multiplication table of a given integer.
let num = 9

for(let i = 1; i <= 10; i++){
    console.log(num + " x " + i)
}

//2. Write a code to check whether a string is a palindrome or not.
let word = "madam"
let newWord = ""

for(let j = word.length-1; j >= 0; j--){
    newWord += word[j]
}

if(word === newWord){
    console.log("Palindrome")
} else {
    console.log("Not Palindrome")
}

//3. Write a code to convert centimeter to kilometer.
let centi = 100000
let kilo = centi / 100000

console.log(centi + " cm -> " + kilo + " km")

//4. Write a code to format number as currency (IDR)
let number = 1000
let format = ""
let result1 = ''
let counterDigit = 1
let numString = String(number)

// Menggunakan toLocaleString
console.log(
    number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR"
    }),
);

// Menggunakan logika sederhana
for(let i = numString.length-1; i >= 0; i--){
    if(counterDigit === 3){
        console.log(" counterDigit3 "," digit -> ",numString[i],' ke ', i)
        format += numString[i] + '.'
        counterDigit = 0
    } else {
        console.log(" digit -> ",numString[i],' ke ', i)
        format += numString[i]
        counterDigit += 1
    }
}

for(let i = format.length-1; i >= 0; i--){
    result1 += format[i]
}
console.log("Rp. " + result1 + ",00")

//5. Write a code to remove the first occurrence of a given “search string” from a string
let string1 = "Hello world"
let searchString = "ell"
let result2 = string1.replace(searchString, "")
console.log(result2)

//6. Write a code to capitalize the first letter of each word in a string
let string2 = "hello world"
let capitalString = ""
let space = false

for(let i = 0; i < string2.length; i++){
    if(i === 0){
        capitalString += string2[i].toUpperCase()
    } else if(string2[i] === " "){
        space = true
        capitalString += " "
    } else {
        if(space){
            capitalString += string2[i].toUpperCase()
            space = false
        } else {
            capitalString += string2[i]
        }
    }
}
console.log(capitalString)

//7. Write a code to reverse a string.
let string3 = "hello"
let reverseString = ""

for(var k = string3.length - 1; k >= 0; k--){
    reverseString += string3[k]
}

console.log(string3 + " -> " + reverseString)

//8. Write a code to swap the case of each character from string 
let string4 = "The QuiCk BrOwN Fox"
let swappedString = ""

for(let m = 0; m < string4.length; m++){
    if(string4[m] == string4[m].toUpperCase()){
        swappedString += string4[m].toLowerCase()
    } else {
        swappedString += string4[m].toUpperCase()
    }
}
console.log(swappedString)

//9. Write a code to find the largest of two given integers
let num1 = 42
let num2 = 27

if(num1 > num2){
    console.log(num1)
} else {
    console.log(num2)
}

/*10. Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42*/
let sortNum1 = 42
let sortNum2 = 27
let sortNum3 = 18

if(sortNum1 <= sortNum2 && sortNum2 <= sortNum3){
    console.log(sortNum1 + ", " + sortNum2 + ", " + sortNum3)
} else if(sortNum1 <= sortNum3 && sortNum3 <= sortNum2){
    console.log(sortNum1 + ", " + sortNum3 + ", " + sortNum2)
} else if(sortNum2 <= sortNum1 && sortNum1 <= sortNum3){
    console.log(sortNum2 + ", " + sortNum1 + ", " + sortNum3)
} else if(sortNum2 <= sortNum3 && sortNum3 <= sortNum1){
    console.log(sortNum2 + ", " + sortNum3 + ", " + sortNum1)
} else if(sortNum3 <= sortNum1 && sortNum1 <= sortNum2){
    console.log(sortNum3 + ", " + sortNum1 + ", " + sortNum2)
} else if(sortNum3 <= sortNum2 && sortNum2 <= sortNum1){
    console.log(sortNum3 + ", " + sortNum2 + ", " + sortNum1)
}

/*11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type.
○ Example : “hello” → 1*/
let input = "hello"

if(typeof input === "string"){
    console.log("1")
} else if(typeof input === "number"){
    console.log("2")
} else {
    console.log("3")
}

//12. Write a code to change every letter a into * from a string of input
let string5 = "An apple a day keeps the doctor away"
let newString = ""

/*newString = string5.replaceAll("a","*")
console.log(string5 + " -> " + newString)*/
newString = string5.replace(/a/gi, "*")

console.log(string5 + " -> " + newString)