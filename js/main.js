import angular from 'angular';
import 'angular-ui-router';
import $ from 'jquery';

// Controllers
import HomeCtrl from './controllers/home.ctrl';
import CharactersCtrl from './controllers/characters.ctrl';
import AddCtrl from './controllers/add.ctrl';
import DetailsCtrl from './controllers/details.ctrl';
import DeleteCtrl from './controllers/delete.ctrl';
// Services
import CharactersService from './services/characters.service';

import config from './config'

angular.module('app', ['ui.router'])

	.constant('PARSE', {
		URL: 'https://api.parse.com/1/',
		CONFIG: {
			headers: {
				'X-Parse-Application-Id': 'mWLrPdyZMGpxlgE5eN12Ba5g7tsxxkALVRXTERl4',
				'X-Parse-REST-API-Key': 'DqVGUTIVyQT3Bajx2Zzo7VqEQnqb064ISMFW3yrI'
			}
		}
	})

	.controller('HomeCtrl', HomeCtrl)
	.controller('CharactersCtrl', CharactersCtrl)
	.controller('AddCtrl', AddCtrl)
	.controller('DetailsCtrl', DetailsCtrl)
	.controller('DeleteCtrl', DeleteCtrl)

	.service('CharactersService', CharactersService)


	.config(config)





;