// import React,{useState,useEffect} from 'react'
// import Avatar from './component/Avatar'
// import PartList from './component/PartList'


// const total={
//   earrings: 32,
//   bodys: 17,
//   eyes: 17,
//   hairs: 73,
//   mouths: 24,
//   facialHairs: 17,
//   eyebrows: 15,
//   hats: 28,
//   glasses: 17,
//   layer1: 5,
//   layer2: 5,
//   layer3: 9,
//   noses: 1,
//   neckwear: 18,
// }

// function App() {
// 	const [bodys, setBodys] = useState(0);
//   const [earrings, setEarrings] = useState(0);
//   const [eyesbrows, setEyesbrows] = useState(0);
//   const [eyes, setEyes] = useState(0);
//   const [facialHairs, setFacialHairs] = useState(0);
//   const [glasses, setGlasses] = useState(0);
//   const [hairs, setHairs] = useState(0);
//   const [hats, setHats] = useState(0);
//   const [layer1, setLayer1] = useState(0);
//   const [layer2, setLayer2] = useState(0);
//   const [layer3, setLayer3] = useState(0);
//   const [mouths, setMouths] = useState(0);
//   const [noses, setNoses] = useState(0);
//   const [neckwears, setNeckwears] = useState(0);
// 	const randomize = () => {
// 		setBodys(Math.floor(Math.random() * total.bodys));
// 		setEyes(Math.floor(Math.random() * total.eyes));
// 		setEyesbrows(Math.floor(Math.random() * total.eyebrows));
// 		setHairs(Math.floor(Math.random() * total.hair));
// 		setMouths(Math.floor(Math.random() * total.mouths));
// 		setGlasses(Math.floor(Math.random() * total.glasses));
// 		setLayer1(Math.floor(Math.random() * total.layer1));
// 		setLayer2(Math.floor(Math.random() * total.layer2));
// 		setLayer3(Math.floor(Math.random() * total.layer3));
//     setHats(Math.floor(Math.random()*total.hats))
//     setNoses(Math.floor(Math.random()*total.noses))
//     setNeckwears(Math.floor(Math.random()*total.neckwears))
//     setEarrings(Math.floor(Math.random()*total.earrings))
//     setFacialHairs(Math.floor(Math.random()*total.facialHairs))
// 	};
// 	useEffect(() => {
// 		randomize();
// 	}, []);


//   const handleClickSetAvatar = (i, value) => {
//     if (value === "facialHairs") setFacialHairs(i);
//     if (value === "earrings") setEarrings(i);
//     if (value === "eyebrows") setEyesbrows(i);
//     if (value === "glasses") setGlasses(i);
//     if (value === "hairs") setHairs(i);
//     if (value === "hats") setHats(i);
//     if (value === "layer_3") setLayer3(i);
//     if (value === "layer_2") setLayer2(i);
//     if (value === "layer_1") setLayer1(i);
//     if (value === "neckwear") setNeckwears(i);
//     if (value === "eyes") setEyes(i);
//     if (value === "noses") setNoses(i);
//     if (value === "body") setBodys(i);
//     if (value === "mouths") setMouths(i); 
//   };
// 	return (
// 		<div className="App">
// 			<div className="title">CHARACTER</div>
// 			<div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
// 			<div className="divider"></div>
// 			<div className="avatar-group gap-30">
// 				<div>
// 					<div className="avatar-wrapper">
// 						<Avatar bodys={bodys}
//           earrings={earrings}
//           eyebrows={eyesbrows}
//           eyes={eyes}
//           hats={hats}
//           hairs={hairs}
//           layer1={layer1}
//           layer2={layer2}
//           layer3={layer3}
//           noses={noses}
//           mouths={mouths}
//           facialHairs={facialHairs}
//           neckwears={neckwears} 
//           glasses={glasses} />
// 						<div className="text-center">
// 							<button className="button" onClick={() => randomize()}>
// 								Randomize!
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				<div>
// 					<div className="list-section">
//           <PartList handleClickSetAvatar={handleClickSetAvatar} />
// 			</div>
//       </div>
//       </div>
// 		</div>
// 	);
// }


// export default App

import { useState, useEffect } from 'react';
import './App.css';
import Avatar from './component/Avatar';
import  PartList  from './component/PartList';


const total = {
	body: 17,
	eyes: 17,
	hair: 73,
	mouth: 24,
	eyebrows: 15,
	glasses: 17,
	clothing1: 5,
	clothing2: 5,
	clothing3: 9,
	beard:17,
	earrings:32,
	hats: 28,
	neckwear:18
};

function App() {
	const [body, setBody] = useState(1);
	const [eyes, setEyes] = useState(1);
	const [eyebrows, setEyebrow] = useState(2);
	const [hair, setHair] = useState(0);
	const [clothing1, setClothing1] = useState(0);
	const [clothing2, setClothing2] = useState(0);
	const [clothing3, setClothing3] = useState(0);
	const [mouth, setMouth] = useState(2);
	const [glasses, setGlasses] = useState(2);
	const [beard,setBeard] = useState(0);
	const [earrings, setEarrings] = useState(0);
	const [hats, setHats] = useState(0);
	const [neckwear, setNeckwear] = useState(0);
	const [showMessage, setShowMessage] = useState(false)
	const [message, setMessage ] = useState("")

	const randomize = () => {
		setBody(Math.floor(Math.random() * total.body));
		setEyes(Math.floor(Math.random() * total.eyes));
		setEyebrow(Math.floor(Math.random() * total.eyebrows));
		setHair(Math.floor(Math.random() * total.hair));
		setMouth(Math.floor(Math.random() * total.mouth));
		setGlasses(Math.floor(Math.random() * total.glasses));
		setClothing1(Math.floor(Math.random() * total.clothing1));
		setClothing2(Math.floor(Math.random() * total.clothing2));
		setClothing3(Math.floor(Math.random() * total.clothing3));
		setEarrings(Math.floor(Math.random()*total.earrings));
		setHats(Math.floor(Math.random()*total.hats));
		setNeckwear(Math.floor(Math.random()*total.neckwear));
		setBeard(Math.floor(Math.random()*total.beard));
	};

	const restartAvatar = () =>{
		setBody(0);
		setBeard(-1);
		setClothing1(-1);
		setClothing2(-1);
		setClothing3(-1);
		setEarrings(-1);
		setEyebrow(-1);
		setEyes(-1);
		setGlasses(-1);
		setHair(-1);
		setHats(-1);
		setMouth(-1);
		setNeckwear(-1);
		setMessage('Dress Me!!!')
		setShowMessage(true)
		setTimeout(()=>{
			setShowMessage(false)
			setMessage('')
		},7000)
	}
	useEffect(() => {
		randomize();
	}, []);

	

	

	return (
		<div className="App">
<div className="title-container">
  <div className="title">CHARACTER CUSTOMIZATION <br/><span className='sub-title'>Powered By ReactJS</span></div>
</div>
			
			<div className="divider">Create Your Own Avatar</div>
			<div className="avatar-group gap-30">
				<div>
					<div className="avatar-wrapper">
						{showMessage && <span className='message'>{message}</span>}
						<Avatar earrings={earrings} hats={hats} neckwear={neckwear} facialHair={beard} body={body} eyes={eyes} hair={hair} clothing1={clothing1} clothing2={clothing2} clothing3={clothing3} mouth={mouth} eyebrow={eyebrows} glasses={glasses} />
						<div className="text-center">
							<button className="button" onClick={() => randomize()}>
								Randomize
							</button>
							<button className='button' onClick={()=> restartAvatar()}>
								Restart 
							</button>
						</div>
					</div>
				</div>
				<div>
					<div className="list-section">
						<h2>Body</h2>
						<PartList total={total.body} path="body" set={setBody} selected={body} />
					</div>
					<div className="list-section">
						<h2>Eyes</h2>
						<PartList total={total.eyes} path="eyes" set={setEyes} selected={eyes} /> 
					</div>
					<div className="list-section">
						<h2>Hair</h2>
						<PartList total={total.hair} path="hair" set={setHair} selected={hair} />
					</div>
					<div className="list-section">
						<h2>Beard</h2>
						<PartList total={total.beard} path="facial_hair" set={setBeard} selected={beard} />
					</div>
					<div className="list-section">
						<h2>Mouth</h2>
						<PartList total={total.mouth} path="mouths" set={setMouth} selected={mouth}  />
					</div>
					<div className="list-section">
						<h2>Eyebrows</h2>
						<PartList total={total.eyebrows} path="eyebrows" set={setEyebrow} selected={eyebrows} />
					</div>
					<div className="list-section">
						<h2>Glasses</h2>
						<PartList total={total.glasses} path="accessories/glasses" set={setGlasses} selected={glasses} />
					</div>
					<div className="list-section">
						<h2>Clothing 1</h2>
						<PartList total={total.clothing1} path="clothes/layer_1" set={setClothing1} selected={clothing1} />
					</div>
					<div className="list-section">
						<h2>Clothing 2</h2>
						<PartList total={total.clothing2} path="clothes/layer_2" set={setClothing2} selected={clothing2} />
					</div>
					<div className="list-section">
						<h2>Clothing 3</h2>
						<PartList total={total.clothing3} path="clothes/layer_3" set={setClothing3} selected={clothing3}   />
					</div>
					<div className="list-section">
						<h2>Earrings</h2>
						<PartList total={total.earrings} path="accessories/earrings" set={setEarrings} selected={earrings}   />
					</div>
					<div className="list-section">
						<h2>Hats</h2>
						<PartList total={total.hats} path="accessories/hats" set={setHats} selected={hats}/>
					</div>
					<div className="list-section">
						<h2>NeckWear</h2>
						<div className='test'>
						<PartList total={total.neckwear} path="accessories/neckwear" set={setNeckwear} selected={neckwear}   />
						</div>
					</div>
					
				</div>
			</div>
		</div>
	);
}

export default App;