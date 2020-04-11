import React from 'react';

const Card = (props) =>
{    const {name, email, id } =props; //destructor it can be added directly in the parametrers //
	return  (
		<div className='bg-gold dib pa3 ma2 br3 grow'>
		<img  alt ='symbol'src={`https://robohash.org/${id}?`} />
		<div>
		<h2>{name}</h2>
		<p> {email}</p>
		</div>				

		 </div>
		);
}
 

export default Card;