import { DeleteIcon } from "@chakra-ui/icons";
import { useDisclosure, IconButton, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button } from "@chakra-ui/react";

interface DeleteModalProps {
    id: string;
    onDelete: () => void;
}

export default function DeleteModal({ id, onDelete }: DeleteModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleDelete = async (id: string) => {
        const data = await (
            await fetch(`http://localhost:3008/project/${id}`, {
                method: "delete",
                headers: {
                    "Content-Type": "application/json",
                    authorization: localStorage.getItem("token") as string,
                },
            })
        ).json();

        
        // to close the model for delete
        onClose();
    };

    return (
        <>
            <IconButton
                color={"red"}
                aria-label="delete"
                icon={<DeleteIcon />}
                onClick={onOpen}
                m={5}
            />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader m={5}>هل انت متاكد؟</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        هل انت متاكد انك تريد حذف هذا المشروع ؟
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            الغاء
                        </Button>
                        <Button m={5} colorScheme="red" onClick={() => handleDelete}>
                            حذف
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}