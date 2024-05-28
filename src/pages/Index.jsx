import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, HStack, Box, IconButton, Image } from "@chakra-ui/react";
import { FaInstagram, FaSearch } from "react-icons/fa";

const Index = () => {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    // Here you would call your backend API to scrape and analyze the Instagram account
    // For demonstration purposes, we'll use dummy data
    setTimeout(() => {
      setFollowers([
        { name: "John Doe", location: "USA", profilePic: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzE2ODgxOTY1fDA&ixlib=rb-4.0.3&q=80&w=1080' },
        { name: "Jane Smith", location: "USA", profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTY4ODE5NjV8MA&ixlib=rb-4.0.3&q=80&w=1080' },
        // Add more dummy followers as needed
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input placeholder="Enter Instagram username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <IconButton aria-label="Search Instagram" icon={<FaSearch />} onClick={handleSearch} isLoading={loading} />
        </HStack>
        <VStack spacing={4} width="100%">
          {followers.map((follower, index) => (
            <HStack key={index} width="100%" padding={4} borderWidth={1} borderRadius="md">
              <Image src={follower.profilePic} boxSize="50px" borderRadius="full" />
              <Box>
                <Text fontWeight="bold">{follower.name}</Text>
                <Text>{follower.location}</Text>
              </Box>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
