;
(function() {

    var footerController = function($scope, listService) {

        $scope.clear = function() {
            listService.clearCompleteItems();
        };

    };

    app.controller("FooterController", ['$scope', 'listService', footerController]);
})();
