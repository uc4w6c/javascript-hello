// イベントリスナーとして登録することでHTMLでjavascriptを読み込む順番を変えても動作する
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn').addEventListener('click', function() {
        window.alert('ボタンがクリックされました');
    }, false);
}, false);
