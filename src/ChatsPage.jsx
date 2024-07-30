import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        'd9475841-cd3d-4ab7-b093-542e2d1ad5c1', 
        props.user.username, 
        props.user.secret
    );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
        </div>);
  };
  export default ChatsPage;