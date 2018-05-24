function DOUBLE(input) {
    return input * 2;
}

function getAllValues() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var range = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());
    var values = range.getValues();

    Logger.log(values);
}