var Application = {};

(function(global, document, $, App, undefined) {
    "use strict";

    var $win = $(window),
        $doc = $(document),
        $body = $('body');

    App.init = function () {
        // something
    };

    var onDocumentReady = App.init;

    $(onDocumentReady);

}(window, document, jQuery, Application));