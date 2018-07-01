  //Selects pixel Canvas
  const pixelCanvas = $('#pixelCanvas');
  //This selects the preferred color
  const colorPicker = $('#colorPicker'); 
   //This selects the preferred size
  const sizePicker = $('#sizePicker');
  // This selects the desired height for the grid
  const inputHeight = $('#inputHeight');
   // This selects the desired width for the grid
  const inputWidth = $('#inputWidth');
  
  
  // Calling makegrid function
  sizePicker.submit(function(event) {
  	console.log(inputWidth.val(), inputHeight.val());
     event.preventDefault(); // prevent page refresh on submit
    makeGrid(inputWidth.val(), inputHeight.val());
  });
  
  //makegrid function
  function makeGrid(w,h) {
    pixelCanvas.children().remove();
    const tr_html = '<tr></tr>';
    const td_html = '<td style="background-color:#FFFFFF;"><span style="width:10px;height:10px;"></span></td>';
    let tr = $(tr_html);
    let td = $(td_html);
    for (let rows = 0; rows < w; rows++){
      tr.remove();
      for (let cols = 0; cols < h; cols++) {
        tr.append(td_html);
      }
      pixelCanvas.append(tr);
      tr = $(tr_html);
    }
    console.log(w, h);
  }


  // When a canvas cell is left-clicked fill the corresponding colorPicker color in it, if right clicked then unfill the color

  pixelCanvas.on('mousedown','td',function (e){
     if (e.which == 1) {
      // this is left click event.
       $(this).css('background-color',colorPicker.val());
      }
      if (e.which == 2) {
      // this is middle click event.
      }
      if (e.which == 3) {
      // this is right click event.
       $(this).css('background-color',"#FFFFFF");   
      }
  });

  pixelCanvas.on("contextmenu","td",function(){
             // alert('right click disabled');
           return false;
        }); 

  