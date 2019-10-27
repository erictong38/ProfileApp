var usersHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addUser: function (username, password) {
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into users(username, password) values(?, ?)",
                    [username, password],
                    function (tx, results) { },
                    function (tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
}