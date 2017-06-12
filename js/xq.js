var app = angular.module('xqApp', []);
app.controller('xqCtrl', function($scope, $http,$timeout) {
	$scope.appid = GetQueryString('appid');
	$scope.response = '';
	$scope.src = window.location.host;
	$scope.src = 'http://116.62.138.43:3001';
	// $scope.platform = window.
	var u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
         $scope.platform = 'android';
     } else if (u.indexOf('iPhone') > -1) {
        $scope.platform = 'ios';
    } else  {
         $scope.platform = 'android';
     }
     $http({
     	method: 'GET',
     	contentType:'application/json',
     	url: $scope.src + '/info/getAppInfo?infoType=1&appid=' + $scope.appid
     }).then(function successCallback(ret) {
     	if (ret.data.result == 0) {
     		$scope.response = ret.data.data;
     		$scope.updataDate = new Date($scope.response[0].details.updateTime);
     		// console.log($scope.updataDate);
     		$timeout(function() {
     			var swiper = new Swiper('.swiper-container', {
     				pagination: '.swiper-pagination',
     				nextButton: '.swiper-button-next',
     				prevButton: '.swiper-button-prev',
     				loop:true,
     				paginationClickable: true,
     				spaceBetween: 30,
     				centeredSlides: true,
     				autoplay: 2500,
     				autoplayDisableOnInteraction: false
     			});
     		},0)
     	};

     }, function errorCallback(ret) {
		// 请求失败执行代码
	});

     $scope.showEwm=function(e){
     	$scope.ewmsrc= $scope.src + '/resources/image/qr/'+e

     };
 });

function GetQueryString(name)
{
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r!=null)return  unescape(r[2]); return null;
}