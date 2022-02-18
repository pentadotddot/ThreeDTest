import CustomContainer from "./CustomContainer";
import {Text, Image, Box, GridItem,Link, Grid, SimpleGrid, StylesProvider, AspectRatio } from "@chakra-ui/react"
import { useNFTBalances } from "react-moralis";
import { useEffect } from "react";
import styles from "../styles/Dashboard.module.css";


export default function NFT({user}){

    const {getNFTBalances, data, isLoading, isFetching} = useNFTBalances()

    useEffect( () => {
      
            getNFTBalances({
                params:{
                    chain:"mainnet",
                    address: user.get("ethAddress")
                }   
        
            })
    
        
    }, [])

    


    return(
        
        <Box className={styles.dashboard} boxSize='l'>

            <Text fontSize="xl" fontWeight="bold">
                My NFTs:    

            </Text>
            <SimpleGrid columns={3} gap = "0" spacing={1}  >
            {data && data.result.map(nft=>(
                
                <GridItem key={nft.token_uri}>
                   
                    <Box>
                    
                    <Text fontSize="xl" fontWeight = "bold" textColor="white" > {nft.name} </Text>
                    <Text fontSize="xl" fontWeight = "bold" textColor="white"> {nft.token_id}</Text>
                    
                    {nft.image && <Image src={nft.image} boxSize = "60%"/>}
                    
                    <Link color='blue.400' href={ "https://opensea.io/assets/"+nft.token_address+"/"+nft.token_id } isExternal>  Opensea Link</Link>
                    </Box>
                   
                
                </GridItem>
                
            ))}
            </SimpleGrid>
            
        </Box>
    
    
    )

}