;(function (){
    function KeyDown(){
        //屏蔽 Alt+ 方向键 ←  //屏蔽 Alt+ 方向键 → 
        if ((window.event.altKey) && ((window.event.keyCode==37) || (window.event.keyCode==39))){ 
            event.returnValue = false;
        }
        //屏蔽 Alt+空格
        if ((window.event.altKey) && (window.event.keyCode==32)){
            event.returnValue = false;
        }
        //屏蔽退格删除键  //屏蔽 F5 刷新键  //屏蔽 F1 刷新键  // 屏蔽 F11 全屏键  //  屏蔽 F12 审查元素
       if ((event.keyCode==8) || (event.keyCode==116) || (event.keyCode==112) || (event.keyCode==123)){   
        　  event.returnValue=false; 
        }
        // 屏蔽 F11 全屏键  
        if((event.keyCode==122)){
        // 　  event.returnValue=false;
        }
        //屏蔽 Ctrl + N  //屏蔽 Ctrl + R 
        if ( event.ctrlKey && (event.keyCode==82 || event.keyCode==78)){
      　　event.returnValue=false;   
        }
        //屏蔽 Ctrl + S
        if ((event.ctrlKey)&&(event.keyCode==83)){
      　    event.returnValue=false;
        }
        //屏蔽 shift+F10 
        if ((event.shiftKey)&&(event.keyCode==121)){  
          　event.returnValue=false;   
       　} 
        //屏蔽 shift 加鼠标左键新开一网页
        if (window.event.srcElement.tagName == "A" && window.event.shiftKey) {  
       　　window.event.returnValue = false;
    　　}  
        //屏蔽Alt+F4
        if ((window.event.altKey)&&(window.event.keyCode==115)){
            return false;  
        }   
    }
    document.onkeydown = KeyDown;
})()
