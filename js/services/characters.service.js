let CharactersService = function($http, PARSE) {

	let url = PARSE.URL + 'classes/characters';
	let headers = PARSE.CONFIG;

	//Get all the Characters
	this.getCharacters = function() {
		return $http.get(url, headers);
	}
	//Ge a single Character 
	this.getChar = function(char){
		let id = char.id;
		let path = url + '/' + id;
		return $http.get(path, headers);
	}
	//Add a Character
	this.addChar = function(char){
		return $http.post(url, char, headers)
	}
	//Delete a Character
	this.deleteChar = function(char){
		let id = char.id;
		let path = url + '/' + id;
		return $http.delete(path, headers)
	}
};

CharactersService.$inject = ['$http', 'PARSE'];

export default CharactersService;