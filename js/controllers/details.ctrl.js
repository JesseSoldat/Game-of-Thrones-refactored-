let DetailsCtrl = function($scope, CharactersService, $stateParams){

	let id = $stateParams;

	CharactersService.getChar(id).then( (res) => {
	
		$scope.char = res.data;
	})


};
DetailsCtrl.$inject = ['$scope', 'CharactersService', '$stateParams'];

export default DetailsCtrl;