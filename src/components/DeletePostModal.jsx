import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";

export default function DeletePostModal({ show, handleClose, postId }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (postId) {
            dispatch(deletePost({ id: postId })); // Dispatch the deletePost action with the post ID
            handleClose(); // Close the modal after deleting
        }
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header >
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this post? This action cannot be undone.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
