## 4. Spreadsheet-bound Script

スクリプトファイルは、スプレッドシートに紐付けることができます。
スプレッドシートに紐付けることで、スプレッドシートに関するイベントをトリガーできたり、カスタム関数を作成することができます。

スプレッドシートに紐付いたスクリプトを作成するには、「ツール」>「スクリプト エディタ」を開いてください。

[COntainer-bound Scripts | Apps Script | Google Developers ](https://developers.google.com/apps-script/guides/bound)

### 使用する API
- [SpreadsheetApp](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app)
    - [getActiveSheet(): Sheet](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet-app#getactivesheet)
- [Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
    - [getRange(startRow: Int, startColumn: Int, numRow: Int, numColumn: Int): Range](https://developers.google.com/apps-script/reference/spreadsheet/sheet#getrangerow-column-numrows-numcolumns)
- [Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
    - [getValues(): Array\<String\>](https://developers.google.com/apps-script/reference/spreadsheet/range#getvalues)
