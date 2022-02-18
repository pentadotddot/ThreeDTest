import styles from "../styles/Dashboard.module.css"
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button, Center, Flex, Text } from "@chakra-ui/react";


export default function Header() {

    const router = useRouter();
    const { data: session } = useSession();
    const {isAuthenticated, logout, user, isLoggingOut} = useMoralis();

    function logoutMMDisc(){
       
            if(isAuthenticated){
                logout();
                signOut({callbackUrl : "/"});      
                router.push("/");  

            }
        
        
    }
 
        if(isAuthenticated){
            return(

                <div>

                    <header>
                        <Flex px = "10" py = "6" justifyContent="space-between" bgGradient='linear(to-br, blue.100, pruple.500)' color = "white" opacity="80%" >
                            <Center>
                            <Text fontSize="xl" fontWeight="bold" opacity="100%">
                                Welcome to MG-s Dashboard
                            </Text>
                            </Center>

                            <Center>

                            <Text>{user.get("ethAddress")}</Text>
                            <Button ml ="4" colorScheme="blue" onClick={logoutMMDisc} disable={isLoggingOut}>Logout</Button>

                            </Center>
                        </Flex>
                    </header>

                    
                </div>
            )
        }
    


    


}