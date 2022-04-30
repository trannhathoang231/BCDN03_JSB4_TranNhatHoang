/**
 * Khoi 1:
 * Input: d, e, f
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị từ form
 * B2: lập công thức:
 *   Nếu d = e || d=f || e=f thì tam giác cân
 *  
 *   Nếu d=e=f thì tam giác đều
 * 
 *   Nếu d*d = e*e + f*f ||
 *       e*e = d*d + f*f ||
 *       f*f = d*d + e*e 
 *   thì tam giác vuông
 * B3: Gắn hàm vào sự kiện click
 * 
 * Output: duoDoan
 *    
 */

function duDoan(){
    var d = Number(document.getElementById("d").value);
    var e = Number(document.getElementById("e").value);
    var f = Number(document.getElementById("f").value);

    console.log(d,e,f);
    var duDoan = 0;

    if(d==0 || e==0 || f==0){
        duDoan="Không phải là tam giác. Cạnh tam giác phải khác 0.";
    }else if(d+e<=f || d+f<=e || e+f<=d){
        duDoan="Không phải là tam giác. Tổng 2 cạnh tam giác phải lớn hơn cạnh còn lại";
    }else if((d==e && d!=f)|| (d==f &&d!=e)|| (e==f && d!=e)) {
        duDoan="Hình tam giác cân";
    }else if((d==e && d==f)|| (d==f &&d==e)|| (e==f && d==e)){
        duDoan="Hình tam giác đều";
    }else if( d*d == (e*e + f*f) ||  e*e == (d*d + f*f) || f*f == (d*d + e*e) ){
        duDoan="Hình tam giác vuông";
    }else{
        duDoan="Một loại tam giác nào đó";
    }


    document.getElementById("duDoan").innerHTML = duDoan;
}