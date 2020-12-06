export async function exchange() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${[process.env.API_KEY]}/latest/USD`);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }
  catch(error) {
    return error;
  }
}
