/**
* LKN validate data
*
* LKN data valication class
*
*
* @package    DataValid
* @copyright  Copyright (c) 2017 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/

/**
* DataValid constructer
* @class DataValid
*/
var DataValid = function() {


};

/**
* check compatibilty
* @method validatdString
*
*/
DataValid.prototype.validatdString = function(socket) {

  socket.emit('validate-data', 'passed');

};

module.exports = DataValid;
