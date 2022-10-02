import React from 'react'

import { Box} from '@chakra-ui/react'
import Main from '../Components/Cart/Main'
import GoToTop from '../Components/GoToTop'

function CartPage() {
  return (
    <Box mt='40px'>
        <Main/>
        <GoToTop/>
    </Box>
  )
}

export default CartPage