/**
 * Created by foxit on 10/12/16.
 */
angular.module('app').controller('ReaderCreateCtrl',
    function ReaderCreateCtrol(){
        var vm = this;
        vm.submit = function(form){
            console.log(form);
        };
    }
);