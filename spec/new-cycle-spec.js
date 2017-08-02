/*
* check steam elements
* casperjs test test/ --baseUrl=http://localhost/resolutionwallet/src/index.html
*/
var baseUrl = casper.cli.get('baseUrl');

casper.test.comment("Add a new science cycle");

casper.start(baseUrl, function() {
  this.test.comment('click on build new mapping link');
  this.mouseEvent('click', '#dmap-list');
});

casper.then(function() {
	this.test.comment('check visable and base sections for dynamic content');
	casper.test.assertExists('#new-lkn-cycle', 'the element exists');
  casper.test.assertExists('#lkn-start-cycle', 'the element exists');
  casper.test.assertNotVisible('#k-in-form', 'not visible');

});

casper.run(function() {

	this.test.done();

});
