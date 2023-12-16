import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useChat } from '../context/ChatProvider';
import useChatActions from '../hooks/useChatActions';
import useDebounce from '../hooks/useDebounce';
import { Description } from '../styled/Description';

const RoomListContainer = styled.div`
    --space: 1em;
    --horizontal-space: 2vw;
    
    display: flex;
    flex-direction: column;
    width: 26%;
    height: 100%;
    padding-top: var(--vertical-padding);
    overflow: auto;
    border-top-left-radius: 45px;
    border-bottom-left-radius: 45px;
    background: var( --blue-gradient);
    color: #fff;
    
    & h3 {
        font-size: 1.2em;
        font-weight: 500;
        padding: 0.9em var(--horizontal-space);
    }

    @media (max-width: 820px) {
        position: absolute;
        opacity: ${ props => props.open ? '1' : '0'};
        pointer-events: ${ props => props.open ? 'null' : 'none'};
        right: 0;
        width: 100%;
        border-radius: 0;
        z-index: 1;
    }
`;

const RoomItem = styled.li`
    display: flex;
    gap: 1vw;
    width: 100%;
    flex: 1;
    padding: var(--space) var(--horizontal-space);
    list-style: none;
    background: ${ props => props.active ?  'var(--blue-active-color)' : 'transparent'};
    cursor: pointer;
    transition: all .05s;

    &:hover {
        background: var(--blue-active-color);
    }

    & img {
        height: 3vw;
        width: 3vw;
        border-radius: 20px;
        object-fit: cover;
    }

    & div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    & span {
        font-weight: 500;
        font-size: 0.8em;
    }
`;


// Static rooms in the chat
const rooms = [
    {
        id: 1,
        name: 'Potatoes Farmers 🥔🥔',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'A community for potatoes Farmers to share information, photos, experiences, and support each other.'
    },

    {
        id: 2,
        name: 'Tomatoes Farmers 🍅🍅 ',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'Community for Tomatoes Farmers, we help each other.'
    },
    
    {
        id: 3,
        name: ' Tea Farmers 🍃🍃',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'A community of people who have a passion about Tea farming and want to explore new cultures .'
    },

    {
        id: 4,
        name: 'Apples 🍎🍏',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'For all Apples Farmers from all over to share experiences of Market yeilds '
    },

    {
        id: 5,
        name: 'Mango Farmers  🥭🥭',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'A group of individuals are farming Mangos'
    },
  
    {
        id: 6,
        name: 'Grapes House 🍇🍇',
        src: require('../rooms-images/diyers.jpg').default,
        description: ' People who like to take on home improvement and craft projects, and enjoy working with their hands to create something new and unique'
    },

    {
        id: 7,
        name: 'Maize and Corn Farmers  🌽🌽',
        src: require('../rooms-images/dog-lovers.jpg').default,
        description: 'Maize Farmers and business owners for corn chatroom.'
    }
];

const RoomList = ({ query, isNavOpen, setIsNavOpen }) => {
    const debouncedSearch = useDebounce(query, 350);
    const { joinRoom } = useChatActions();
    const { currentRoom, setCurrentRoom, userName } = useChat();


    const filteredRooms = useMemo(() => {
        const filter = rooms.filter(room => {
            const includesCaseInsensitive  = {
                name: room.name.toLowerCase(),
                description: room.description.toLowerCase()
            };
    
            const { name, description } = includesCaseInsensitive;
    
            return name.includes(debouncedSearch.toLowerCase()) || description.includes(debouncedSearch.toLowerCase());
        });

        return filter;
    }, [debouncedSearch]);

    const handleRoomClick = (roomID) => {
        if(currentRoom?.id === roomID) {
            return;
        }

        const selectedRoom = rooms.find(room => room.id === roomID);
        setCurrentRoom(selectedRoom);

        joinRoom({ roomID, userName });

        setIsNavOpen(false);
    }
    

    return (
        <RoomListContainer open={ isNavOpen }>
            <h3>Rooms</h3>

            <ul>
                {   
                    
                    filteredRooms.map(room => {
                        const { id, name, src, description} = room;

                        return (
                            <RoomItem active={ currentRoom?.id === id } key={ id } onClick={ () => handleRoomClick(id) }>
                                <img alt='room-img' src={ src } />

                                <div>
                                    <span>{ name }</span>
                                    <Description color='rgba(254,254,254,0.5)' size='0.7em'>{ description }</Description>
                                </div>
                            </RoomItem>
                        );
                    })
                }
            </ul>
        </RoomListContainer>
    );
};

export default RoomList;