let json = [
        { name: "鈴木 太郎", address: "東京都千代田区1-1"},
        { name: "山田 花子", address: "大阪府大阪市1-1"}
];

let clone = getCloneNode(template);

clone.querySelector('li.item p.text span.value').textContent = val.aa;
clone.querySelector('li.item p.text span.address').textContent = val.bb;
nodenode.appendChild(clone);

tCloneNode = function(source) {
    let clone = document.createElement('div');
    clone.innerHTML = source.innerHTML;
    return clone;
}
