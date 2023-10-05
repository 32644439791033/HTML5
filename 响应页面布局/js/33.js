window.onload = function(){
    // 获取progress对象
    var progress = document.getElementById("progress");
    // 获取show对象
    var show = document.getElementById("show");
    // 获取progress_bar对象
     // 为进度条右侧圆点绑定鼠标按下事件
    var progress_bar =  document.getElementById("progress-bar");
    progress_bar.onmousedown = function(event){
        event = event || window.event;
        //获取圆点偏移量
        var progressLeft = event.clientX - this.offsetLeft;

        // 为右侧圆点绑定拖动事件
        document.onmousemove = function(event){
            event = event || window.event;
            // 获取鼠标坐标
            var progressX = event.clientX - progressLeft;
            if(progressX<=0){
                // 暂停拖动（如果拖动条超出范围，则停止拖动）
                progressX = 0;
            }
            else if(progressX>=800){
                progressX = 800;
            }
            console.log(progressX);
            progress_bar.style.left = progressX+"px";
            // 显示进度条
            progress.style.width = progressX+"px";
            // 显示进度条百分比
            show.innerHTML = Math.round(progressX/8)+"%";

        };

        // 为右侧圆点绑定鼠标抬起事件
        document.onmouseup = function(event){
            event = event || window.event;
            // 取消鼠标移动事件
            document.onmousemove = null;
            // 取消鼠标抬起事件
            document.onmouseup = null;
        };
        //取消浏览器对拖拽内容进行搜索的默认行为
        return false;
    };

};