function setNavBtnAction() {
  setCartBtnAction();
}

function setCartBtnAction() {
  $('#cartBtn').click(function() {
    window.location.href = '../html/cart.html';
  });
}

function setLogoBtnAction() {
  $('#logoBtn').click(function() {
    window.location.href = '../index.html';
  });
}

function setBtnAction() {
  $('#receiptBtn').click(function() {
    window.location.href = '../html/receipt-list.html';
  });
}
