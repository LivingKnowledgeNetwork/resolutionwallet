/**
* LKN validate compute
*
* LKN compute valication class
*
*
* @package    ComputeValid
* @copyright  Copyright (c) 2017 James Littlejohn
* @license    http://www.gnu.org/licenses/old-licenses/gpl-3.0.html
* @version    $Id$
*/

/**
* ComputeValid constructer
* @class ComputeValid
*/
var ComputeValid = function() {


};

/**
* check compatibilty
* @method validatdString
*
*/
ComputeValid.prototype.validatdString = function(socket) {

  socket.emit('validate-compute', 'passed');

};

module.exports = ComputeValid;
