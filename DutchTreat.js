"use strict";
const clear = document.getElementById("clear");
const division = document.getElementById("division");
const result = document.getElementById("result");
const inin = document.getElementById("in");
const history = document.getElementById("history");
const historyclear = document.getElementById("historyclear");
let cnt = 1;

clear.addEventListener("click", function () {
    price.value = "";
    people.value = "";
    result.textContent = "";
});
historyclear.addEventListener("click", function () {
    inin.textContent = "";
    cnt = 1;
});

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

    const now = new Date();// 日時の取得

    const addtxt = create(now);
    inin.prepend(addtxt);
    cnt += 1;
});

function create(now) {
    const addtxt = document.createElement("p");
    addtxt.innerHTML = `${cnt}回目の支払い。` + result.textContent + "円使いました。" + "<br>" + now.toLocaleString();
    return addtxt;
};