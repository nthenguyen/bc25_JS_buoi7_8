function getEle(id) {
  return document.getElementById(id);
}

//thêm số
var numberArray = [];
getEle("btnThem").addEventListener("click", function () {
  var n = getEle("number").value * 1;
  numberArray.push(n);
  getEle("thongbao").innerHTML =
    '<div class="alert alert-info">[' + numberArray.join(", ") + "]</div>";
});

//câu 1
getEle("btnTongSoDuong").addEventListener("click", function () {
  var tong = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      tong += numberArray[i];
    }
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Tổng số dương là: ' + tong + "</div>";
});

//câu 2
getEle("btnDemSoDuong").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) count++;
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Mảng có ' + count + " số dương</div>";
});

//câu 3
getEle("btnSoMin").addEventListener("click", function () {
  var min = numberArray[0];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
      min = numberArray[i];
    }
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Số nhỏ nhất là: ' + min + "</div>";
});

//câu 4
getEle("btnSoDuongMin").addEventListener("click", function () {
  var min = numberArray[0];
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0 && numberArray[i] < min) {
      min = numberArray[i];
    }
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Số dương nhỏ nhất là: ' + min + "</div>";
});

//câu 5
getEle("btnSoChanCuoi").addEventListener("click", function () {
  var content = "";
  for (var i = numberArray.length - 1; i >= 0; i--) {
    if (numberArray[i] % 2 == 0) {
      content =
        '<div class="alert alert-success">Số chẵn cuối cùng là: ' +
        numberArray[i] +
        "</div>";
      break;
    } else {
      content = '<div class="alert alert-success">-1</div>';
    }
  }
  getEle("ketqua").innerHTML = content;
});

//câu 6
getEle("btnDoiViTri").addEventListener("click", function () {
  let arrClone = [...numberArray];
  var index1 = getEle("index1").value * 1;
  var index2 = getEle("index2").value * 1;
  var temp = arrClone[index1];
  arrClone[index1] = arrClone[index2];
  arrClone[index2] = temp;
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Đảo vị trí: [' +
    arrClone.join(", ") +
    "]</div>";
});

//câu 7
getEle("btnSapXepTang").addEventListener("click", function () {
  for (var i = 0; i < numberArray.length; i++) {
    for (var j = i + 1; j < numberArray.length; j++) {
      if (numberArray[i] > numberArray[j]) {
        var temp = numberArray[i];
        numberArray[i] = numberArray[j];
        numberArray[j] = temp;
      }
    }
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Thứ tự tăng dần: ' +
    numberArray.join(", ") +
    "</div>";
});

//câu 8
getEle("btnSntDau").addEventListener("click", function () {
  var content = "";
  for (var i = 0; i < numberArray.length; i++) {
    if (ktra_so_nguyen_to(numberArray[i])) {
      content =
        '<div class="alert alert-success">Số nguyên tố đầu là: ' +
        numberArray[i] +
        "</div>";
      break;
    } else {
      content = '<div class="alert alert-success">-1</div>';
    }
  }
  getEle("ketqua").innerHTML = content;
});
function ktra_so_nguyen_to(n) {
  if (n < 2) return false;
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

//câu 9
getEle("btnDemSoNguyen").addEventListener("click", function () {
  var count = 0;
  for (var i = 0; i < numberArray.length; i++) {
    if (Number.isInteger(numberArray[i])) {
      count++;
    }
  }
  getEle("ketqua").innerHTML =
    '<div class="alert alert-success">Mảng có ' + count + " số nguyên</div>";
});

//câu 10
getEle("btnSoSanh").addEventListener("click", function () {
  var soDuong = 0;
  var soAm = 0;
  var content = "";
  for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > 0) {
      soDuong++;
    } else if (numberArray[i] == 0) {
      continue;
    } else {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    content = '<div class="alert alert-success">Số dương > Số âm</div>';
  } else if (soDuong < soAm) {
    content = '<div class="alert alert-success">Số âm > Số dương</div>';
  } else {
    content = '<div class="alert alert-success">Số dương = Số âm</div>';
  }
  getEle("ketqua").innerHTML = content;
});
