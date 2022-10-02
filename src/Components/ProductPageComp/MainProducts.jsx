import React, { useEffect, useState } from 'react'
import { Box , Center, Grid , Button, Text, SimpleGrid, ButtonSpinner, Spinner} from '@chakra-ui/react'
// import productsPageFetch from '../../Redux/ProductsPage/actions'
// import { useSelector, useDispatch} from 'react-redux'
import UnitProduct from './UnitProduct'
// import { pageNo } from '../../Redux/Filter/actions'
import './productPage.css'
import axios from 'axios'

function MainProducts() {
    const[page,setPage]=useState(1)
    const[isLoading,setLoading]=useState(false)
    const[arr,setData]=useState([]);
    const[sort,setSort]=useState("")
    const[order,setOrder]=useState("")
   
  
    // console.log(filterState)
    
  


    useEffect(() => {
            
        axios.get(`http://localhost:3004/products?_page=${page}&_limit=9&_sort=${sort}&_order=${order}`).then(res=>{
                 console.log("res",res.data)
                 setData(res.data)
                // dispatch(productsPageSuccess(res.data))
            })
            .catch(err=>{
                console.log("err",err)
                // dispatch(productsPageFailure())
            })
        
      
    }, [page])


    const arr1 = arr.map(item=>{
        return(
            <UnitProduct key={item.id} object={item}/>
        )
    })


  return (
     <>
    
      <Box  className='lastAir'  minHeight='1299px'>
     { isLoading && <Box>
     <Center>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
/>
<Text ml={'30px'}>Product is Loading</Text>
        </Center>
     </Box>}
      <SimpleGrid  width='100%'  minChildWidth='250px' gap={6} p='1.25rem 1rem'  >
          {arr1}
      </SimpleGrid>
      { !isLoading && <Center>
      <Button
          size='md'
          minH='48px'
          maxW='120px'
          border='2px'
          borderColor='green.500'
          disabled={page===1}
          onClick={()=>{
              if(page>1){
                   setPage(page-1)
                //   dispatch(pageNo(-1))
              }
          }}
          >
                   Prev
      </Button>
  
      <Center
          size='md'
          h='48px'
          w='80px'
          fontSize='1.5rem'
          >
             {page}
                   
      </Center>
  
  
      <Button
          size='md'
          minH='48px'
          maxW='120px'
          border='2px'
          disabled={page===3}
          borderColor='green.500'
          onClick={()=>{
              
              if(page<3){
                   setPage(page+1)
                //   dispatch(pageNo(+1))
              }
          }}
          >
                   Next
      </Button>
      </Center>}
           </Box>

   
  </>
  )
}

export default MainProducts

