import React, { useState } from 'react';
import { Image } from "@chakra-ui/image";
import { Flex, Stack, Heading, Text, List, ListItem } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/react';


function App() {
  const [gamestart, setgamestart] = useState(false);
  const [start, setstart] = useState();
  const [state,setstate]=useState(1)
  const [err,seterr]=useState(null);
  const [select,setselect]=useState(0);

  const arr = [1, 2, 3, 4, 5];
  const startgame = () => {
    setgamestart(true);
  }
 
  const fun = (value) => {
    setstart(value);
    seterr(null);
  };
  const fun1=()=>{
if(start){
  const generate=Math.ceil(Math.random()*6);
  setstate(generate)
  if(start===generate){
    setselect(prev=>prev+generate);
  }
}else{
  seterr("pls select")
}
  }

  const fun3=()=>{setselect(0)}

  return (
    <>
      {
        gamestart ? (
          <>
            <Stack h="100vh" justifyContent="center" alignItems="center">
              <Heading>{err?err:"selectnumber"}</Heading>
              <Flex>
                {arr.map((value) => {
                  return <Flex justify="center" align="center" h="50px" w="50px" bg={start===value?'green':'black'} color="white" fontSize="2x1" key={value} borderRadius="md" mr={4} onClick={() => fun(value)}>{value}</Flex>

                })}
              </Flex>

              <Box onClick={()=>{fun1()}}>{" "}
                <Image src={`/dice/dice${state}.png`}  />
              </Box>

            
              <Text  fontSize="8xl" fontWeight="bold">{select}</Text>
              <Button onClick={()=>{fun3()}}>RESET</Button>
            </Stack>

            <Stack maxW="1300px" mx="auto">
              <Heading>Game Rules</Heading>
              <List>
                <ListItem>s</ListItem>
                <ListItem>s</ListItem>
                <ListItem>e</ListItem>
              </List>
            </Stack>
          </>
        ) :
          (
            <Flex justify="center" align={"center"}>
              <Image src="./dice/dicemai.png" />
              <Stack>
                <Heading as="h1">The dice game</Heading>
                <Button alignSelf="flex-end" bg="black" color="white" as="h1" onClick={startgame}>Start game</Button>
              </Stack>
            </Flex>

          )

      }
    </>
  );
}

export default App;
