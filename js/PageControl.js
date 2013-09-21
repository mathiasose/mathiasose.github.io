function PageControl($scope,$location,$http,$window) {

    var lang_resource = null;
    $http.get('js/lang.json')
        .success(function (data) {
            lang_resource = data;
            langSwap(lang_resource);
        });

    var window_language = $window.navigator.userLanguage || $window.navigator.language;

    var cur_lang = ( window_language === 'nb-NO' || window_language === 'nn-NO' ) ? 'no' : 'en';

    var correctButton = function() {
        if ( $location.path() == '/cv' )
            $('#changeView_closed' ).attr("id","changeView_open");
        else
            $('#changeView_open' ).attr("id","changeView_closed");
    };

    var langSwap = function(arg) {
        $.each(arg, function() {
            var id = $('#' + this.id);
            if ( cur_lang === 'no' )
                id.html(this.no);
            else
                id.html(this.en);
        });
    };

	var changeLang = function( arg ) {
        if ( arg == 'other' )
            cur_lang = ( cur_lang == 'en' ) ? 'no' : 'en';
        else
            cur_lang = arg;

        if ( lang_resource ) {
            langSwap(lang_resource);
        } else {
            $http.get('js/lang.json')
                .success(function (data) {
                    lang_resource = data;
                    langSwap(lang_resource);
                });
        }
	};

    var changeView = function() {
        if ( $location.path() == '/cv' )
            $location.path('');
        else
            $location.path('cv');
        correctButton();
        changeLang(cur_lang);
    };

    // give the scope access to the functions it needs
    $scope.changeLang = changeLang;
    $scope.changeView = changeView;

    // call these functions once after page load to ensure the page content is correct
    $(document).ready( function() {
        changeLang(cur_lang);
        correctButton();
    });
}