function onGet(e) {
    var name = e.parameter["name"];
    if (!name) name = "Guest";

    return ContentService.createTextOutput("Hello, " + name + "!");
}