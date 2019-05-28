// この処理だと都度<li>に要素を追加するため、毎回コンテンツが再描画されて処理に時間がかかる
document.addEventListener('DOMContentLoaded', function() {
    var books = [];
    for (i = 0; i < 100000; i++) {
        books.push({ title: 'No' + i, price: 1000 * i });
    }

    var list = document.getElementById('list');

    for(var i = 0, len = books.length; i < len; i++) {
        var book = books[i];
        var li = document.createElement('li');
        var text = document.createTextNode(book.title + ':' + book.price + '円');
        li.appendChild(text);
        list.appendChild(li);
    }
}, false);
