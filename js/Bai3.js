/**
 * Khoi 1:
 * Input: num1, num2, num3
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 *     Nếu num1 % 2 ==0 là true thì số chẵn + 1;
 *                      là false thì số lẻ + 1;
 *      
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: demSo   
 */


function demSo(){
    var num1 =document.getElementById("inputNumb1");
    var num2 =document.getElementById("inputNumb2");
    var num3 =document.getElementById("inputNumb3");

    var soChan = 0;
    var soLe = 0;

    var so1 = num1.value;
    var so2 = num2.value;
    var so3 = num3.value;

    if(so1%2 ==0){
        soChan = ++soChan;
    }else{
        soLe = ++soLe;
    }
    if(so2%2==0){
        soChan = ++soChan;
    }else{
        soLe = ++soLe;
    }
    if(so3%2==0){
        soChan = ++soChan;
    }else{
        soLe = ++soLe;
    }

    console.log(soChan, soLe);

    document.getElementById('demSo').innerHTML = "Tổng số chắn : " + soChan + '<br>' + "Tổng số lẻ : " + soLe;
}
