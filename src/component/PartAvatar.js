import React from 'react';
const PartAvatar = ({path, index,}) =>{
    return (
        <img src={`character/${path}/${index+1}.png`}
        alt=''
        className='image-default'
       >
        </img>
    )
}
export default PartAvatar

// import React from 'react';
// const PartAvatar = ({ path, index }) => {
// 	return <img src={`character/${path}/${index}.png`} alt="" width={260} style={{  position: 'absolute', left: 0, top: 0 }} />;
// };
// export default PartAvatar