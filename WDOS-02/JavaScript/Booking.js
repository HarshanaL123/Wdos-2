function calculateBooking() {
  // Get user inputs
  const singleCount = parseInt(document.getElementById('singleCount').value) || 0;
  const doubleCount = parseInt(document.getElementById('doubleCount').value) || 0;
  const tripleCount = parseInt(document.getElementById('tripleCount').value) || 0;
  const adultsCount = parseInt(document.getElementById('adultsCount').value) || 0;
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;
  const promoCode = document.getElementById('promoCode').value;
  const userName = document.getElementById('Name').value;
  const userMobile = document.getElementById('Mobile').value;
  const userEmail = document.getElementById('E-mail').value;

  // Calculate costs
  const singleCost = singleCount * 25000.00;
  const doubleCost = doubleCount * 35000.00;
  const tripleCost = tripleCount * 40000.00;
  const mealCost = childrenCount * 5000.00;

  const numExtraBeds = document.querySelectorAll('input[ name="extra"][value="Extra Bed"]:checked').length;
    const extraBedCost = 8000 * numExtraBeds;
    let totalCost = singleCost + doubleCost + tripleCost + mealCost + extraBedCost;;
  document.getElementById('currentCost').innerText=`${totalCost.toFixed(2)}LKR`;
  

  // Apply promo code discount
  if (promoCode === 'Promo123') {
    totalCost *= 0.95; // 5% discount
  }

  // Display current booking(s) and cost
  const currentBookingInfo = `${singleCount} Single, ${doubleCount} Double, ${tripleCount} Triple,${numExtraBeds} Extra beds\n ${adultsCount} Adults, ${childrenCount} Children\n Check-in: ${checkInDate}, Check-out: ${checkOutDate}`;
  const overallBookingInfo = `${userName}\n${userMobile}\n${userEmail}\n${singleCount} Single, ${doubleCount} Double, ${tripleCount} Triple,${numExtraBeds} Extra beds\n ${adultsCount} Adults, ${childrenCount} Children\n Check-in: ${checkInDate}, Check-out: ${checkOutDate}`;
  const currentBookingCost = ` ${totalCost.toFixed(2)} LKR`;

  document.getElementById('currentBookings').innerText = currentBookingInfo;
  document.getElementById('overallBookings').innerText = overallBookingInfo;
  document.getElementById('overallCost').innerText = currentBookingCost;
}

//Add to favourite- hotel booking*********************************************************************************************************************************************************************************************************************************************************************

function favouritesInBooking(){
  // Get user inputs
  const singleCount = parseInt(document.getElementById('singleCount').value) || 0;
  const doubleCount = parseInt(document.getElementById('doubleCount').value) || 0;
  const tripleCount = parseInt(document.getElementById('tripleCount').value) || 0;
  const adultsCount = parseInt(document.getElementById('adultsCount').value) || 0;
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;
  const promoCode = document.getElementById('promoCode').value;
  const userName = document.getElementById('Name').value;
  const userMobile = document.getElementById('Mobile').value;
  const userEmail = document.getElementById('E-mail').value;

  // Calculate costs
  const singleCost = singleCount * 25000.00;
  const doubleCost = doubleCount * 35000.00;
  const tripleCost = tripleCount * 40000.00;
  const mealCost = childrenCount * 5000.00;

  const numExtraBeds = document.querySelectorAll('input[ name="extra"][value="Extra Bed"]:checked').length;
    const extraBedCost = 8000 * numExtraBeds;
    let totalCost = singleCost + doubleCost + tripleCost + mealCost + extraBedCost;;
  document.getElementById('currentCost').innerText=`${totalCost.toFixed(2)}LKR`;
  

  // Apply promo code discount
  if (promoCode === 'Promo123') {
    totalCost *= 0.95; // 5% discount
  }

  
      
  const hotelMessage = `Thank you ${userName} for choosing us with ${childrenCount} children and ${adultsCount} adults from ${checkInDate} to ${checkOutDate}!`;

  let hotelMessage_serialized = JSON.stringify(hotelMessage);

  localStorage.setItem("hotelMessage",hotelMessage_serialized);
  console.log(hotelMessage_serialized);

}



function checkLoyaltypoints(){
  // Get user inputs
  const singleCount = parseInt(document.getElementById('singleCount').value) || 0;
  const doubleCount = parseInt(document.getElementById('doubleCount').value) || 0;
  const tripleCount = parseInt(document.getElementById('tripleCount').value) || 0;
  const adultsCount = parseInt(document.getElementById('adultsCount').value) || 0;
  const childrenCount = parseInt(document.getElementById('childrenCount').value) || 0;
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;
  const promoCode = document.getElementById('promoCode').value;
  const userName = document.getElementById('Name').value;
  const userMobile = document.getElementById('Mobile').value;
  const userEmail = document.getElementById('E-mail').value;

  // Calculate costs
  const singleCost = singleCount * 25000.00;
  const doubleCost = doubleCount * 35000.00;
  const tripleCost = tripleCount * 40000.00;
  const mealCost = childrenCount * 5000.00;

  const numExtraBeds = document.querySelectorAll('input[ name="extra"][value="Extra Bed"]:checked').length;
    const extraBedCost = 8000 * numExtraBeds;
    let totalCost = singleCost + doubleCost + tripleCost + mealCost + extraBedCost;;
  document.getElementById('currentCost').innerText=`${totalCost.toFixed(2)}LKR`;
  

  // Apply promo code discount
  if (promoCode === 'Promo123') {
    totalCost *= 0.95; // 5% discount
  }
  let loyaltyPoints = 0;
  let numRooms=singleCount+doubleCount+tripleCount;
  if (numRooms > 4) {
      loyaltyPoints =(numRooms-4)* 20;
     
  }

  const loyaltyMessage = `The updated loyalty point balance is ${loyaltyPoints}`;
  alert(loyaltyMessage);

  let loyaltyMessage_serialized = JSON.stringify(loyaltyMessage);

  localStorage.setItem("loyaltyMessage",loyaltyMessage_serialized);
  console.log("the balance of loyalty points is saved");
  

}
















//  Adventure booking area***************************************************************************************************************************************************************************************************************************************************************************************

//Book Now button area

function calculateBookingAD() {
  // Get user inputs
  const localAdultsCount = parseInt(document.getElementById('localAdultsCount').value) || 0;
  const localkidsCount = parseInt(document.getElementById('localkidsCount').value) || 0;
  const foreignadultsCount = parseInt(document.getElementById('foreignadultsCount').value) || 0;
  const foreignkidsCount = parseInt(document.getElementById('foreignkidsCount').value) || 0;
  const userNameAD = document.getElementById('name.AD').value;
  const userMobileAD = document.getElementById('mobile.AD').value;
  const userEmailAD = document.getElementById('e-mail.AD').value;
  const bookingDateAD = document.getElementById('bookingdate.AD').value;
  const GuideAdults = document.querySelectorAll('input[name="guideA"][value="AdultsGuide"]:checked').length;
  const GuideKids = document.querySelectorAll('input[name="guideK"][value="KidsGuide"]:checked').length;
  

  // Calculate costs
  let localAdultsCost = localAdultsCount * 5000.00;
  let localkidsCost = localkidsCount * 2000.00;
  let foreignadultsCost = foreignadultsCount * 10000.00;
  let foreignkidsCost = foreignkidsCount * 5000.00;
  let GuideForAdultsCost = GuideAdults * 1000.00;
  let GuideForKidsCost = GuideKids * 500.00;

  let totalCost = localAdultsCost + localkidsCost + foreignadultsCost + foreignkidsCost+GuideForAdultsCost+GuideForKidsCost;
  document.getElementById('currentCost.AD').innerText=`${totalCost.toFixed(2)}LKR`;
  


  // Display current booking(s) and cost
  const currentBookingInfo = `${localAdultsCount} local Adults, ${localkidsCount} local kids,\n ${foreignadultsCount} foreign adults, ${foreignkidsCount} foreign kids,\n ${bookingDateAD} booking Date`;
  const overallBookingInfo = `${userNameAD}\n${userMobileAD}\n${userEmailAD}\n${localAdultsCount} localAdults, ${localkidsCount} localkids \n${foreignadultsCount} foreignadults,${foreignkidsCount} foreignkids \n ${bookingDateAD} booking Date`;
  const currentBookingCost = ` ${totalCost.toFixed(2)} LKR`;

  document.getElementById('currentBookings.AD').innerText = currentBookingInfo;
  document.getElementById('overallBookings.AD').innerText = overallBookingInfo;
  document.getElementById('overallCost.AD').innerText = currentBookingCost;
}
  
//Book Adventure area

function messageDisplay() {
  // Get user inputs
  const localAdultsCount = parseInt(document.getElementById('localAdultsCount').value) || 0;
  const localkidsCount = parseInt(document.getElementById('localkidsCount').value) || 0;
  const foreignadultsCount = parseInt(document.getElementById('foreignadultsCount').value) || 0;
  const foreignkidsCount = parseInt(document.getElementById('foreignkidsCount').value) || 0;
  const userNameAD = document.getElementById('name.AD').value;
  const userMobileAD = document.getElementById('mobile.AD').value;
  const userEmailAD = document.getElementById('e-mail.AD').value;
  const bookingDateAD = document.getElementById('bookingdate.AD').value;
  const GuideAdults = document.querySelectorAll('input[name="guideA"][value="AdultsGuide"]:checked').length;
  const GuideKids = document.querySelectorAll('input[name="guideK"][value="KidsGuide"]:checked').length;
  

  // Calculate costs
  let localAdultsCost = localAdultsCount * 5000.00;
  let localkidsCost = localkidsCount * 2000.00;
  let foreignadultsCost = foreignadultsCount * 10000.00;
  let foreignkidsCost = foreignkidsCount * 5000.00;
  let GuideForAdultsCost = GuideAdults * 1000.00;
  let GuideForKidsCost = GuideKids * 500.00;

  let totalCost = localAdultsCost + localkidsCost + foreignadultsCost + foreignkidsCost+GuideForAdultsCost+GuideForKidsCost;
  document.getElementById('currentCost.AD').innerText=`${totalCost.toFixed(2)}LKR`;
  
//alert message*************************************************************************
  const message= `Thankyou for reserving and your Scuba Diving session booking is successfuly Complete. Your total is ${totalCost.toFixed(2)} LKR. Have a nice Day!`;
  alert(message);
}


//Add To Favorites button area

function favouritesInAdventure() {
  // Get user inputs
  const localAdultsCount = parseInt(document.getElementById('localAdultsCount').value) || 0;
  const localkidsCount = parseInt(document.getElementById('localkidsCount').value) || 0;
  const foreignadultsCount = parseInt(document.getElementById('foreignadultsCount').value) || 0;
  const foreignkidsCount = parseInt(document.getElementById('foreignkidsCount').value) || 0;
  const userNameAD = document.getElementById('name.AD').value;
  const userMobileAD = document.getElementById('mobile.AD').value;
  const userEmailAD = document.getElementById('e-mail.AD').value;
  const bookingDateAD = document.getElementById('bookingdate.AD').value;
  const GuideAdults = document.querySelectorAll('input[name="guideA"][value="AdultsGuide"]:checked').length;
  const GuideKids = document.querySelectorAll('input[name="guideK"][value="KidsGuide"]:checked').length;
  

  // Calculate costs
  let localAdultsCost = localAdultsCount * 5000.00;
  let localkidsCost = localkidsCount * 2000.00;
  let foreignadultsCost = foreignadultsCount * 10000.00;
  let foreignkidsCost = foreignkidsCount * 5000.00;
  let GuideForAdultsCost = GuideAdults * 1000.00;
  let GuideForKidsCost = GuideKids * 500.00;

  let totalCost = localAdultsCost + localkidsCost + foreignadultsCost + foreignkidsCost+GuideForAdultsCost+GuideForKidsCost;
  document.getElementById('currentCost.AD').innerText=`${totalCost.toFixed(2)}LKR`;
  
//alert message*************************************************************************
  //const adventureMessage=`Thank you, ${userNameAD}, for reserving your booking in diving. Your booking is for ${localAdultsCount} local adults, ${localkidsCount} local kids, ${foreignadultsCount} foreign adults and ${foreignkidsCount} foreign kids.`;
  const message= `Thankyou for reserving, Your total is ${totalCost.toFixed(2)} LKR`;
  
  let adventureMessage_serialised=JSON.stringify(message);

  localStorage.setItem("adventureMessage",adventureMessage_serialised);
  console.log(adventureMessage_serialised);
}