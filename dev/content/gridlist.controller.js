(function(){
	angular.module('gridList', ['ngMaterial'])
		.controller('gridListCtrl', gridListCtrl)

	function TopMenuCtrl(){
		console.log("initialized Ctrl")
	}
})()

require('./gridlist.directive')