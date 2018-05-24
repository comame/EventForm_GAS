// 2倍した値を返すカスタム関数を作成してみましょう
// =DOUBLE() のようにスプレッドシート上から呼び出せます
function DOUBLE(input) {

}

// スプレッドシート上のすべてのデータをログ出力してみましょう
function getAllValues() {
    var sheet = SpreadsheetApp.todo();
    var range = sheet.todo();
    var values = range.todo();

    Logger.log(values);
}