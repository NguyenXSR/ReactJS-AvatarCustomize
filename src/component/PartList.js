// import React from 'react'

// const PartList = ({path, index, handleClickSetAvt}) => {

//     let arrayOfPart = [];

//     for(let i = 0; i <= index; i++){
//         arrayOfPart.push(
//             <img src={`character/${path}/${i}.png`}
//             alt=''
//             key={i}
//             onClick={()=>handleClickSetAvt(i,path)}>
                
//             </img>
//         )
//     }
//   return (
//     <div>{arrayOfPart}</div>
//   )
// }

// export default PartList

import React from 'react';
const PartList = ({ total, path, set, selected  }) => {
	let parts = [];
	for (let i = 0; i < total; i++) {
		parts.push(
			<div key={path + i} className={selected === i ? 'selected clickable square' : 'clickable square'} onClick={() => set(i)}>
				<img src={`character/${path}/${i + 1}.png`} alt="" className="img-center"  />
			</div>
		);
	}
	return <div className="list">{parts}</div>;
};
export default PartList