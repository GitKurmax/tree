let data = {
  "Рыбы": {
    "Форель": {},
    "Щука": {}
  },

  "Деревья": {
    "Хвойные": {
      "Лиственница": {},
      "Ель": {}
    },
    "Цветковые": {
      "Берёза": {},
      "Тополь": {}
    }
  }
};

function createTree (parent, obj) {
  let ul = document.createElement('ul');
  parent.append(ul);
  
  for (let key in obj) {
    parent = ul;
    let nextLi = document.createElement('li');
    nextLi.innerHTML = key;
    parent.append(nextLi);
    parent = nextLi;
    createTree(parent, obj[key]);
  } 
}

let container = document.getElementById('container');
createTree(container, data);
