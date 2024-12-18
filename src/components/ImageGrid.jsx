import { Row, Col, Image, Button } from "react-bootstrap"
import { useSelector } from "react-redux";
import { useState } from "react";
import UpdatePostModal from "./UpdatePostModal";
import DeletePostModal from "./DeletePostModal";

export default function ImageGrid() {
    const posts = useSelector((state) => state.posts)
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);

    const handleCloseUpdateModal = () => {
        setCurrentPost(null);
        setShowUpdateModal(false);
    };

    const handleCloseDeleteModal = () => {
        setCurrentPost(null);
        setShowDeleteModal(false);
    };

    const handleShowUpdateModal = (post) => {
        setCurrentPost(post);
        setShowUpdateModal(true);
    };

    const handleShowDeleteModal = (post) => {
        setCurrentPost(post);
        setShowDeleteModal(true);
    };

    const renderImages = () => {
        return posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4">
                <Image src={post.image} fluid />
                <Button onClick={() => handleShowUpdateModal(post)} variant="outline-primary">
                    <i className="bi bi-pencil-square"></i>
                </Button>
                <Button onClick={() => handleShowDeleteModal(post)} variant="outline-danger">
                    <i className="bi bi-trash"></i>
                </Button>
            </Col>
        ))
    }

    return (
        <>
            <Row>{renderImages()}</Row>
            {currentPost && (
                <>
                    <UpdatePostModal show={showUpdateModal} handleClose={handleCloseUpdateModal} postId={currentPost.id} />
                    <DeletePostModal show={showDeleteModal} handleClose={handleCloseDeleteModal} postId={currentPost.id} />
                </>
            )}
        </>
    )
}