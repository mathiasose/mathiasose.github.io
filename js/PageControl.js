$('#cv').hide(0);
var cv_visible = false;
var fadeTime = 1500;

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
                btn.html('View CV');
                cv.fadeOut(fadeTime);
            } else {
                btn.html('Hide CV');
                cv.fadeIn(fadeTime);
            }

            footer.fadeIn(fadeTime);
            cv_visible = !cv_visible;
        }
    };

}