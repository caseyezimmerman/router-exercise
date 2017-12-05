import React from 'react'

function Images(props){
	// Map through images
	var atlImages= props.images.map((image, index)=>{
		return(
		<div>
			<img src={image} alt="atl-image" width='100%' key={index} />
		</div>
		)
	})
	return(
		<div>
			{atlImages}
		</div>
	)
}

export default Images;