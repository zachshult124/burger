// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    //select all
    all: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    //insert 1

    //update 1 
}