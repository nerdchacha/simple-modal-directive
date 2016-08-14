/**
 * Created by dell on 8/13/2016.
 */
angular.module('modalApp')
    .controller('mainCtrl',function($scope, YgModal){
        //Create closure to pass values
        function confirm(x){
            return function(){
                console.log(x);
                console.log('aha!');
            };
        }
        $scope.open = function(x){
            YgModal.confirm(confirm(x));
            YgModal.open('Are you sure you want to delete this?', 'This will delete the item permanently');
        };
        $scope.close = YgModal.close;


    });