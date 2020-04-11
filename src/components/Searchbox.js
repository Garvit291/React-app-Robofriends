import React from 'react';


const Searchbox =({searchfield,searchChange}) => {

	return (
		<div className='bg-gold dib pa3 ma2 br3 grow'>
           <input type='search' 
           placeholder ='search robots'
           onChange ={searchChange}
           />
         </div> 
		);
}



export default Searchbox;