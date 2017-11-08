(function (g){
    // //保存domReady的事件队列
    // var eventQueue = [];
     
    // //判断DOM是否加载完毕
    // var isReady = false;
     
    // //判断DOMReady是否绑定
    // var isBind = false;
     
    // /*执行domReady()
    //  *
    //  *@param    {function}
    //  *@execute  将事件处理程序压入事件队列,并绑定DOMContentLoaded
    //  *          如果DOM加载已经完成，则立即执行
    //  *@caller
    //  */
    // function domReady(fn){
    //     if (isReady) {
    //         fn.call(g);
    //     }
    //     // else{
    //     //     eventQueue.push(fn);
    //     // };
    //     bindReady();
    // };
     
    // /*domReady事件绑定
    //  *
    //  *@param    null
    //  *@execute  现代浏览器通过addEvListener绑定DOMContentLoaded,包括ie9+
    //             ie6-8通过判断doScroll判断DOM是否加载完毕
    //  *@caller   domReady()
    //  */
    // function bindReady(){
    //     if (typeof window.addEventListener != "undefined") { 
    //         window.addEventListener("DOMContentLoaded", execFn, false); 
    //     }else{ 
    //         doScroll();
    //     }
    // };
     
    // /*doScroll判断ie6-8的DOM是否加载完成
    //  *
    //  *@param    null
    //  *@execute  doScroll判断DOM是否加载完成
    //  *@caller   bindReady()
    //  */
    // function doScroll(){
    //     try{
    //         document.documentElement.doScroll('left');
    //     }
    //     catch(error){
    //         return setTimeout(doScroll,20);
    //     };
    //     execFn();
    // };
     
    // /*执行事件队列
    //  *
    //  *@param    null
    //  *@execute  循环执行队列中的事件处理程序
    //  *@caller   bindReady()
    //  */
    // function execFn(){
    //     if (!isReady) {
    //         isReady = true;
    //         for (var i = 0; i < eventQueue.length; i++) {
    //             eventQueue[i].call(window);
    //         };
    //         eventQueue = [];
    //     };
    // };
     
     
    // //加载方法
    // domReady(add());

    // function add(){ 
    //     var head = document.getElementsByTagName('head');
    //     var body = document.getElementsByTagName('body');
    //     var jqu = document.createElement("script");

    //     jqu.setAttribute("src","https://credit.szfw.org/public/js/jquery.js"); //-------------路径改为服务器路径

    //     if (typeof g.addEventListener != "undefined") { 
    //         document.head.appendChild(jqu); 
    //     }else{ 
    //         // IE下没jquery文件的无法加载（待优化）
    //     }
    // }

    g.onload = function load(){addHtml();}

    function addHtml(){
        //$('body').append("<div id='_pop_'></div>");
        $("<div id='_pop_'></div>").prependTo("body");
        $("div#_pop_").load("https://credit.cecdc.com/query/banner"); 
    }
}(window));













