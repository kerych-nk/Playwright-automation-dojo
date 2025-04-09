/*
Створіть функцію, яка використовує проміс для імітації затримки у 2 секунди перед поверненням значення.
Вимоги:

• Створіть функцію waitForTwoSeconds(), яка повертає проміс, що вирішується через 2 секунди.
• Після виконання проміса функція повинна вивести в консоль повідомлення “2 секунди пройшло!”.

* треба буде погугліть (або подитись кінець лекції)
* використовуйте setTimeout()
*/


function waitForTwoSeconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;

            if(isSuccess) {
                console.log("2 секунди пройшло!");
                resolve("Дані з сервера");
            } else {
                reject("Щось пішло не так");
            }
        }, 2000);
    });
}
waitForTwoSeconds()
    .then((data) => {
    console.log("Успішний результат:", data);
    })
    .catch((error) => {
        console.error("Помилка:", error);
    });