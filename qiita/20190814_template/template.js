let listRefresh = function() {

    let json = [
            { name: "鈴木 太郎", address: "東京都千代田区1-1"},
            { name: "山田 花子", address: "大阪府大阪市1-1"}
    ];

    let template = document.getElementById('test_template');

    let example = document.getElementById('example').querySelector('ul');
    example.textContent = null;

    json.forEach((val) => {
        let clone = document.importNode(template.content, true);
        clone.querySelector('li.item p.text span.name').textContent = val.name;
        clone.querySelector('li.item p.text span.address').textContent = val.address;
        example.appendChild(clone);
    });
}