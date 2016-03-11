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

        // ���� IM ��ʼ��
        WKIT.init({
            uid: '96316444408545314', // �ͷ��� im ID
            appkey: '23241405', // appkey
            credential: '8ce5f6641359d8f73093033d469c19c0', // �ͷ��� im ���� (ע�����һ�� md5)
            touid: '96358429945233435', // Ҫ������û��� ID

            container: document.getElementById('J_IMContainer')
        });

    });
