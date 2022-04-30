/**
 * Khoi 1:
 * Input: B, M, A ,E
 * 
 * Khoi 2:
 * Các bước xử lý:
 * B1: tạo biến và lấy giá trị tự form
 * B2: lập công thức
 *  
 *      Nếu value = "B" => Xin chào Bố!
 *      Nếu value = "M" => Xin chào Mẹ!
 *      Nếu value = "A" => Xin chào Anh trai!
 *      Nếu value = "E" => Xin chào Em gái!
 * B3: gắn hàm vào sự kiện click
 * 
 * Output: chonThanhVien
 * 
 */

function chonMot() {
    var tv = document.getElementById("thanhVienValue").value;


    var xinChao = "";
    switch (tv) {
        case "B":
            xinChao = "Xin chào Bố!";
            break;
        case "M":
            xinChao = "Xin chào Mẹ!";
            break;
        case "A":
            xinChao = "Xin chào Anh trai!";
            break;   
        case "E":
            xinChao = "Xin chào Em gái!";
            break;             
        default:
            xinChao = "Xin chào Người lạ ơi!";
            break;
    }
    console.log(xinChao);
    document.getElementById("chonThanhVien").innerHTML = xinChao;

}