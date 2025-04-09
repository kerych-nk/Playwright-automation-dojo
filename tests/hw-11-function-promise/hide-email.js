/*
Write a JavaScript function that hides email addresses to prevent unauthorized access.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
*/

function protect_email(email) {
    const [userPart, domainPart] = email.split("@");
    const half = Math.floor(userPart.length / 2);
    const visible = userPart.substring(0, half); // видима частина
    return visible + "..." + "@" + domainPart;
}

console.log(protect_email("robin_singh@example.com"));