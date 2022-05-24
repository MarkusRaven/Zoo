import React from 'react'
import { Box } from '@adminjs/design-system'

const Edit = ({ record }) => {
	const srcImg = 'http://localhost:5000/' + record.params['photo']
	return <Box>{srcImg ? <img src={srcImg} width='100px' /> : 'no image'}</Box>
}

export default Edit
