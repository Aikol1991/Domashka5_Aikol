const forms = document.querySelectorAll('form');
const postData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const request = new XMLHttpRequest();
        request.open("POST", 'server.php')
        request.setRequestHeader("Content-Type", "application/json");

        const formData = new FormData(form);
        const obj = {};
        formData.forEach((item, name) => {
            obj[name] = item;
        });

        const json = JSON.stringify(obj);
        request.send(json);
        request.addEventListener("load", () => {
            if (request.status === 200) {
                alert('Данные успешно отправлены!');
            }else if(request.status === 400) {
                alert('Некорректные данные!');
            }else if(request.status === 500) {
                alert('Неопределенная ошибка!');
            }
        });
    });
};
forms.forEach((item) => {
    postData(item);
});