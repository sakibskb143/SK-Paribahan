function displayBuyticketSection() {
    const ticketSection = document.getElementById('ticket-section');
    ticketSection.scrollIntoView({ behavior: "smooth", block: "start" });
}


const seatPlans = document.getElementsByClassName('ABC');
let selectSeat = 0;
let selectedSeats = [];

for (const targetseat of seatPlans) {
    targetseat.addEventListener('click', function () {
        if (!selectedSeats.includes(targetseat.innerText) && selectSeat < 4) {
            selectSeat++;
            selectedSeats.push(targetseat.innerText);
            changeBgColor(targetseat);
            setSeatNumber('total-seat', selectSeat);
            setInnerTextbyId('selected-seat', selectSeat);


            const numberInput = document.getElementById('number');
            const nextBtn = document.getElementById('nextBtn');

            // Initially, disable the Next button and apply opacity
            nextBtn.disabled = true;
          

            numberInput.addEventListener('input', function () {
                // If the number input has a value, enable the Next button and remove opacity
                if (this.value.trim() !== '') {
                    nextBtn.disabled = false;
                    nextBtn.classList.remove('opacity-50');
                    nextBtn.classList.remove('cursor-not-allowed');
                } else {
                    // Otherwise, disable the Next button and apply opacity
                    nextBtn.disabled = true;
                    nextBtn.classList.add('opacity-50');
                    nextBtn.classList.add('cursor-not-allowed');
                }
            });



            // Create list item for the selected seat
            const totalListed = document.getElementById('createList');
            const div = document.createElement('div');
            const li1 = document.createElement('li');
            li1.innerText = targetseat.innerText;
            const li2 = document.createElement('li');
            li2.innerText = 'Economy';
            const li3 = document.createElement('li');
            li3.innerText = getInnerTextById('ticket-price');

            div.append(li1);
            div.append(li2);
            div.append(li3);
            totalListed.append(div);

            // Update total and grand total prices
            getTotalPrice('total-price');
            setGrandTotalPrice('total-price', 'grand-total');

            // Enable or disable apply button based on selected seats count
            const inputField = document.getElementById('coupon');
            const applyButton = document.getElementById('couponApplybtn');
            const discountDiv = document.getElementById('discount-div');
            const couponDiv = document.getElementById('coupon-div');

            applyButton.disabled = selectSeat !== 4;

            if (selectSeat === 4) {
                applyButton.classList.remove('opacity-50');
            } else {
                applyButton.classList.add('opacity-50');
            }

            applyButton.addEventListener('click', function () {
                const couponText = inputField.value;
                if (couponText === 'new15' || couponText === 'couple 20') {
                    const tprice = document.getElementById('total-price');
                    const tprices = parseInt(tprice.innerText);
                    let calculatedDiscount = couponText === 'new15' ? tprices * 0.15 : tprices * 0.20;
                    const discountPrice = document.getElementById('discount-price');
                    discountPrice.innerText = calculatedDiscount;

                    const grandTotalElement = document.getElementById('grand-total');
                    const grandTotal = tprices - calculatedDiscount;
                    grandTotalElement.innerText = grandTotal;

                    // Show the discount div by removing the 'hidden' class
                    discountDiv.classList.remove('hidden');
                    couponDiv.classList.add('hidden');
                } else {
                    alert("Invalid coupon code. Please enter a valid coupon code.");
                }
            });
        }
    });
}

