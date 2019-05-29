// 非同期通信
function asyncProcess(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value) {
                resolve(`入力値: ${value}`);
            } else {
                reject('入力は空です');
            }
        }, 500);
    });
}

// 1つが完了したところでコールバック
Promise.race([
    asyncProcess('トクジロウ'),
    asyncProcess('ニンザブロウ'),
    asyncProcess('リンリン')
]).then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー: ${error}`);
    }
);
