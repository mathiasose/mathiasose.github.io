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

        var lang = [
            {
                "id":"hi",
                "en":"Hi, i'm Mathias Ose, and this is my web page.",
                "no":"Hei, jeg heter Mathias Ose, og dette er min webside."
            },
            {
                "id":"about",
                "en":"There's not much to see here, but you can find some information about me in my CV, <br> or follow one of the icon links below to find me elsewhere on the internet.",
                "no":"Her er ikke så mye å se, men du kan finne litt info om meg i CVen min, <br> eller trykke på en av ikonene nedenfor for å finne meg et annet sted på internett."
            },
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
            },
            {
                "id":"educationHeader",
                "en":"Education",
                "no":"Utdanning"
            },
            {
                "id":"internationalClass",
                "en":"International class",
                "no":"Internasjonal klasse"
            },
            {
                "id":"friluft",
                "en":"Outdoor Life",
                "no":"Friluft, foto og miljø"
            },
            {
                "id":"ntnu",
                "en":"<a href=\"http://www.ntnu.edu/\">Norwegian University of Science and Technology</a>",
                "no":"<a href=\"http://www.ntnu.no/\">NTNU</a>"
            },
            {
                "id":"mtdt",
                "en":"<a href=\"http://www.ntnu.edu/studies/mtdt\">Computer Science</a>",
                "no":"<a href=\"http://www.ntnu.no/studier/mtdt\">Datateknikk</a>"
            },
            {
                "id":"ntnuTimespan",
                "en":"2012 - present",
                "no":"2012 - i dag"
            },
            {
                "id":"experienceHeader",
                "en":"Experience",
                "no":"Erfaring"
            },
            {
                "id":"studentmediene",
                "en":"Trondheim Student Media",
                "no":"Studentmediene i Trondheim"
            },
            {
                "id":"itutvikler",
                "en":"IT developer",
                "no":"IT-utvikler"
            },
            {
                "id":"project",
                "en":"Project",
                "no":"Prosjekt"
            },
            {
                "id":"qualificationsHeader",
                "en":"Other qualifications",
                "no":"Annet"
            },
            {
                "id":"technologies",
                "en":"Familiar technologies",
                "no":"Kjennskap til teknologier"
            },
            {
                "id":"languages",
                "en":"Fluent languages",
                "no":"Språk"
            },
            {
                "id":"norwegian",
                "en":"Norwegian",
                "no":"Norsk"
            },
            {
                "id":"english",
                "en":"English",
                "no":"Engelsk"
            }/*
             ,
             {
             "id":"",
             "en":"",
             "no":""
             }
             */
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