import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { io } from 'socket.io-client';


export const Room = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('name');
    
    useEffect(() => {
        // init user logic

    }, [name])
    return <div>
        Hi {name}
    </div>
}