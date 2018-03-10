var createStatement = "CREATE TABLE IF NOT EXISTS register (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, useremail TEXT, userpassword TEXT)";
 
var insertStatement = "INSERT INTO Contacts (username, useremail) VALUES (?, ?)";
 
var updateStatement = "UPDATE Contacts SET username = ?, useremail = ? WHERE id=?";
 
var deleteStatement = "DELETE FROM Contacts WHERE id=?";
 
var dropStatement = "DROP TABLE Contacts";
 
 var db = openDatabase("AddressBook", "1.0", "Address Book", 200000);  // Open SQLite Database
 
 
var selectAllStatement = "SELECT * FROM Contacts";
 var db = openDatabase("AddressBook", "1.0", "Address Book", 200000);  // Open SQLite Database

function init()  // Function Call When Page is ready.
 
{
 
    try {
 
        if (!window.openDatabase)  // Check browser is supported SQLite or not.
 
        {
 
            alert('Databases are not supported in this browser.');
 
        }
 
        else {
 
            createTable();  // If supported then call Function for create table in SQLite
 
        }
 
    }
 
    catch (e) {
 
        if (e == 2) {
 
            // Version number mismatch. 
 
            console.log("Invalid database version.");
 
        } else {
 
            console.log("Unknown error " + e + ".");
 
        }
 
        return;
 
    }
 
}
function createTable()  // Function for Create Table in SQLite.
 
{
 
    db.transaction(function (tx) { tx.executeSql('CREATE TABLE IF NOT EXISTS register (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, useremail TEXT, userpassword TEXT)');
    
    	 });
 
}
 
 
