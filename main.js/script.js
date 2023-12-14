var productName=document.getElementById('productName');
var productPrice=document.getElementById('productPrice');
var productModel=document.getElementById('productModel');
var productDescription=document.getElementById('productDescription');

var productList=[];

function addProduct(){
    var product={
        name:productName.value,
        price:productPrice.value,
        model:productModel.value,
        description:productDescription.value,
    }
    productList.push(product);
    displayProduct(productList);
    clearForm();

}

function clearForm(){
    productName.value="";
    productPrice.value="";
    productModel.value="";
    productDescription.value="";

}

function displayProduct(list){
   var cartona=``;
 for(var i=0;i<list.length;i++){
  cartona +=`<tr>
  <td>${i+1}</td>
  <td>${list[i].name}</td>
  <td>${list[i].price}</td>
  <td>${list[i].model}</td>
  <td>${list[i].description}</td>
  <td><button class="btn btn-sm btn-warning">Update</button></td>
  <td><button onclick="deleteProduct(${i})" class="btn btn-sm btn-danger">Delete</button></td>
</tr>`
    }
document.getElementById('tBody').innerHTML=cartona;
}


function deleteProduct(index){
    productList.splice(index,1);
    displayProduct(productList);
}