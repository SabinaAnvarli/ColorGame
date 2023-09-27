var success=0
function randomColor(){
    let  red=Math.round( Math.random()*255)
    let  green=Math.round( Math.random()*255)
    let  blue=Math.round( Math.random()*255)
    let color = `rgb(${red},${green},${blue})`
    return color
}
function writeData() {
    
    $(".small-box").html(`
    <div class="color" style="background: ${randomColor()};"></div>
    <div class="color" style="background: ${randomColor()};"></div>
    <div class="color" style="background: ${randomColor()};"></div>
    <div class="color" style="background: ${randomColor()};"></div>
    <div class="color" style="background: ${randomColor()};"></div>
    <div class="color" style="background: ${randomColor()};"></div>
    `)
    $(".trueColor").html(`${$(".color")[Math.round(Math.random()*5)].style.background}`)

    $(".color").click((e)=>{
         if(e.target.style.background===$(".trueColor").html().toLowerCase()){
            console.log("sucess");
            $(".success").css("display","flex")
            success+=1;
            $(".count").text(success)

         setTimeout(() => {
                $(".success").css("display","none")
            }, 500);
        }
        else{
            $(".fail").css("display","flex")

            setTimeout(() => {
                $(".fail").css("display","none")
            }, 500);
            
        }
     writeData()
    })
}
$(".start").click(()=>{
    $(".box").css("display","none")
    $(".container").css("display","flex")
    var seconds = 60* +$("select").val();
    console.log(seconds);
    let interval = setInterval(() => {
        timer()
    },50);
    function timer() {

        if (seconds === 0) {
            $(".container-end").css("display","flex") 
            $(".container").css("display","none")
            $(".result").text(success)
            $(".time").text($("select").val() + " minute(s)")
            clearInterval(interval)
           
        } else {
            seconds--;
        }
        console.log(seconds);
    }
    writeData()
})
$(".again").click(()=>{
    $(".container-end").css("display","none") 
    $(".box").css("display","flex")
    success=0
    $(".count").text(success)

})
