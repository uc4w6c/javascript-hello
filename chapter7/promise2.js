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

// 二回呼び出す場合
asyncProcess('トクジロウ')
.then(
    response => {
        console.log(response);
        return asyncProcess('ニンサブロウ');
    }
)
.then(
    response => {
        console.log(response);
    },
    error => {
        console.log(`エラー: ${error}`);
    }
);