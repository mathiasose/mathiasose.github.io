function PageControl($scope,$location,$http,$window) {

    var en_dict = {};
    var no_dict = {};
    var window_language = $window.navigator.userLanguage || $window.navigator.language;

    $http.get('js/lang.json')
        .success(function (data) {
            $.each(data, function() {
                en_dict[this.id] = this.en;
                no_dict[this.id] = this.no;
            });
        });

    $scope.d = (window_language === 'nb-NO' || window_language === 'nn-NO') ? no_dict : en_dict;

    $scope.changeView = function() {
        if ($location.path() == '/cv') {
            $location.path('');
            en_dict["changeView"] = "View CV";
            no_dict["changeView"] = "Se CV";
        } else {
            $location.path('cv');
            en_dict["changeView"] = "Close CV";
            no_dict["changeView"] = "Lukk CV";
        }
    };

    $scope.changeLang = function(arg) {
        $scope.d = ($scope.d == en_dict) ? no_dict : en_dict;
    };
}