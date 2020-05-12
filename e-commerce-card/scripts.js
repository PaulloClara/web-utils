const optionsEl = {};

optionsEl.size = document.querySelector(".container .card .content .sizes");
optionsEl.color = document.querySelector(".container .card .content .colors");

const selected = {
  size: undefined,
  color: undefined
};

function selectOption(optionType, el) {
  el.classList.add("selected");

  if (selected[optionType])
    optionsEl[optionType].children[selected[optionType]].classList.remove(
      "selected"
    );

  selected[optionType] = el.dataset.option;
}

function handleBuy() {
  if (!selected.size || !selected.color) return;

  alert(`Size: ${selected.size}\nColor: ${selected.color}`);
}
