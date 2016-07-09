let AddCtrl = function($scope, CharactersService){

	$scope.addChar = function(char){
		
		CharactersService.addChar(char).then( (res) => {
			console.log(res);
		});
	}



}
AddCtrl.$inject = ['$scope', 'CharactersService'];

export default AddCtrl;