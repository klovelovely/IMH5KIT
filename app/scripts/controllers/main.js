'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
    .controller('MainCtrl', function ($scope, $route, $timeout, localStorageService) {

        // 用于更新导航当前项 active 状态
        $scope.currentRoute = $route.current.$$route.activetab;

        // 初始化 appkey
        $scope.appkey = '23241405';

        // 初始化当前要登陆的客服
        $scope.currentCustomerService = {
            uid       : '96316444408545314',
            credential: '8ce5f6641359d8f73093033d469c19c0'
        };

        // 初始化 "用户列表" 和 "当前聊天用户"
        $scope.chat = {
            list: [{
                touid   : '96358429945233435',
                touname : '你的表情包',
                toAvatar: 'http://mobileim.etao.com/mobileimweb/fileupload/downloadPriFile.do?type=1&fileId=96a5b67af18d616c857ebef836fd75d7.gif'
            }, {
                touid   : '96316444408545324',
                touname : 'miku',
                toAvatar: 'http://mobileim.etao.com/mobileimweb/fileupload/downloadPriFile.do?type=1&fileId=fb6253c1ced2eeee40a0f72a047b1140.jpg'
            }]
        };

        // 初始化 当前聊天用户
        $scope.chat.current = $scope.chat.list[0];

        // 初始化阿里 IM
        $timeout(function () {
            WKIT.init({
                appkey         : $scope.appkey, // appkey
                uid            : $scope.currentCustomerService.uid, // 客服的 im ID
                credential     : $scope.currentCustomerService.credential, // 客服的 im 密码 (注意多了一次 md5)
                touid          : $scope.chat.current.touid, // 要聊天的用户的 ID
                container      : document.getElementById('J_IMContainer'),
                width          : '100%',
                height         : 600,
                onAudioReceived: function (content) {
                    return '<audio src="' + content + '"  controls="controls"></audio>';
                }
            });
        }, 1000)

        /**
         * 切换当前聊天对象
         * @param index 当前对象在聊天列表中的索引, 从 0 开始.
         */
        $scope.switchCurrentChat = function (index) {

            $scope.chat.current = $scope.chat.list[index];

            console.log('切换到touid => ', $scope.chat.current.touid);

            WKIT.switchTouid({
                touid   : $scope.chat.current.touid,
                toAvatar: $scope.chat.current.toAvatar/*,
                 hasPrefix: true, // 选填
                 groupid: 1111, // 选填
                 sendMsgToCustomService: false // 选填*/
            });

        };

        /*var todosInStore = localStorageService.get('todos');

         // $scope.todos = [];
         $scope.todos = todosInStore || ['asdf', 'qwer', 'zxcvbnn'];

         $scope.$watch('todos', function () {
         localStorageService.set('todos', $scope.todos);
         }, true);

         $scope.addTodo = function () {
         $scope.todos.unshift($scope.todo);
         $scope.todo = '';
         };

         $scope.removeTodo = function (index) {
         $scope.todos.splice(index, 1);
         };*/

    });
