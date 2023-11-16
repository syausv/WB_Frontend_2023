function createAndStyleElement(tagElement, styles) {
  //Создаем новый элемент заданного тега
  const element = document.createElement(tagElement);
  //Применяем стили к элементу
  for (const property in styles) {
    element.style[property] = styles[property];
  }
  //Добавляем элемент в DOM
  document.body.append(element);
}

//Вызываем функцию с заданными стилями
const elementStyles = {
  width: "1024px",
  height: "800px",
  backgroundColor: "red",
  border: "8px",
};

createAndStyleElement("div", elementStyles);
