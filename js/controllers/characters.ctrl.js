let CharactersCtrl = function($scope, CharactersService) {
	CharactersService.getCharacters().then( (res) => {
		console.log(res.data.results);
		$scope.characters = res.data.results;
	})

};


CharactersCtrl.$inject = ['$scope', 'CharactersService'];

export default CharactersCtrl;