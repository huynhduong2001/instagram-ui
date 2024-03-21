import { Box, Button, FormControl, FormErrorMessage, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object,string } from "yup";
import { signinAction } from "../../Redux/Auth/Action";
import { useEffect } from "react";
import { getUserProfileAction } from "../../Redux/User/Action";

const validationSchema = object().shape({
    email: string().email("Invalid email address").required("email là bắt buộc"),
    password: string().min(6, "mật khẩu phải ít nhất 6 ký tự").required("mật khẩu là bắt buộc")
})


const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user} = useSelector(store=>store);
    const jwt = localStorage.getItem("token");
    const initialValues = {
        email:"",
        password:""
    }

    const handleSubmit = (values,actions) =>{
        dispatch(signinAction(values))
        actions.setSubmitting(false)
    }

    useEffect(()=>{
        if(jwt) dispatch(getUserProfileAction(jwt))
    },[jwt])
    useEffect(()=>{
        if(user.reqUser?.username){
            navigate(`/${user.reqUser?.username}`)
        }
    },[jwt, user.reqUser])

    const handleNavigate = () => navigate("/signup");

    return ( 
        <div>
            <div className="border">
                <Box p={8} display={"flex"} flexDirection="column" alignItems={"center"}>
                    <img className="mb-5" src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                    {(formikProps)=>
                        <Form className="space-y-6">
                            <Field name="email">
                                {({field, form})=>
                                (<FormControl isInvalid={form.errors && form.touched.email}>
                                    <Input className="w-full" {...field} id="email" placeholder="Số di động hoặc Email"></Input>
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>)}
                            </Field>

                            <Field name="password">
                                {({field, form})=>
                                (<FormControl isInvalid={form.errors && form.touched.password}>
                                    <Input className="w-full" {...field} id="password" placeholder="Mật khẩu" type="password"></Input>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>)}
                            </Field>
                            <p className="text-center text-sm">Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram.</p>
                            <p className="text-center text-sm">Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi.</p>
                            <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={formikProps.isSubmitting}>
                                    Đăng nhập
                            </Button>
                        </Form>
                    }
                        
                    </Formik>
                </Box>
            </div>
            <div className="border w-full border-slate-300 mt-5">
                <p className="text-center py-2 text-sm">Bạn chưa có tài khoản ư? <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Đăng ký</span>
                </p>
            </div>
        </div>
     );
}
 
export default Signin;