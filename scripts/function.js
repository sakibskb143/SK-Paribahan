function changeBgColor(targetseat) {
    targetseat.style.backgroundColor = '#1DD100';
    targetseat.style.color = 'white';
}


function setSeatNumber(Id, count) {
    const remainSeats = document.getElementById(Id);
    const remainSeat = parseInt(remainSeats.innerText);
    remainSeats.innerText = remainSeat - count;

}
function getTotalPrice(Id) {
    const totalPrice = document.getElementById(Id);
    const convertTotalprice = parseInt(totalPrice.innerText);
    const ticketPrice = getInnerTextById('ticket-price');
    totalPrice.innerText = convertTotalprice + parseInt(ticketPrice);

}
function setGrandTotalPrice(totalId, grandId) {

    document.getElementById(grandId).innerText = document.getElementById(totalId).innerText;
}

function setInnerTextbyId(Id, c) {
    const elements = document.getElementById(Id);
    elements.innerText = c;
}
function getInnerTextById(Id) {
    const elements = document.getElementById(Id);
    const element = elements.innerText;
    return element;
}



function confirmation(){
    window.location.href = ('next.html');
}
