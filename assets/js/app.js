// Get Element
const fiverr_form=document.getElementById('fiverr')
const counter =document.querySelector('.counter')




// submitt fiberr form
fiverr_form.onsubmit = (e) => {
    e.preventDefault();
    // get form value

    const form_data =new FormData(e.target)
    const{date,time}=Object.fromEntries(form_data.entries())
   


   const count=setInterval(()=>{
     //get timestamps
     const start_time= Date.now(); 
    

     const end_time= new Date(date +' '+ time);
 
     
     const order_time= Math.floor(Math.abs( end_time.getTime()-  start_time));
 
     // get val form time
 
 
     let total_sec=Math.floor(order_time/1000);
     let total_min=Math.floor(total_sec/60);
     let total_hour=Math.floor(total_min/60);
     let total_day=Math.floor(total_hour/24);
 
 
     const hours=total_hour-(total_day*24);
     const min=(total_min-(total_day*24*60)-(hours*60));
     const sec=(total_sec-(total_day*24*60*60)-(hours*60*60)-(min*60));
 
     if (total_sec <= 0){
        clearInterval(count)
     }
 
     counter.innerHTML=` <h2>${total_day} Days : ${hours} Hours: ${min} minute: ${sec} Second </h2>`
   },1000)
    

}