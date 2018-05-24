// ?name=hoge で与えられる名前を用いて、Hello, $name! をテキスト形式で返してみましょう
function onGet(e) {
    var name = e.parameter["name"];
    if (!name) name = "Guest";

    // テキスト形式のレスポンスを返す
    return todo();
}