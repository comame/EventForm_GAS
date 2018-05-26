var spreadsheetId = "15QnTrhTeDXE0CddDayMG8GatrDR5RbjL6AWsJ8JKIj0";
var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
var form = FormApp.getActiveForm();

/* Form */

function onSubmit(e) {
    var responses = e.response.getItemResponses();
    var type = responses[0].getResponse();

    if (type === "作成") {
        var eventTitle, eventOrganizer, eventDate;
        TODO("入力されたタイトルを取得");

        var eventId = registerEventToSheet(eventTitle, eventOrganizer, eventDate);
        updateForm();
    } else /* type === "参加" */ {
        var eventId, name;
        TODO("指定されたイベント ID と名前を取得");
        // ヒント: イベントの選択肢は、"eventId - eventTitle" のフォーマットで指定されます
 
        if (eventId == 0) {
            // "0 - 選択できるイベントはありません"
            return;
        }
        addParticipation(eventId, name);
    }
}


/* Dashboard */

function onGet(e) {
    var params = e.parameters;
}

/* TODO */

function TODO(message) {
    var error = new Error("TODO: " + message);
}