$(document).ready(function(){
    //随浏览器自适应大小
    function reSize(){
      var windowWidth=$(window).width();
      $(".container").width( windowWidth*0.6);
      $(".container").height( windowWidth*0.5);
      $("li").height( windowWidth*0.1);
      $("li").css("line-height",windowWidth*0.1+"px");
    };
    reSize();
    window.onresize=reSize;

    //获取日期和时间数组
    function showTime(days){  
      var time1,time2,timeString,month,day,date,year,hour,minute,second,apm,timeArr;

      //time1当前日期;
      time1=new Date(); 
      time2=new Date(time1);

      //time2为days天后的日期;
      time2.setDate(time1.getDate()+days);
      timeString=time2.toString();
      month=timeString.slice(4,7);
      day=timeString.slice(0,3);
      date=timeString.slice(8,10);
      year=timeString.slice(11,15);
      hour=timeString.slice(16,18);
      minute=timeString.slice(19,21);
      second=timeString.slice(22,24);
      apm;
      hour>0&&hour<12?apm='AM':apm='PM';
      timeArr=[day,month,date,hour,minute,apm];
      return timeArr;   
  }

    //日期数据渲染
    function renderDate(){
      $(".data li").each(function(index){
            var i;
            for(i=0;i<3;i++){
              $(this).find('span:eq('+i+')').html(showTime(index+count_date-2)[i]);
            }
        });
        if(count_date==0){
          var todayStr='<span></span><span><em>Today</em></span><span></span>'
          $(".data li:eq(2)").html(todayStr);
        };
    }

    //页面加载完成，设置初始日期数据
    var count_date=0;
    renderDate();

    //手指滑动事件函数
    var Swip=function(ele,swipDown,swipUp){
        var startX,startY,endX,endY,moveX,moveY;
        var element=$(ele)[0];
        var compareNum=40;
        function touchStart(event){
            event.preventDefault();
            var touch=event.touches[0];
            startX=touch.clientX;
            startY=touch.clientY;
        };
        function touchMove(event){
            event.preventDefault();
            var touch=event.touches[0];
            endX=touch.clientX;
            endY=touch.clientY;
            moveX=endX-startX;
            moveY=endY-startY;
            if (Math.abs(moveY)>=Math.max(Math.abs(moveX),40)) {
                if (moveY>0) {
                    var swipDownNum=Math.abs(moveY); 
                    if(swipDownNum>compareNum){
                        swipDown();
                        compareNum+=100;
                    }; 
                }else{
                    var swipDownNum=Math.abs(moveY);   
                    if(swipDownNum>compareNum){
                        swipUp();
                        compareNum+=100;
                    } 
                };
            };
        };
        function touchEnd(event){
            event.preventDefault();
            var touch=event.changedTouches[0];
            compareNum=40;
        };
         function touchCancel(event){
            event.preventDefault();
            var touch=event.changedtouches[0];
            compareNum=40;
        };
        element.addEventListener('touchstart',touchStart,false);
        element.addEventListener('touchmove',touchMove,false);
        element.addEventListener('touchend',touchEnd,false);
        element.addEventListener('touchcancel',touchCancel,false);
        };

    //手指下滑，插入更早的日期
    function dateSwipDown(){
       count_date--;
       var liStr="<li><span></span><span></span><span></span></li>";
      $(liStr).prependTo('.data ul');
      $('.data li').last().remove();
        reSize();
        //内容渲染
       renderDate();
    };
    //手指上滑，插入更晚的日期
    function dateSwipUp(){
        count_date++;
        var liStr="<li><span></span><span></span><span></span></li>";
        $(".data li").first().remove();
        $('.data ul').append(liStr);
        reSize();
        //日期内容渲染
        renderDate();
    };
    //调用手指滑动事件函数
    Swip('.data',dateSwipDown,dateSwipUp);

    //初始渲染小时和分钟数据
    function upDateTime(){
        $('.hour ul li').each(function(index){
          $(this).html(showTime(0)[3]-2+index);
        });
        upDateApm();
         $('.minute ul li').each(function(index){
          $(this).html(showTime(0)[4]-2+index);
        });
    }

    //每30秒更新一次小时和分钟数据
    upDateTime();
    var upDate=setInterval(upDateTime,60000);

    //更新AM和PM数据
    function upDateApm(){
      var nowHour=$('.hour ul li').eq(2).html()
      if(nowHour>=0&&nowHour<=12){
          var arrAm=['','AM','PM'];
          var i;
          for(i=0;i<arrAm.length;i++){
            $('.half-day ul li').eq(i+1).html(arrAm[i]);
          };
        }else{
          var arrPm=['AM','PM',''];
          var j;
          for(j=0;j<arrPm.length;j++){
            $('.half-day ul li').eq(j+1).html(arrPm[j]);
          };
        }
    }

    function hourSwipDown(){
        var topHour=$('.hour ul li').first().html();
        if(parseInt(topHour)>=1){
          $('.hour ul').prepend('<li>'+(parseInt(topHour)-1)+'</li>');
          if(parseInt(topHour)==22){
             dateSwipDown();
          }
        }else{
           $('.hour ul').prepend('<li>'+23+'</li>');
          
        }
        $('.hour ul li').last().remove();
        reSize();
        upDateApm();
    }

    function hourSwipUp(){
        var bottomHour=$('.hour ul li').last().html();
        if(parseInt(bottomHour)<=22){
          $('.hour ul').append('<li>'+(parseInt(bottomHour)+1)+'</li>');
          if(parseInt(bottomHour)==1){
             dateSwipUp();
          }
        }else{
          $('.hour ul').append('<li>'+0+'</li>');
          }
          $('.hour ul li').first().remove();
          reSize();
          upDateApm();
    }

    //调用手指滑动事件函数
    Swip('.hour',hourSwipDown,hourSwipUp);

    function minuteSwipDown(){
        var topMinute=$('.minute ul li').first().html();
        if(parseInt(topMinute)>=1){
          $('.minute ul').prepend('<li>'+(parseInt(topMinute)-1)+'</li>');
          if(parseInt(topMinute)==58){
            hourSwipDown();
          }
        }else{
           $('.minute ul').prepend('<li>'+59+'</li>');
        }
        $('.minute ul li').last().remove();
        reSize();
    }

    function minuteSwipUp(){
        var bottomMinute=$('.minute ul li').last().html();
        if(parseInt(bottomMinute)<=58){
          $('.minute ul').append('<li>'+(parseInt(bottomMinute)+1)+'</li>');
          if(parseInt(bottomMinute)==1){
            hourSwipUp();
          }
        }else{
          $('.minute ul').append('<li>'+0+'</li>');
          }
          $('.minute ul li').first().remove();
          reSize();
    }

    //调用手指滑动事件函数
    Swip('.minute',minuteSwipDown,minuteSwipUp); 
});