(function(){
	console.log("sup")
	angular.module('topMenu', ['ngMaterial'])
		.directive('sgTopmenu', SgTopMenu)

	function SgTopMenu(){
		return {
			restrict: 'E',
			templateUrl: 'topmenu.tpl.html'
		}
	}
})()