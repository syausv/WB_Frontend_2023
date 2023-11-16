function createElement(parent, html) {
  //Создаем шаблон элемента
  const template = document.createElement('template');

  template.innerHTML = html || `
        <template>
            Создание элемента
        </template>
    `;

  //Клонируем содержимое шаблона
  const cloneElement = template.content.cloneNode(true);

  //Вставляем склонированный элемент в DOM
  parent.append(cloneElement);
}