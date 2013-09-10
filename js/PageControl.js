$('#cv').hide(0);
var cv_visible = false;
var fadeTime = 1500;
var cur_lang = 'en';

function PageControl($scope) {

    $scope.changeView = function() {
        var btn = $('#changeView');
        var footer = $('#footer');
        var cv = $('#cv');
        var start = $('#start');

        if ( !btn.attr('disabled') ) {
            btn.attr('disabled', true);
            setTimeout(function() {
                btn.attr('disabled', false);
            }, 2*fadeTime);

            footer.fadeOut(fadeTime);

            if ( cv_visible ) {
                cv.fadeOut(fadeTime);
                setTimeout(function() {
                    start.fadeIn(fadeTime);
                }, fadeTime);

                btn.html("<i class=\"icon-expand-alt\"></i> CV");

                $("html, body").animate({ scrollTop: 0 }, "slow");
            } else {
                start.fadeOut(fadeTime);
                setTimeout(function() {
                    cv.fadeIn(fadeTime);
                }, fadeTime);

                btn.html("<i class=\"icon-collapse-alt\"></i> CV");
            }

            footer.fadeIn(fadeTime);
            cv_visible = !cv_visible;
        }
    };

    $scope.changeLang = function() {

        if ( cur_lang == 'en' ){
            cur_lang = 'no';
        } else {
            cur_lang = 'en';
        }

        var lang = $.getJSON('lang.json');

        console.log(lang);

        $(lang).each(function() {
            var id = $('#' + this.id);
            if ( cur_lang == 'no' ){
                id.html(this.no);
            } else {
                id.html(this.en);
            }
        });
    };

}