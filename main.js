const request = require("request");

//標準入力ストリームを開始
process.stdin.resume();
//エンコーディングをutf-8で行う
process.stdin.setEncoding('utf-8');

console.log('現在の気温を知りたい場所を入力してください(endで入力を終了します)');
//データを入力された度に実行
process.stdin.on('data', (chunk) => {
    //改行文字を削除
    chunk = chunk.replace(/\r?\n/g, "");
    //endが入力された時、プログラムを終了する
    if(chunk == "end"){
        process.exit(0);
    }

    let place = chunk;
    //リクエスト時のオプションと指定
    const options = {
        url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=662bacb3424d26e87dd8a49458456bef`, //アクセス先
        method : "GET", //アクセス方法
        json : true, //取得したJSONデータをパースしJSで扱いやすくする
    }
    request(options, (error, res, body) => {
        console.log(`${place} 気温${body.main.temp}℃:天気${body.weather[0].main}`);
    });
});







