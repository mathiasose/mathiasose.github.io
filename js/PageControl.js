var cur_lang = 'en';
var lang = null;

function PageControl($scope,$location) {

	$scope.changeView = function() {
		if ( $location.path() == '/cv' ){
			$location.path('');
		} else {
			$location.path('cv');
		}
	};

	$scope.changeLang = function() {

		if ( cur_lang == 'en' ){
			cur_lang = 'no';
		} else {
			cur_lang = 'en';
		}

		$.getJSON('js/lang.json', function(data) {
			$.each(data, function(data) {
				var id = $('#' + this.id);
				if ( cur_lang == 'no' ){
					id.html(this.no);
				} else {
					id.html(this.en);
				}
			});
		});
	};
}