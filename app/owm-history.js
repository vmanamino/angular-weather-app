angular.module('owmHistory', [])
    .controller('HistoryCtrl', ['owmHistory', '$scope', function(owmHistory, $scope){
        $scope.$watchCollection(
            function(){
                return owmHistory.list();
            },
            function(oldListings, newListings) {
                $scope.listings = newListings;
                console.log($scope.listings);
            }
        );
        // $scope.listings = owmHistory.list();
        // console.log($scope.listings);
    }])
        .factory('owmHistory', function() {
            var historyQueue = [];
            return {
                push: function(entry) {
                    historyQueue.push(entry);
                },
                list: function() {
                    return historyQueue;
                }
        };
    });