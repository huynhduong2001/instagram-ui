import { Button, FormControl, FormLabel, Input, Stack, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserAction, getUserProfileAction } from "../../Redux/User/Action";
import { useFormik } from "formik";
import { uploadToCloudinary } from "../../Config/UploadToCloudinary";
import ChangeProfilePhotoModal from "./ChangeProfilePhotoModal";

const EditAccountDetails = () => {

    const {user} = useSelector(store=> store);
    const toast = useToast()
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const {isOpen, onOpen, onClose} = useDisclosure()
    const initialValues = {
        name:"",
        username: "",
        email: "",
        bio:"",
        mobile: "",
        gender: "",
        website: ""
    }
    useEffect(()=>{
        dispatch(getUserProfileAction(token))
    },[token, user.updateUser])

    useEffect(()=>{
        const newValues = {}
        for (let item in initialValues){
            if (user.reqUser && user.reqUser[item]){
                newValues[item] = user.reqUser[item]
            }
        }
        formik.setValues(newValues)
    },[user.reqUser])

    const formik = useFormik({
        initialValues: {...initialValues},
        onSubmit: (value)=>{
            const data = {
                jwt: token,
                data: {
                    ...value, id: user.reqUser?.id
                }
            }
            dispatch(editUserAction(data))
            toast({
                title: "tài khoản đã cập nhật",
                status: "success",
                duration: 5000,
                isClosable: true
            })
        }
    })

    const handleProfileImageChange = async (event) => {
        const selectedFile = event.target.files[0]
        if (selectedFile){
            const img = await uploadToCloudinary(selectedFile)
            const data = {
                jwt: token,
                data: {image:img, id: user.reqUser?.id}
            }
            dispatch(editUserAction(data))
            onClose()
            toast({
                title: "đã cập nhật ảnh đại diện",
                status: "success",
                duration: 5000,
                isClosable: true
            })
            
        }
        
    }


    return ( 
        <div className="border rounded-md p-10 lg:px-40">
            <div className="flex pb-7">
                <div className="w-[15%]">
                    <img 
                        className="w-16 h-16 object-cover rounded-full" 
                        src={ user.reqUser?.image || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"}
                        alt="" 
                    />
                </div>
                <div>
                    <p>{user.reqUser?.username}</p>
                    <p onClick={onOpen} className="font-bold text-blue-800 cursor-pointer">Đổi ảnh</p>
                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={6}>
                    <FormControl className="flex" id="name">
                        <FormLabel className="w-[15%]">Tên đầy đủ</FormLabel>
                        <div className="w-full">
                            <Input 
                                placeholder="Tên"
                                className="w-full"
                                type="text"
                                {...formik.getFieldProps("name")}
                            />
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="username">
                        <FormLabel className="w-[15%]">Username</FormLabel>
                        <div className="w-full">
                            <Input 
                                disabled
                                placeholder="Username"
                                className="w-full"
                                type="text"
                                {...formik.getFieldProps("username")}
                            />
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="website">
                        <FormLabel className="w-[15%]">Website</FormLabel>
                        <div className="w-full">
                            <Input 
                                placeholder="Website"
                                className="w-full"
                                type="text"
                                {...formik.getFieldProps("website")}
                            />
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="bio">
                        <FormLabel className="w-[15%]">Tiểu sử</FormLabel>
                        <div className="w-full">
                            <Textarea
                                placeholder="Tiểu sử"
                                className="w-full"
                                type="text"
                                {...formik.getFieldProps("bio")}
                            ></Textarea>
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="email">
                        <FormLabel className="w-[15%]">Email</FormLabel>
                        <div className="w-full">
                            <Input 
                                disabled
                                placeholder="Email"
                                className="w-full"
                                type="email"
                                {...formik.getFieldProps("email")}
                            />
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="mobile">
                        <FormLabel className="w-[15%]">Số điện thoại</FormLabel>
                        <div className="w-full">
                            <Input 
                                placeholder="Số điện thoại"
                                className="w-full"
                                type="tel"
                                {...formik.getFieldProps("mobile")}
                            />
                        </div>
                    </FormControl>
                    <FormControl className="flex" id="gender">
                        <FormLabel className="w-[15%]">Giới tính</FormLabel>
                        <div className="w-full">
                            <Input 
                                placeholder="Giới tính"
                                className="w-full"
                                type="text"
                                {...formik.getFieldProps("gender")}
                            />
                        </div>
                    </FormControl>

                    <div>
                        <Button colorScheme="blue" type="submit">Gửi</Button>
                    </div>
                </Stack>
            </form>
            <ChangeProfilePhotoModal
                handleProfileImageChange= {handleProfileImageChange}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            />

        </div>
     );
}
 
export default EditAccountDetails;