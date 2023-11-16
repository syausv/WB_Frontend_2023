// Функция для получения данных из формы
function Form(form) {
  const elements = form.elements;
  const formData = {};
  //Обходим все элементы формы и сохраняем их значения в объекте formData
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const elementName = element.name;

    if (elementName) {
      //В зависимости от типа элемента собираем его значение
      if (element.type === 'select-one' && element.options.length > 0) {
        formData[elementName] = element.options[element.selectedIndex].value;
      } else {
        formData[elementName] = element.value;
      }
    }
  }

  return formData;
}

// Функция для отправки данных на сервер
async function sendToServerData(data, url) {
  // Опции для запроса, используя метод POST
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  //Отправляем запрос на сервер
  try {
    const response = await fetch(url, requestOptions);
    //Если нет ответа вывод ошибки
    if (!response.ok) {
      throw new Error('Ошибка при отправке данных на сервер');
    }

    return response.json();

  } catch (error) {
    return error;
  }
}

// Пример использования:
const formData = Form(document.querySelector('#form'));
const sendResult = await sendToServerData(formData, 'some-url');
console.log(sendResult);