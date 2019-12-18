function random_range(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
	
}	
var list=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var imagess=['A.png','B.png','C.png','D.png','E.png','F.png','G.png','H.png','I.png','J.png','K.png','L.png',
            'M.png','N.png','O.png','P.png','Q.png','R.png','S.png','T.png','U.png','V.png','W.png','X.png',
			'Y.png','Z.png'];
var Generate=document.getElementById('generate');
var Div_buttons=document.getElementById('buttons');
    function Event(type,time,target)       //function template
	{
		this.type=type;
        this.time=time;
		this.target=target;
	}
	//localStorage.clear();
	var arr=[];
    setInterval(function()
    {
    	var $arrobjects=[]; 
		$arrobjects.push(JSON.parse(localStorage.getItem("load")));
		$arrobjects.push(JSON.parse(localStorage.getItem("unload")));
		$arrobjects.push(JSON.parse(localStorage.getItem("click")));
		$arrobjects.push(JSON.parse(localStorage.getItem("letter")));
		 $.ajax(
	    {
       	 	"type": "POST",
       		"url": "project.php",
        	"data": {"interaction":JSON.stringify($arrobjects)},
      	    "success": function(response)
          	{
    		  //console.log(response);
    		  //console.log($arrobjects) ;  
    		  //console.log(arrobjects[0]);
    		  localStorage.clear();
         	}
	    });},5000);
//________________________________________________________________________________________-
    function displaydata()
    {
    	$.ajax(
	    {
       	 	"type": "GET",
       		"url": "project.php",
        	"data": {"interaction":" "},
      	    "success": function(response)
          	{
          		if(response)
          		{
          			var $interaction=JSON.parse(response);
          		}
    		  console.log($interaction);
    		  //console.log($arrobjects) ;  
    		  //console.log(arrobjects[0]);
    		  //localStorage.clear
	       }
    });
 }
	window.addEventListener("load", function(e)
	 {
		var date=new Date();
	    var time=date.getTime();
		var window_load=new Event(e.type,time,e.target.nodeName);
		if (localStorage.getItem('load')!=null) 
		{
			arr=JSON.parse(localStorage.getItem('load'));	
		}
	    arr.push(window_load);
	    localStorage.setItem("load",JSON.stringify(arr));
	     alert("window load has been stored");
	     	    //sendata(arrobjects);

	 });
	window.addEventListener("unload", function(e)
	 {
		var date=new Date();
	    var time=date.getTime();
		var window_unload=new Event(e.type,time,e.target.nodeName);
		if (localStorage.getItem('unload')!=null) {
			arr=JSON.parse(localStorage.getItem('unload'));	
		}
	    arr.push(window_unload);
	    localStorage.setItem("unload",JSON.stringify(arr));
	      alert("window unload has been stored");
	      //arrobjects[1]=localStorage.getItem('unload');
            //sendata(arrobjects);
	  });
	 Generate.addEventListener("click",function(e)
	{   
		$arr="";
		Div_buttons.innerHTML=" ";
		var inputt=document.getElementById('input');
		var number=inputt.value; 
			for(var i=0;i < number;i++)
		  {
			var num=random_range(0,list.length-1);
			var alpha1=list[num];
			var create_button=document.createElement('button');
			var button_text=document.createTextNode(alpha1);
			create_button.appendChild(button_text);
			Div_buttons.appendChild(create_button);
	      }
	    var date=new Date();
	    var time=date.getTime();
		var generate_click=new Event(e.type,time,e.target.nodeName);
		if (localStorage.getItem('click')!=null)
		{
			arr=JSON.parse(localStorage.getItem('click'));	
		}
	    arr.push(generate_click);
	    localStorage.setItem("click",JSON.stringify(arr));
	    alert("generate clicked has been stored");
	    //sendata(arrobjects);
   });
   
     Div_buttons.addEventListener("click",function(e)
	{   
		var alpha = e.target.textContent;
		var div_img=document.getElementById("img");
		div_img.innerHTML=" ";
			for(var i=0;i<imagess.length;i++)                                                
		  {   
			  if(alpha==imagess[i][0])
			{
				var create_image=document.createElement("img");
				create_image.src=imagess[i];
				create_image.setAttribute("style","width:600px;");
			    create_image.setAttribute("style","height:600px;");
				div_img.appendChild(create_image);
						
			}
		  }
					
		var date=new Date();
	    var time=date.getTime();
		var button_click=new Event(e.type,time,e.target.nodeName);
		if (localStorage.getItem('letter')!=null) 
		{
			arr=JSON.parse(localStorage.getItem('letter'));	
		}
	    arr.push(button_click);
	    localStorage.setItem("letter",JSON.stringify(arr));
	    alert("letter clicked has been stored");
          //arrobjects[3]=localStorage.getItem('letter');
          //sendata(arrobjects);

	});
    
	 
	
	
//________________________________________________________________________________________________________

		 
		 
		
 