interface ImageButtonProps {
    image: string;
    onSetText: () => void;
}

export default function ImageButton({ image, onSetText }: ImageButtonProps) {
    return (
        <button className="imageButton" onClick={onSetText}>
            <img src={image} alt="button" className="eventImages" />
        </button>
    );
}
