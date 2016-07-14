(function(){
	angular.module('topMenu', [])
		.controller('topMenuCtrl', TopMenuCtrl)

	function TopMenuCtrl(){
		console.log("initialized Ctrl")
	}
})()

require('./topmenu.directive')