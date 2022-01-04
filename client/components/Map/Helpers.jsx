// const getShops = async (currentView) => {
//   try {
//     const KEY = GOOGLE_MAPS_API_KEY_IOS;
//     const res = await fetch(
//       `https://maps.googleapis.com/maps/api/js?key=${KEY}&libraries=places&callback=initMap`,
//     );
//     const resJson = await res.json();
//     console.log(resJson);
//     return resJson;
//   } catch (error) {
//     return error;
//   }
// };