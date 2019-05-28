// DocumentFragmentを利用すれば最後にまとめて描画できる
// でも実際はあまり変わらないかも・・・ブラウザ側でいい感じにやってくれてる？
document.addEventListener('DOMContentLoaded', function() {
    var books = [];
    for (i = 0; i < 100000; i++) {
        books.push({ title: 'No' + i, price: 1000 * i });
    }

    var frag = document.createDocumentFragment();

    for(var i = 0, len = books.length; i < len; i++) {
        var book = books[i];
        var li = document.createElement('li');
        var text = document.createTextNode(book.title + ':' + book.price + '円');
        li.appendChild(text);
        frag.appendChild(li);
    }
    document.getElementById('list').appendChild(frag);
}, false);
