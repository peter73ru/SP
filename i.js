// screen size                                                                              
var sW;
var sH;
// browser window size                                                                      
var bW;
var bH;
// web page size                                                                            
var pW;
var pH;

// debug svg code                                                                           
var SVGCode = '<rect x="250" y="250" width="500" height="500" fill=orange stroke=none />';

$("document").ready(function() {
    drawGame();
    window.onresize = drawGame;
});

function size() {
    // screen size                                                                          
    sW = screen.width;
    sH = screen.height;

    // browser window size                                                                  
    bW = window.innerWidth;
    bH = window.innerHeight;

    // web page size                                                                        
    pW = document.documentElement.scrollWidth;
    pH = document.documentElement.scrollHeight;
}

// Draw Background!!!                                                                       
function dB() {
    $('#background').css({ 'width' : bW, 'height' : bH });
}

function drawGame() {
    size();
    dB();

    var SVGWindow;

    if(bW < bH) {
        SVGWindow = bW;
    } else {
        SVGWindow = bH;
    }

    var SVGWindowOpenTag = '<svg id="Front" width="' + SVGWindow + '" heigh="' + SVGWindow + '" viewBox="0 0 1000 1000" >';
    var SVGWindowCloseTag = '</svg>';

    var SVGPaddingTop = (bH - SVGWindow) / 2;
    // Reuse                                                                                
    SVGWindow = SVGWindowOpenTag + SVGCode + SVGWindowCloseTag;

    $("body").css({ "height" : bH, "width" : bW });
    $("#SVGContainer").css({ "height" : bH, "width" : bW });
    $("#SVGContainer").html(SVGWindow);
    $("svg#Front").css({ "padding-top" : SVGPaddingTop });
}
