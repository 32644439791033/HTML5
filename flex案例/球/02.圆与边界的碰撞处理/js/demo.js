window.onload =function(){

	
	var w = 800;//画布宽度
	var h = 800;//画布高度


	var canvas = document.querySelector("canvas")
	var ctx = canvas.getContext('2d');
	
	function Ball(x,y,r,color,xs,ys){
		this.x =  x ;        //小球起始x坐标
		this.y =  y;          //小球起始y坐标
		this.r = r;                //小球半径
		this.color = color;         //小球半径颜色
		this.xs= xs;           //定义水平移动速度
		this.ys= ys;           //定义竖向移动速度
	
		this.show = function(){
			ctx.beginPath()
		    ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
		    ctx.fillStyle = this.color;
			ctx.fill(); 
		}
		
		this.move= function(){
		
			 if(this.x+this.r>=w || this.x-this.r<=0){   //圆点坐标+半径 超出了右边框     或者   圆点坐标减去半径小于0了超出了 左边框
			 		this.xs =-this.xs		
			 	}
			 	this.x = this.x+this.xs;
			 	
			 	if(this.y+this.r>=h || this.y-this.r<=0){   //圆点坐标+半径 超出了下边框     或者   圆点坐标减去半径小于0了超出了 上边框
			 		this.ys =-this.ys		
			 	}
			 	this.y = this.y+this.ys;
			 
		 }
		
	}
	
	
   //ball就是对象名
	 var arr = [];
	  for(var i =0 ;i<10;i++){
		  
		  var x =  Rr(50,750) ;        //小球起始x坐标
		  var y =  Rr(50,750);          //小球起始y坐标
		  var r = Rr(10,50);                //小球半径
		  var color ="rgb("+Rr(0,255)+","+Rr(0,255)+","+Rr(0,255)+")";         //小球半径颜色
		  var xs= Rr(-2,5);           //定义水平移动速度
		  var ys= Rr(-2,5);           //定义竖向移动速度
		  
		  var ball = new Ball(x,y,r,color,xs,ys);
		  arr.push(ball)
  
	  }
	  
	 
		  setInterval(function(){
			  ctx.clearRect(0,0,w,h);
		  	
			for(var i = 0 ; i<arr.length ; i++){	  

		  	    arr[i].move()
		  		arr[i].show()
		  	  }
		  	
		  },10)
		    
		  
		  
	
	  
	// setInterval(function(){
		
	// 	ctx.clearRect(0,0,w,h);
		
	// 	    ball.move()
	// 		ball.show()
		
		
	// },10)
	  
	  
	  
	  
	  
	  
	  
	  
	// setInterval(function(){
		
	// 	ctx.clearRect(0,0,w,h);
		
	// 	    ball.move()
	// 		ball.show()
		
		
	// },10)
	  
	  
	  
	

	//1 这个球要显示在画布上面
	//2. 这个球要移动
	//3. 碰撞检测
	function Rr(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值 
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

	// var time_t = setInterval(function(){
	// 	ctx.clearRect(0,0,w,h);
	// 	if(x+r>=w || x-r<=0){   //圆点坐标+半径 超出了右边框     或者   圆点坐标减去半径小于0了超出了 左边框
	// 		xs =-xs		
	// 	}
	// 	x = x+xs;
		
	// 	if(y+r>=h || y-r<=0){   //圆点坐标+半径 超出了下边框     或者   圆点坐标减去半径小于0了超出了 上边框
	// 		ys =-ys		
	// 	}
	// 	y = y+ys;
		
	// 	drawArc(x,y,r,"red");
	// },10)
	
	//  function drawArc(x,y,r,color){
	// 	 ctx.beginPath()
	// 	 ctx.arc(x,y,r,0,Math.PI*2,true);
	// 	 ctx.fillStyle = color;
	// 	 ctx.fill(); 
	//  }

}