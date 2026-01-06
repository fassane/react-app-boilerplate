import { MdOutlineInfo } from 'react-icons/md';

type messageType = {
    message: string;
};

function ErrorMessage({ message }: messageType) {
    return (
        <>
            {!!message && (
                <div className="d-flex gap-1 mt-1 text-danger" role="alert">
                    <span style={{ display: 'grid', placeItems: 'center' }}>
                        <MdOutlineInfo />
                    </span>
                    <span>{message}</span>
                </div>
            )}
        </>
    );
}

export default ErrorMessage;
  