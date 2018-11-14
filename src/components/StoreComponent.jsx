import React from 'react';
import "./styles.css"


export const StoreList = (props) => {
  console.log('STORE COMPONENT PROS: ', props);
  return props.storeProps.map(stores =>
    <div key={stores.id}>
      <div>STORE ID: {stores.id}</div>
      <div>Title: {stores.title}</div>
      <div>Description: {stores.description}</div>
    </div>
  )
}






// export const DreamList = (props) => {
//   // console.log('PROPS: ', props);

//   return props.dreamProps.map(dreams =>

//     <div key={dreams.id} className="d-flex flex-column dream-container" >
//       <div className="p-1">DREAM ID: {dreams.id}</div>
//       <div className="p-1">Title: {dreams.title}</div>
//       <div className="p-1">${dreams.price}</div>
//       <div href="/dreams/:dreams_id" >
//         <img className="dream-images" src={dreams.dream_images} alt="No Images"
//           onClick={() => props.getDream(dreams)} />
//       </div>

//     </div >
//   )
// }

