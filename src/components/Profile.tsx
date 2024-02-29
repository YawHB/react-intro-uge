type ProfileProps = {
    name: string;
    email: string;
    isActive: boolean;
    id?: number;
    singleLine?: boolean;
};

export default function Profile({
    id,
    name,
    email,
    isActive,
    singleLine,
}: ProfileProps) {
    return (
        <>
            <div>
                <p>{id}</p>
                <p>{name}</p>
                <p>{email}</p>
                <p>{isActive ? 'Active' : 'Not Active'}</p>
                <p>{singleLine}</p>
            </div>
        </>
    );
}
