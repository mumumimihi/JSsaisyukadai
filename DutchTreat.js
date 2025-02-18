"use strict";
const clear = document.getElementById("clear");
const division = document.getElementById("division");
const result = document.getElementById("result");
const inin = document.getElementById("in");
const history = document.getElementById("history");
const historycliar = document.getElementById("historycliar");
let cnt = 1;
const now = new Date();// 日時の取得
division.addEventListener("click", function () {
    const price = parseFloat(document.getElementById("price").value);
    const people = parseFloat(document.getElementById("people").value);

    if (isNaN(price) || isNaN(people)) {
        window.alert("半角数字で入力してください");
        result.textContent = "エラー";
    } else if (people === 0) {
        window.alert("人数は1より大きくしてください");
        result.textContent = "エラー";
    } else {
        const resultvalue = price / people;
        if (Number.isInteger(resultvalue)) {
            result.textContent = (price / people);
        } else {
            result.textContent = (price / people).toFixed(2);
        }
    }
    
    if (cnt == 1) {
        history.innerHTML = result.textContent + "円使いました。" + "<br>" + now.toLocaleString();
        cnt += 1;
    } else {
        const addtxt = create();
        inin.prepend(addtxt);
        cnt += 1;
    }
});
clear.addEventListener("click", function () {
    price.value = "";
    people.value = "";
    result.textContent = "";
});
historycliar.addEventListener("click", function () {
    inin.textContent = "";
});
function create() {
    const addtxt = document.createElement("p");
    addtxt.innerHTML = `${cnt}回目の支払い。` + result.textContent + "円使いました。" + "<br>" + now.toLocaleString();
    return addtxt;
};