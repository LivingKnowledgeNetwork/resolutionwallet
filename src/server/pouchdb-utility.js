/**
* LKN pouchdb local
*
* LKN rw Pouchdb utility class
*
*
* @package    LKN protocol
* @copyright  Copyright (c) 2017 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/
var PouchDB = require('pouchdb');

/**
* pouchdb utility class
* @class pouchdbSettings
*/
var pouchdbServer = function() {
	this.account = {};
	this.livepouch = this.createPouchdb();

};

/**
* create or make live pouchdb database
* @method createPouchdb
*
*/
pouchdbServer.prototype.createPouchdb = function() {

	db = new PouchDB('rw-store');
	return db;

};

/**
* save more than one documents to pouchdb
* @method bulkSave
*
*/
pouchdbServer.prototype.bulkSave = function(datain) {

	this.livepouch.bulkDocs({docs: datain}, function(err, response) {
//console.log(response);
	});

};

/**
* save data to a single document
* @method singleSave
*
*/
pouchdbServer.prototype.post = function(datain) {

	this.livepouch.post(datain, function (err, response) {

	});

};

pouchdbServer.prototype.updateSingle = function(datain) {


};

/**
* get list of all pouchdb documents
* @method allDocs
*
*/
pouchdbServer.prototype.createReadStreamStart = function(thisIN) {

		this.livepouch.allDocs({include_docs: true}, function(err, response) {
console.log('all current docs');
			response.rows.forEach(function(newMes){;
			 thisIN.emit("newMfile", newMes.doc.title);

		});
	});


};

/**
* get data on one pouchdb document
* @method getDoc
*
*/
pouchdbServer.prototype.get = function(docid) {

		this.livepouch.get(docid, function(err, response) {
//console.log(response);

			});

};

/**
*  Update specific document if ID provided
* @method putDoc
*
*/
pouchdbServer.prototype.put = function(mesgInkey, content) {
	var designDoc = {};
	designDoc = {
	_id: mesgInkey,
	title: content
};

	this.livepouch.put(designDoc, function(err, response) {

		});

};

/**
* delete one pouchdb document
* @method deleteDoc
*
*/
pouchdbServer.prototype.del = function(docid) {

	this.livepouch.get(docid, function(err, doc) {
		db.remove(doc, function(err, response) { });
	});

};

/**
* a mapquery on pouchdb documents by NAME
* @method mapQueryname
*
*/
pouchdbServer.prototype.mapQueryname = function(callbackin) {

			function map(selfengine) {
				if(selfengine.networkidentity) {
				emit(selfengine.networkidentity, selfengine.networkidentitylink);
				}
			}
			this.livepouch.query({map: map}, {reduce: false}, function(err, response) {
//console.log(response);
				callbackin(response);
		});

};

/**
* a mapquery on pouchdb documents by KNOWLEDGE word
* @method mapQueryknowledge
*
*/
pouchdbServer.prototype.mapQueryknowledge = function(callbackin) {

			function map(selfengine) {
				if(selfengine.knowledgeword) {
				emit(selfengine.knowledgeword, selfengine.knowledgelink);
				}
			}
			this.livepouch.query({map: map}, {reduce: false}, function(err, response) {
//console.log(response);
				callbackin(response);
		});

};

/**
* a mapquery on pouchdb documents by KNOWLEDGE LIST words
* @method mapQueryknowledgelist
*
*/
pouchdbServer.prototype.mapQueryknowledgelist = function(callbackin) {

			function map(selfengine) {
				if(selfengine.knowledgelist) {
				emit(selfengine.knowledgestart, selfengine.knowledgelist);
				}
			}
			this.livepouch.query({map: map}, {reduce: false}, function(err, response) {
//console.log(response);
				callbackin(response);
		});

};



/**
* a mapquery on pouchdb documents by LIVE attention context
* @method mapQueryLIVE
*
*/
pouchdbServer.prototype.mapQueryLIVE = function(callbackin) {

			function map(selfengine) {
				if(selfengine.tooltemplate ) {
					emit(selfengine.lifedata, selfengine.lifedata.networkidentity);
				}
			}
			this.livepouch.query({map: map}, {reduce: false}, function(err, response) {
//console.log('live query callback response');
//console.log(response);
				callbackin(response);
		});

};


/**
* list changes on pouchdb log
* @method changeLog
*
*/
pouchdbServer.prototype.createReadStream = function(thisIN) {
console.log('start readstream changes');
		var newLKNM = this.livepouch.changes({
			since: 'now',
			live: true,
			include_docs: true
	}).on('change', function(change) {
	  // handle change
		thisIN.emit("newMfile", change.doc.title);

	}).on('error', function (err) {
console.log(err);
});

};

/**
* filter applied to pouchdb logs data
* @method filterchangeLog
*
*/
pouchdbServer.prototype.filterchangeLog = function(callbackin) {

	var options = {};
	options.filter = filterin;//'swimmers/nameslist';
	options.include_docs = true;

	options.complete = function(err, response) {

		callbackin(response);
	};

	this.livepouch.changes(options);


};

/**
* copy pouchdb locally or to couchdb?
* @method replicate
*
*/
pouchdbServer.prototype.replicate = function() {

PouchDB.replicate(this.account.pouchdbname, 'selfenginecloud', {
  onChange: onChange,
  complete: onComplete
});


};

/**
* Delete a whole database
* @method deletePouch
*
*/
pouchdbServer.prototype.deletePouch = function() {

	PouchDB.destroy(this.account.pouchdbname, function(err, info) { });


};

module.exports = pouchdbServer;
