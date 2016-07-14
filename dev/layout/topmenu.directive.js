(function(){
	angular.module('topMenu')
		.directive('sgTopmenu', SgTopMenu)

	function SgTopMenu(){
		return {
			restrict: 'E',
			templateUrl: './js/templates/topmenu.tpl.html'
		}
	}
})()