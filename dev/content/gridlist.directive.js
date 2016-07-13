(function(){
	angular.module('gridList')
		.directive('sgGridlist', SgGridList)

	function SgGridList(){
		return {
			restrict: 'E',
			require: 'sgGridlist',
			templateUrl: "./js/templates/gridlist.tpl.html",
			controller: 'gridListCtrl',
			controllerAs: 'vm',
			bindToController: true
		}
	}
})()