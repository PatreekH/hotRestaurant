//Dependencies
var path = require('path');
var tableData = require('../data/table-data.js');
var waitListData = require('../data/waitinglist-data.js');


// Routes
// =============================================================

module.exports = function(app){

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------

	app.get('/tables', function(req, res){
		res.render('tables', {
			tableData: tableData, 
			waitingData: waitListData
		});
	});

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});

}


