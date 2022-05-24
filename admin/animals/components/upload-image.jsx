import React from 'react'
import { Box, Label, DropZone, DropZoneItem } from '@adminjs/design-system'

const Edit = ({ property, onChange, record }) => {
	const handledDropZoneChange = (files) => {
		onChange(property.name, files)
	}

	const uploadedPhoto = 'http://localhost:5000/' + record.params.photo
	const photoToUpload = record.params[property.name]

	return (
		<Box>
			<Label>{property.label}</Label>
			<DropZone multiple onChange={handledDropZoneChange} />
			{uploadedPhoto && !photoToUpload && (
				<DropZoneItem src={uploadedPhoto} />
			)}
		</Box>
	)
}

export default Edit
