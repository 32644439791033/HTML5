window.onload =function(){

	
	var canvas = document.querySelector("canvas")
	var ctx = canvas.getContext('2d');
	var w = 800
	var h = 800

	function Ball(x,y,r,color,xs,ys){
		this.x = x;   //圆点的x坐标
		this.y = y;   //圆点的y坐标
		this.r = r;  //圆半径
		this.color = color;  //圆的颜色
		this.xs = xs; //圆的x轴的移动速度
		this.ys = ys;  //圆的y轴的移动速度     //以上都是公用的一些属性
		
	}

	Ball.prototype.draw = function(){

		ctx.beginPath()
		ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
		ctx.fillStyle = this.color;
		ctx.fill(); 
	}
	
	
	Ball.prototype.move = function(){
		
		if(this.x+this.r>=w || this.x-this.r<=0){   //圆点坐标+半径 超出了右边框     或者   圆点坐标减去半径小于0了超出了 左边框
			this.xs =-this.xs		
		}
		this.x = this.x+this.xs;
		
		if(this.y+this.r>=h || this.y-this.r<=0){   //圆点坐标+半径 超出了下边框     或者   圆点坐标减去半径小于0了超出了 上边框
			this.ys =-this.ys		
		}
		this.y = this.y+this.ys;
	}
	
	var ballarr=[]    //创建一个数组 用来保存小球
	
	for(var i=0;i<20; i++){
		var x = getRandom(50,750)
		var y = getRandom(50,750)
		var r = getRandom(10,50)
		var xs = getRandom(1,5)
		var ys = getRandom(1,5)
		var color = "rgb("+ getRandom(0,255)+","+ getRandom(0,255)+","+ getRandom(0,255)+")"
		var ball =  new Ball(x,y,r,color,xs,ys)   //new出10个小球
		ballarr.push(ball)
	}

  setInterval(function(){  //让每每个小球移动
	  ctx.clearRect(0,0,w,h)
	  for(var i=0;i<ballarr.length; i++){
		  ballarr[i].move()
		  ballarr[i].draw()
	  }
  },10)


function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
}


}