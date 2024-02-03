function Help(){
  let name='Buy Mik';
  let date='4/2/2024';
 return   <div class="container text-center">
 <br/>
 <div class="row">
   <div class="col-6">
     {name}
   </div>
   <div class="col-4">
     {date}
   </div>
   <div class="col-2">
     <button type="button" class="btn btn-danger">
       Remove
     </button>
   </div>
 </div>
 </div>
}
export default Help;