import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ChatProvider } from './context/ChatProvider';
import Wrapper from './components/Wrapper';

import ChatBot from 'react-simple-chatbot';

const GlobalStyle = createGlobalStyle`
  :root {
    --main-color-dark-palette: #1a1a1a;
    --secondry-color-dark-palette: #373737;
    --blue-button-color: #3c95f4;
    --blue-active-color: #2070c6;
    --blue-gradient: linear-gradient(120deg, rgba(2,0,36,1) 0%, rgba(2,113,80,1) 100%);
  }

  

  * {
    margin: 0;
    padding: 0;
    outline: transparent;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: var(--green-gradient);
  }
`;

const Background = styled.div`
position: absolute;
height: 100vh;
width: 100vw;
overflow: hidden;
z-index: -1;

&::before, &::after {
    content: '';
    position: absolute;
    // inset: -170px auto auto -200px;
    // width: clamp(30vw, 600px, 42vw);
    // height: clamp(30vw, 600px, 42vw);
    // border-radius: 50%;
    // background: #13bf4a;
    z-index: -1;
  }

  &::after {
    inset: auto -170px -200px auto;
  }

  @media (max-width: 820px) {
    &::before, &::after {
      width: 25rem;
      height: 25rem;
    }
  }
`;

const steps = [
  {
    id: '0',
    message: "Hello I'm AgriHero!",
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: "Hi {previousValue}, how can I help you?",
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 1, label: 'Ask expert questions' },
      { value: 2, label: 'Read Articles', trigger: 'readArticles' },
      {
        value: 3,
        label: 'AI Engine',
        trigger: 'aiEngine',
      },
    ],
    end: true,
  },
  // Define the steps for the AI Engine
  {
    id: 'aiEngine',
    message: 'Redirecting to the AI Engine...',
    trigger: () => redirectToURL('http://localhost:3001/'),
  },
  // Define the steps for Read Articles
  {
    id: 'readArticles',
    message: 'Redirecting to Articles...',
    trigger: () => redirectToURL('https://www.thespruce.com/identify-treat-prevent-tomato-diseases-7153094'),
  },
];

// Function to handle redirection
const redirectToURL = (url) => {
  window.location.href = url;
};



// Creating our own theme
const theme = {
  background: '#C9FF8F',
  headerBgColor: '#7da255',
  headerFontSize: '20px',
  botBubbleColor: '#7da255',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#7da255',
  userFontColor: 'white',
};

// Set some properties of the bot
const config = {
  botAvatar: "chat-icon.png",
  floating: true,
};


function App() {
  return (
    <>
      <GlobalStyle />
      
      <Background />

      <ChatProvider>  

        <Wrapper />
      </ChatProvider>
      <ChatBot
 
 // This appears as the header
 // text for the chat bot
 headerTitle="AgriBot"
 steps={steps}
 {...config}

/>
    </>
  );
}

export default App;
