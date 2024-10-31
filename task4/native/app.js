var total = 0;
var list = [];

document.getElementById("add").addEventListener("click", () => {
  if (document.getElementById("todo").value) {
    let x = document.getElementById("todo").value;
    document.getElementById("todo").value = "";
    list.push(x);
    total++;
    addItems(list);
  } else {
    alert("please input Text");
  }
});

document.getElementById("add2").addEventListener("click", () => {
  if (document.getElementById("todo").value) {
    let x = document.getElementById("todo").value;
    document.getElementById("todo").value = "";
    list.push(x);
    total++;
    addItems(list);
  } else {
    alert("please input Text");
  }
});

const addItems = (list) => {
  let todo = "";
  list.map((el, index) => {
    todo += `<div class="item">
<p>${el}.</p>
<button class="delete" id="delete" onclick="removeItem(${index})">
  X
</button>
</div>`;
  });
  document.getElementById("list").innerHTML = todo;
  document.getElementById(
    "totalNum"
  ).innerHTML = `Total List : <span class="num">${total}</span>`;
};

const removeItem = (index) => {
  list.splice(index, 1);
  addItems(list);
  total--;
  document.getElementById(
    "totalNum"
  ).innerHTML = `Total List : <span class="num">${total}</span>`;
};
