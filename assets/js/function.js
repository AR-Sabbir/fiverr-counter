/**
 * Alert Fuction
 */



    const setAlert=(msg,type='danger') =>{
    return `<p class="alert alert-${type} d-flex justify-content-between">  ${msg} <button data-bs-dismiss="alert" class= "btn-close "> </button></p>`;

}
/*
 * Email  Check
  
 */

    let emailCheck=(email)=>{
    let emailPattern=/^[a-zA-Z0-9_\.]{1,}@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,5}$/;
    return  emailPattern.test(email);
  }



  /**
   * 
   * Bangladesh Phone Number Check
   * 
   */
    let cellCheck=(cell)=>{
    let cellPattern=/^(\+8801|01|8801)[0-9]{9}$/
    return cellPattern.test(cell);

  }