export async function exchange() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${[process.env.API_KEY]}/latest/USD`);
    if (response.ok && response.status == 200) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  } catch(error) {
    return error.message;
  }
} 