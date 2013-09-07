$('#cv').hide(0);
var cv_visible = false;
var fadeTime = 1500;

function PageControl($scope) {

    $scope.changeView = function() {
        $('#footer').fadeOut(fadeTime);
        if ( cv_visible ) {
            $('#changeView').html("View CV");
            $('#cv').fadeOut(fadeTime);
        } else {
            $('#changeView').html("Hide CV");
            $('#cv').fadeIn(fadeTime);
        }
        $('#footer').fadeIn(fadeTime);
        cv_visible = !cv_visible;
    };
}