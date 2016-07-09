let CharactersService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/characters';

	this.getCharacters = function() {
		return $http({
			url: url,
			headers: PARSE.CONFIG.headers,
			method: 'GET',

		});
	}
};

CharactersService.$inject = ['$http', 'PARSE'];

export default CharactersService;