var cur_lang = 'en';
var lang = null;

function PageControl($scope,$location,$http) {

	$scope.changeView = function() {
		if ( $location.path() == '/cv' ){
			$location.path('');
		} else {
			$location.path('cv');
		}
        $scope.changeLang(cur_lang);
	};

	$scope.changeLang = function( arg ) {

        if ( arg == 'other' ) {
            if ( cur_lang == 'en' ){
                cur_lang = 'no';
            } else {
                cur_lang = 'en';
            }
        } else {
            cur_lang = arg;
        }

        var swap = function(arg) {
            $.each(arg, function(){
                var id = $('#' + this.id);
                if ( cur_lang == 'no' ){
                    id.html(this.no);
                } else {
                    id.html(this.en);
                }
            });
        };

        if ( lang ) {
            swap(lang);
        } else {
            $http.get('js/lang.json')
                .success(function (data) {
                    lang = data;
                    swap(lang);
            });
        }
	};
}