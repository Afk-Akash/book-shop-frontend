import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const Notification = ({ message,color }) => {
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowNotification(false);
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    const handleClose = () => {
        setShowNotification(false);
    };

    return (
        <div style={{ display: showNotification ? 'flex' : 'none', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', top: '0', width: '100%', padding: '10px', backgroundColor: color, color: 'white', maxWidth: '98%', margin: '10px 10px auto' }}>
            <div style={{ flex: 1 }}>{message}</div>
            <div style={{ cursor: 'pointer' }} onClick={handleClose}><FaTimes /></div>
        </div>
    );
};

export default Notification;
