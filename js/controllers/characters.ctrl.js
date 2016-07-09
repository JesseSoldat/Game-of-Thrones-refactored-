let CharactersCtrl = function($scope, CharactersService, $state) {
	CharactersService.getCharacters().then( (res) => {
		console.log(res);
		$scope.characters = res.data.results;
	})
	

};


CharactersCtrl.$inject = ['$scope', 'CharactersService', '$state'];

export default CharactersCtrl;