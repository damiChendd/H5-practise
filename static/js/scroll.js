var  index=0;
var topInstance = 0;

//页面加载事件
window.onload = function () {
  var i;
  for (i=0;i<6;i++) {
    document.getElementById('page'+(i+1)).style.height = document.body.clientHeight + 'px';
  }
};

//滑屏事件
window.onscroll = function () {
};


// 鼠标滚轮事件
window.onmousewheel = function (e) {
  if(e.deltaY>0){
    if(index>=5){
      alert('到底了哦！');
      return
    }
    topInstance = topInstance-(document.body.clientHeight)+100;
    document.getElementById('main').style.top =  topInstance + 'px';
    index++;
  }else{
    if(index<=0){
      alert('到顶了哦！');
      return
    }
    topInstance = topInstance+(document.body.clientHeight)-100;
    document.getElementById('main').style.top =  topInstance + 'px';
    index--
  }
};

// 手机端触屏事件
window.touchmove = function () {
  console.log('触屏');
};
