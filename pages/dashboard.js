import styles from "../styles/Dashboard.module.css";
import { useSession } from "next-auth/react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { Box, Button, Flex, TabList, Tabs, Text, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import NFT from "../components/NFT";
import Bungallow from "../components/Bungallow";
import ThreeD from "../components/ThreeD";


export default function dashboard() {


    const osContainer = [];
    var verifiedMG = false;
    const router = useRouter();
    const {isAuthenticated, logout, user, setUserData} = useMoralis();
    
    function Gobackhome(){
        

        router.push("/");

    }

    function Renderdash(){

        if(isAuthenticated){
    
    
    
            return(
    
        
    
                <>
                    <meta name="viewport" 
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                    <Flex bgImage="../static/225985-nebula-space-blue-12k-8k-hd-4k-wallpaper-image.jpg" direction="column" height="100vh" bgRepeat="repeat-y">
                        <Header/> 
                        <Box className={styles.dashboard} flex = "1" px = "44" py = "20" >
                            <Tabs size="lg" textColor="white" align = "center" variant = "enclosed">
                                <TabList>
                                    <Tab fontWeight = "bold" > Profile</Tab>
                                    <Tab fontWeight = "bold" > NFTs</Tab>
                                    <Tab fontWeight = "bold" > Bungallow</Tab>
                                    <Tab fontWeight = "bold" > ThreeD</Tab>
    
    
                                </TabList>
                                <TabPanels>
    
                                    <TabPanel>
                                        <Text>
                                            <Profile user = {user}/>
                                        </Text>
    
                                    </TabPanel>
    
                                    <TabPanel>
                                        <Text>
                                            <NFT user = {user}/>
                                        </Text>
                                    
                                    </TabPanel>
    
                                    <TabPanel>
                                        <Text>
                                            <Bungallow user = {user}/>
                                        </Text>
                                    
                                    </TabPanel>

                                    <TabPanel className={styles.ThreeDBox}>
                                        <Text>
                                            <ThreeD user = {user}/>
                                        </Text>
                                    
                                    </TabPanel>

                                </TabPanels>
                            
                            </Tabs>   
                        </Box> 
    
                    </Flex>
    
    
                </>
                )
            
            
        }
    
        else{
    
            return(
                <div className={styles.dashboard}>
                    <p>
                       Only verified members can visit this site...
    
                        <h2>
                            <button onClick={Gobackhome}>Go to login</button>
                        </h2>
                    </p>
                </div>
    
            )
    
        }
    
    }

    return Renderdash();

}
