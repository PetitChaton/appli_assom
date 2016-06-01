angular.module("assom", ["ionic","ionMdInput","ionic-material","ionic.rating","ionicLazyLoad","assom.controllers", "assom.services"])
	.run(function($ionicPlatform) {
		$ionicPlatform.ready(function() {
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			setTimeout(function() {
			}, 100);

		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])




.config(function($stateProvider, $urlRouterProvider,$sceDelegateProvider) {
	// Domain Whitelist
	$sceDelegateProvider.resourceUrlWhitelist([
		"self",
		new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
		new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
	]);
	$stateProvider
	.state("assom",{
		url: "/assom",
			abstract: true,
			templateUrl: "templates/assom-side_menus.html",
			controller: "side_menusCtrl",
	})

	.state("assom.about", {
		url: "/about",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-about.html",
						controller: "aboutCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.accueil", {
		url: "/accueil",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-accueil.html",
						controller: "accueilCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.aprassom", {
		url: "/aprassom",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-aprassom.html",
						controller: "aprassomCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.assom_art_festival", {
		url: "/assom_art_festival",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-assom_art_festival.html",
						controller: "assom_art_festivalCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.assom_chef", {
		url: "/assom_chef",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-assom_chef.html",
						controller: "assom_chefCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.assom_rush", {
		url: "/assom_rush",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-assom_rush.html",
						controller: "assom_rushCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.assomiades", {
		url: "/assomiades",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-assomiades.html",
						controller: "assomiadesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.faq", {
		url: "/faq",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-faq.html",
						controller: "faqCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("assom.soire_interasso", {
		url: "/soire_interasso",
		views: {
			"assom-side_menus" : {
						templateUrl:"templates/assom-soire_interasso.html",
						controller: "soire_interassoCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/assom/accueil");
});
