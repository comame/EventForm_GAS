/* -- */
// スプレッドシート操作

// スプレッドシートにイベントデータを追加
function registerEventToSheet(title, organizer, date) {
  var sheet = TODO("event という名前のシートを取得");
    
  var newRow = TODO("新しいイベントを追加する行番号を指定");

  var id = 1;
  if (newRow > 1) {
    // 1つ前のイベント ID + 1
    id = 1 + sheet.getRange(newRow - 1, 1).getValue();
  }
  
  TODO("新しい行にイベント情報を追加");
  
  // 参加者リストを初期化
  getParticipationsSheet(id).clear();
  
  return id;
}

// 参加者を追加
function addParticipation(eventId, name) {
  var sheet = getParticipationsSheet(eventId);
  TODO("新しい行に参加者名を追加");
}

// 参加者管理リストを取得
function getParticipationsSheet(eventId) {
  var sheetName = "p" + eventId;
  var sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}

/* -- */
// フォーム関連

// 参加登録フォームに表示するイベントの一覧を文字列で取得
function createChoiceValues() {
  var sheet = spreadsheet.getSheetByName("events");
  
  var lastRow = sheet.getLastRow();
  if (lastRow == 0) {
    return ["0 - 選択できるイベントはありません"];
  }
  
  var events = sheet.getRange(1, 1, lastRow, 2).getValues();
  var choices = [];
  
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    if (event[0] == "") continue;
    choices.push(event[0] + " - " + event[1]);
  }
  
  return choices;
}

// 参加登録フォームに表示するイベントの一覧を更新
function updateForm() {
  form
    .getItems()[6]
    .asListItem()
    .setChoiceValues(createChoiceValues());
}