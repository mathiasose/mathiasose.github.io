$('#cv').hide(0);
var cv_visible = false;
var fadeTime = 1500;
var cur_lang = 'en';

function PageControl($scope) {

    $scope.changeView = function() {
        var btn = $('#changeView');
        var footer = $('#footer');
        var cv = $('#cv');

        if ( !btn.attr('disabled') ) {
            btn.attr('disabled', true);
            setTimeout(function() {
                btn.attr('disabled', false);
            }, 1500);

            footer.fadeOut(fadeTime);

            if ( cv_visible ) {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                btn.html("<i class=\"icon-expand-alt\"></i> CV");
                cv.fadeOut(fadeTime);
            } else {
                btn.html("<i class=\"icon-collapse-alt\"></i> CV");
                cv.fadeIn(fadeTime);
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

        var lang = [
            {
                "id":"address",
                "en":"Address",
                "no":"Addresse"
            },
            {
                "id":"dateOfBirth",
                "en":"Date of birth",
                "no":"Fødselsdato"
            },
            {
                "id":"birthdate",
                "en":"September 15th, 1992",
                "no":"15. September 1992"
            },
            {
                "id":"telephone",
                "en":"Telephone",
                "no":"Telefon"
            },
            {
                "id":"changeLang",
                "en":"Norsk",
                "no":"English"
            }
        ];

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