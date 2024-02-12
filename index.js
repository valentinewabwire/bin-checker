async function getCardDetails(cardPan) {
  const bin = cardPan.slice(0, 6);
  let response = await fetch(`https://lookup.binlist.net/${bin}`);

  let data = await response.json();
  console.log(data);
  return data;
}

async function validateCardPan() {
  let cardPan = document.getElementById("exampleInputtext").value;
  let cardDetails = await getCardDetails(cardPan);
  let resultDiv = document.getElementById("result");
  if (cardDetails.number && cardDetails.number.length) {
    resultDiv.innerHTML = `
        
        <p>Card Brand: ${cardDetails.scheme}</p>
        <p>Card Type: ${cardDetails.type}</p>
        <p>Card Level: ${cardDetails.brand}</p>
        <p>Currency code: ${cardDetails.country.numeric}</p>
        <p>ISO Country Name: ${cardDetails.country.name}</p>
        <p>ISO Country Code: ${cardDetails.country.alpha2}</p>
        <p>Country Flag: ${cardDetails.country.emoji}</p>
        <p>currency alpha: ${cardDetails.country.currency}</p>
        <p>currency alpha: ${cardDetails.bank.name}</p>
        <p>currency alpha: ${cardDetails.bank.url}</p>
        <p>currency alpha: ${cardDetails.bank.phone}</p>
      `;
  } else {
    resultDiv.innerHTML = "<p>Invalid PAN/BIN</p>";
  }
}

//validateCardPan("4762850");
