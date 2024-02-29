import ImageButton from '../components/ImageButton';
import { BaseProps } from '../types';
import { useState } from 'react';

export default function EventDemo1({ title }: BaseProps) {
    const [textFromBtn, setTextFromBtn] = useState('');
    return (
        <>
            <h2>{title}</h2>
            <ImageButton
                image="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
                onSetText={() => setTextFromBtn('Phone Button')}
            />
            <ImageButton
                image="https://upload.wikimedia.org/wikipedia/commons/d/dc/Teacup.svg"
                onSetText={() => setTextFromBtn('TeaCup Button Clicked!')}
            />
            <ImageButton
                image="https://upload.wikimedia.org/wikipedia/commons/d/d4/Star_by_Gis%C3%A8le.png"
                onSetText={() => setTextFromBtn('Start Button Clicked!')}
            />
            <ImageButton
                image="https://upload.wikimedia.org/wikipedia/commons/6/6c/Thumbs_up_green_with_plus_sign.svg"
                onSetText={() => setTextFromBtn('+ Button Clicked!')}
            />
            <ImageButton
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Flat_minus_icon_-_red.svg/240px-Flat_minus_icon_-_red.svg.png"
                onSetText={() => setTextFromBtn('- Button Clicked!')}
            />
            <h3>{textFromBtn}</h3>
        </>
    );
}
