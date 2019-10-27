$(document).on("ready", function () {
    databaseHandler.createDatabase();
});
function addUser() {
    var userName = $("#txtuserName").val();
    var passWord = $("#txtpassWord").val();
    usersHandler.addUser(userName, passWord);
    $("#txtuserName").val("");
    $("#txtpassWord").val("");
}