export async function exchange() {
  try {
    let respone = await fetch(`https://v6.exchangerate-api.com/v6/${[process.env.API_KEY]}/latest/USD`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await respone.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}