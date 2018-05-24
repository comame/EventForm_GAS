/* -- */
// スプレッドシート操作

// スプレッドシートにイベントデータを追加
function registerEventToSheet(title, organizer, date) {
  var sheet = spreadsheet.getSheetByName("events");
    
  var newRow = sheet.getLastRow() + 1;
  var id = 1;
  if (newRow > 1) {
    id = 1 + sheet.getRange(newRow - 1, 1).getValue();
  }
  
  sheet.getRange(newRow, 1, 1, 4).setValues([[id, title, organizer, date]]);
  
  // 参加者リストを初期化
  getParticipationsSheet(id).clear();
  
  return id;
}

// 参加者を追加
function addParticipation(eventId, name) {
  var sheet = getParticipationsSheet(eventId);
  var range = sheet.getRange(sheet.getLastRow() + 1, 1);
  range.setValue(name);
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

// イベントデータを取得
function getEventData(eventId) {
  var eventId = 7
  
  var events = spreadsheet.getSheetByName("events").getRange(1, 1, spreadsheet.getLastRow(), 4).getDisplayValues();
  var event = [];
  events.forEach(function(it) {
    if (it[0] == eventId) event = it;
  });
  
  var participations = [];
  var participationsSheet = getParticipationsSheet(eventId);
  var lastRow = participationsSheet.getLastRow();
  if (lastRow == 0) {
    participations = [];
  } else { 
    participationsSheet.getRange(1, 1, participationsSheet.getLastRow(), 1).getValues().forEach(function(it) {
      participations.push(it[0]);
    });
  }
  
  Logger.log(participations);
  
  return {
    eventId: event[0],
    name: event[1],
    organizer: event[2],
    date: event[3],
    participations: participations
  }
}

/* -- */
// フォーム関連

// 参加登録フォームに表示するイベントの一覧を文字列で取得
function createChoiceValues() {
  var sheet = spreadsheet.getSheetByName("events");
  var lastRow = sheet.getLastRow();
  if (lastRow == 0) return ["0 - 選択できるイベントはありません"];
  var events = sheet.getRange(1, 1, lastRow, 2).getValues();
  
  var choices = [];
  // continue を使いたいから forEach ダメだった
  for (var i = 0; i < events.length; i++) {
    var event = events[i];
    if (event[0] == "") continue;
    choices.push(event[0] + " - " + event[1]);
  }
  
  return choices;
}

// 参加登録フォームに表示するイベントの一覧を更新
function updateForm() {
  form.getItems()[6].asListItem().setChoiceValues(createChoiceValues());
}