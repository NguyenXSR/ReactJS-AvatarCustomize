// import React from 'react'
// import PartAvatar  from './PartAvatar'

// const Avatar = ({earrings,glasses,hats,neckwear,body,layer1,layer2,layer3,eyebrows,eyes,facialHair,hair,mouths,nose}) => {

//   return (
//     <div>
        
//         <PartAvatar path={earrings.value} index={earrings.index}/>
//         <PartAvatar path={glasses.value} index={glasses.index}/>
//         <PartAvatar path={hats.value} index={hats.index}/>
//         <PartAvatar path={neckwear.value} index={neckwear.index}/>
//         <PartAvatar path={body.value} index={body.index}/>
//         <PartAvatar path={layer1.value} index={layer1.index}/>
//         <PartAvatar path={layer2.value} index={layer2.index}/>
//         <PartAvatar path={layer3.value} index={layer3.index}/>
//         <PartAvatar path={eyebrows.value} index={eyebrows.index}/>
//         <PartAvatar path={eyes.value} index={eyes.index}/>
//         <PartAvatar path={facialHair.value} index={facialHair.index}/>
//         <PartAvatar path={hair.value} index={hair.index}/>
//         <PartAvatar path={mouths.value} index={mouths.index}/> 
//         <PartAvatar path={nose.value} index={nose.index}/>
//     </div>
//   )
// }

// export default Avatar

import React from 'react';

import PartAvatar from './PartAvatar';

const Avatar = ({earrings,hats,neckwear, body, eyes, hair, clothing1, clothing2, clothing3, mouth, eyebrow, glasses,facialHair }, ref) => {
	return (
		<div className="avatar">
			<PartAvatar path="body" index={body} />
			<PartAvatar path="eyes" index={eyes} />
			<PartAvatar path="hair" index={hair} />
			<PartAvatar path="clothes/layer_1" index={clothing1} />
			<PartAvatar path="clothes/layer_2" index={clothing2} />
			<PartAvatar path="clothes/layer_3" index={clothing3} />
			<PartAvatar path="mouths" index={mouth} />
			<PartAvatar path="noses" index={0} />
			<PartAvatar path="eyebrows" index={eyebrow} />
			<PartAvatar path="accessories/earrings" index={earrings} />
			<PartAvatar path="accessories/glasses" index={glasses} />
			<PartAvatar path="accessories/hats" index={hats} />
			<PartAvatar path="accessories/neckwear" index={neckwear} />
			<PartAvatar path="facial_hair" index={facialHair}/>
		</div>
	);
};


export default Avatar;