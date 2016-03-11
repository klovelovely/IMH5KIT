'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', function ($scope) {

        $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

        $scope.addTodo = function () {
            $scope.todos.unshift($scope.todo);
            $scope.todo = '';
        };

        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };

        // 阿里 IM 初始化
        WKIT.init({
            uid: '96316444408545314', // 客服的 im ID
            appkey: '23241405', // appkey
            credential: '8ce5f6641359d8f73093033d469c19c0', // 客服的 im 密码 (注意多了一次 md5)
            touid: '96358429945233435', // 要聊天的用户的 ID

            container: document.getElementById('J_IMContainer')
        });

    });
