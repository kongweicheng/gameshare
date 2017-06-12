//请求数据部分

//var postJson = function(path, data, next)
//{
//	$.ajax({
//		type:"post",
//		url:"http://192.168.199.218:3000/" + path,
//		data:data,
//		dataType:'json',
//		success:next,
//		error:function(){}
//	});
//}
//var getJson = function(path, data, next)
//{
//	$.ajax({
//		type:"get",
////		url:"http://192.168.199.218:/3000" + path,
//    url:"http://116.62.138.43:3000/"+path,
//		data:data,
//		dataType:'json',
//		success:next,
//		error:function(){}
//	});
//}
//
//

//
//getJson("info/getAppInfo", {infoType:1}, function (data)
//{
//	console.log(data);
//	if(!data || data.result)
//	{
//		return;
//	}
//
//	var allAppInfo = data.data;
//	for(var count = 0; count < allAppInfo.length; count++)
//	{
//		var appInfo = allAppInfo[count];
//		var appid = appInfo.appid;
//		var baseInfo = appInfo.baseInfo;
//
//		if(count === 0)
//
//		{
//
//			$(".wenzi .s1").html(baseInfo.size + "KB");
//			$(".wenzi .name1").html(baseInfo.name);
//			$(".wenzi .logo1")[0].src=baseInfo.icon;
//			$(".wenzi .jx1").text(baseInfo.briefIntroduction);
//			$(".wenzi .dp1").text(baseInfo.downloadCount+"人下载");
//
//		}
//
//		if(count===1){
//			$(".wenzi .s2").html(baseInfo.size+"KB");
//
//		}
//
//		if(count===2){
//			$(".wenzi .s3").html(baseInfo.size+"KB");
//
//		}
//
//		if(count===3){
//			$(".wenzi .s4").html(baseInfo.size+"KB");
//
//		}
//
//
//	}
//
//
//
//});

//
//$.ajax({
//	type:"get",
//	url:"http://192.168.199.218:3000/info/getAppInfo",
//	data:{
////		"id":1
//        infoType:2
//	},
//	dataType:'json',
//	success:function(data){
//		if(data.result)
//		{
//			return;
//		}
//
//		var allAppInfo = data.data;
//
//
//		for(var count = 0; count < allAppInfo.length; count++)
//		{
//			var appInfo = allAppInfo[count];
//			var appid = appInfo.appid;
//			var baseInfo = appInfo.baseInfo;
//			if(count === 0)
//			{
//				$(".wenzi .size").html(baseInfo.size + "KB");
//			}
//		}
//	},
//	error:function(){
//		console.log("异常");
//	}
//});

var app = angular.module('indexApp', []);
app.controller('indexCtrl', function($scope, $http,$timeout) {

	$scope.data = '';
	$scope.src = window.location.hostname;
	$scope.src = 'http://116.62.138.43:3001';
	var u = navigator.userAgent;
	if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
         $scope.platform = 'android';
     } else if (u.indexOf('iPhone') > -1) {
        $scope.platform = 'ios';
    } else  {
         $scope.platform = '';
     }
	$http({
		method: 'GET',
		contentType:'application/json',
		url: $scope.src + '/info/getAppInfo?appType=all&infoType=1'
	}).then(function successCallback(ret) {
		if (ret.data.result == 0) {
			$scope.response = ret.data.data;
			$timeout(function() {
		//轮播图
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


        //tabs栏切换
        var tabsSwiper = new Swiper('.tabs-box',{
        	speed:500,
        	onSlideChangeStart: function(){
        		$(".tabs .active").removeClass('active');
        		$(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
        	}
        });
        $(".tabs a").on('touchstart mousedown',function(e){
        	e.preventDefault()
        	$(".tabs .active").removeClass('active');
        	$(this).addClass('active');
        	tabsSwiper.swipeTo($(this).index());
        });

        $(".tabs a").click(function(e){
        	e.preventDefault();
        });
    },0)
		};
	}, function errorCallback(response) {
		// 请求失败执行代码

	});
	$scope.showEwm=function(e){
		$scope.ewmsrc= $scope.src + '/resources/image/qr/'+e
      
	};
	
	
	//ul 页面跳转
	$scope.toURL=function(e){
//		$scope.src=src+"xq.html?appid="+e.appid;
      alert(1);
		
		
	}

});