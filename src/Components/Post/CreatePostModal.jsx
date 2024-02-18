import { Button, Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { FaPhotoVideo } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GrEmoji } from "react-icons/gr";
import "./CreatePostModal.css"
import { useState } from "react";
const CreatePostModal = ({onClose, isOpen}) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [file, setFile] = useState(null);
    const [caption, setCaption] = useState("");
    const handleDrop = (e)=>{
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile.type.startsWith("image/")||droppedFile.startsWith("video/")){
            setFile(droppedFile)
        }
    }

    const handleDragOver = (e)=>{
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    }

    const handleDragLeave = ()=>{
        setIsDragOver(false);
    }

    const handleOnChange = (e)=>{
        const file = e.target.files[0];
        console.log(file);
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))){
            setFile(file);
        }
        else {
            setFile(null);
            alert("vui lòng chọn ảnh hoặc video")
        }
    }

    const handleCaptionChange = (e)=>{
        setCaption(e.target.value);
    }
    return ( 
        <div>
            <Modal size={"2xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <div className="flex justify-between py-1 px-10 items-center">
                        <p>Tạo bài viết mới</p>
                        <Button variant={"ghost"} size={"sm"} colorScheme="blue">Đăng</Button>
                    </div>
                    <hr />
                    <ModalBody>
                        <div className="h-[70vh] justify-between pb-5 flex">
                            <div className="w-[50%]">
                                {!file && 
                                <div 
                                    onDrop={handleDrop} 
                                    onDragOver={handleDragOver} 
                                    onDragLeave={handleDragLeave}
                                    className="drag-drop h-full"
                                >
                                    <div className="flex justify-center items-center flex-col">
                                        <FaPhotoVideo className="text-6xl"/>
                                        <p>Kéo ảnh và video vào đây</p>
                                    </div>
                                    <label htmlFor="file-upload" className="custom-file-upload">Chọn từ máy tính</label>
                                    <input type="file" id="file-upload" accept="image/*, video/*" onChange={handleOnChange} />
                                </div>}

                                {file && <img className="max-h-full" src={URL.createObjectURL(file)} alt="" />}

                            </div>

                            <div className="w-[1px] border h-full "></div>

                            <div className="w-[50%]">
                                <div className="flex items-center px-2">
                                    <img className="w-7 h-7 rounded-full" src="https://cdn.pixabay.com/photo/2023/11/30/01/38/vietnam-8420600_640.jpg" alt="" />
                                    <p className="font-semibold ml-3">username</p>
                                </div>
                                <div className="px-2">
                                    <textarea placeholder="Hãy viết gì đó..." className="captionInput" name="caption" rows="8" onChange={handleCaptionChange}></textarea>
                                </div>
                                <div className="flex justify-between px-2">
                                    <GrEmoji/>
                                    <p className="opacity-70">{caption?.length} /2,200</p>
                                </div>
                                <hr />

                                <div className="p-2 flex justify-between items-center">
                                    <input className="locationInput" type="text" placeholder="Vị trí" name="location" />
                                    <IoLocationOutline/>
                                </div>
                                <hr />

                            </div>
                        </div>
                    </ModalBody>
                    
                </ModalContent>
            </Modal>
        </div>
     );
}
 
export default CreatePostModal;