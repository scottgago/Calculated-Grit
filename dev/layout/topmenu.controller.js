(function(){
	angular.module('topMenu', ['ngMaterial'])
		.controller('topMenuCtrl', TopMenuCtrl)

	function TopMenuCtrl(){
		console.log("initialized Ctrl")
	}
})()

require('./topmenu.directive')