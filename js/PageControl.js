function PageControl($scope,$location,$window,Dicts) {
    // The index file and partials contain {{ expressions }} and ng-bind-htmls
    // that look for content in a dictionary called $scope.d.
    // $scope.d is simply a pointer to either the norwegian or english dictionary,
    // as defined in the Dicts service in app.js

    var en_dict = Dicts.en;
    var no_dict = Dicts.no;

    $scope.$on('$routeChangeSuccess', function(){
        // to make sure the button text matches the view
        if ($location.path() == '/cv') {
            en_dict["changeView"] = "Close CV";
            no_dict["changeView"] = "Lukk CV";
        } else {
            en_dict["changeView"] = "View CV";
            no_dict["changeView"] = "Se CV";
        }
    });

    // If a norwegian browser is detected, this will show the norwegian dict by default.
    // If not, it shows the english dict.
    var window_language = $window.navigator.userLanguage || $window.navigator.language;
    $scope.d = (window_language === 'nb-NO' || window_language === 'nn-NO') ? no_dict : en_dict;

    $scope.changeLang = function() {
        // This function is called by a button in the sidebar of index.html.
        // When $scope.d is pointed to a different dict, angular automatically and immediately
        // changes the page content.
        // Since this page only has two possible languages,
        // it simply switches to the other possibility,
        // but the function could easily be modified to take an argument.
        $scope.d = ($scope.d == en_dict) ? no_dict : en_dict;
    };

    $scope.changeView = function() {
        // This function is called by a button in the sidebar of index.html.
        // It will switch between the two views as configured in app.js.
        if ($location.path() == '/cv')
            $location.path('');
        else
            $location.path('cv');
    };
}