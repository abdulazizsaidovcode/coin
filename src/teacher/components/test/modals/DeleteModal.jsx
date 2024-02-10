const DeleteModal = (props) => {
    const {
        isHoveredId,
        getTestTable,
        isDeleteMenuOpen,
        toggleDeleteMenu
    } = props;

    return (
        <div className={`${isDeleteMenuOpen ? 'visible w-full' : 'hidden'}`}>DeleteModal</div>
    )
}

export default DeleteModal;