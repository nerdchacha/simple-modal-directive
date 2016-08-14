
angular.module('modalApp')
    .directive('ygModal',function(YgModal){
        return {
            restrict: 'E',
            scope: {},
            templateUrl: 'templates/modal.html',
            controller: function($scope,$element,$attrs){
                $scope.state = YgModal.getModalState;
                $scope.$watch('state().isOpen',function(newVal, oldVal){
                    $scope.title = $scope.state().title;
                    $scope.body = $scope.state().body;
                    $scope.confirm = function(){
                        $scope.close();
                      $scope.state().callback();
                    };
                    if(newVal === true){
                        //open the modal
                        $scope.isopen = true;
                    }
                    else {
                        //close the modal
                        $scope.isopen = false;
                    }

                    $scope.close = function(){
                        YgModal.close();
                        $scope.isopen = false;
                    }
                });
            }
        }
    });