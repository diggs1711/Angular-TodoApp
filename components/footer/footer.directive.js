;(function() {

    var footer = function() {

      return {
        restrict: 'E',
        templateUrl: './components/footer/footer.html',
        controller: 'FooterController'
      };
    };

    app.directive("footer", footer);
})();
