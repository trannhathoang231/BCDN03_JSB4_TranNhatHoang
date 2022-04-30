/**
 * Khoi 1:
 * Input: a, b, c
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức
 *      Xét a>b = true => b>c = true => c<b<a
 *                          b>c = false => a>c = true =>b<c<a
 *                                           a>c = false =>b<a<c
 * 
 *          a>b = false => b>c = true => a>c = true => c<a<b
 *                                       a>c = false => a<c<b
 *                         b>c = false =>a<b<c
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: sapXep   
 */

function sapXepSo(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);


    console.log(a,b,c);
    var sapXep = 0;

    if (a>b) {
        if(b>c){
            console.log(c+"<"+b+"<"+a);
            sapXep = c+"<"+b+"<"+a;
        }else{
            if(a>c){
                console.log(b+"<"+c+"<"+a);
                sapXep = b+"<"+c+"<"+a;
            }else{
                console.log(b+"<"+a+"<"+c);
                sapXep = b+"<"+a+"<"+c;
            }
        }
        
    }else{
        if(b>c){
            if (a>c) {
                console.log(c+"<"+a+"<"+b);
                sapXep = c+"<"+a+"<"+b;
            }else{
                console.log(a+"<"+c+"<"+b);
                sapXep = a+"<"+c+"<"+b;
            }
        }else{
            console.log(a+"<"+b+"<"+c);
            sapXep = a+"<"+b+"<"+c;
        }

    }


    document.getElementById("sapXep").innerHTML = sapXep;
}





