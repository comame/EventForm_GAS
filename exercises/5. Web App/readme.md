## 5. Web App

Apps Script では、簡易的な Web アプリケーションを作成できます。
GET, POST リクエストを受け取り、HTML やテキスト形式のレスポンスを返します。

## 使用する API
- [ContentService](https://developers.google.com/apps-script/reference/content/content-service)
    - [createTextOutput(text: String): TextOutput](https://developers.google.com/apps-script/reference/content/content-service#createtextoutputcontent)

## 補足
GET リクエストは `onGet()`、POST リクエストは `onPost()` で受け取れます。  
レスポンスは [ContentService](https://developers.google.com/apps-script/reference/content/content-service) か [HTMLService](https://developers.google.com/apps-script/reference/html/html-service) を使用して生成できます。  
リクエストをトリガーする関数に与えられるオブジェクトについては、https://developers.google.com/apps-script/guides/web#request_parameters を参照してください。