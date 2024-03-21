import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { object,string } from "yup";
import { signupAction } from "../../Redux/Auth/Action";
import { useEffect } from "react";

const validationSchema = object().shape({
    email: string().email("Invalid email address").required("email là bắt buộc"),
    username: string().required("tên người dùng là bắt buộc"),
    name: string().required("tên là bắt buộc"),
    password: string().min(6, "mật khẩu phải ít nhất 6 ký tự").required("mật khẩu là bắt buộc")

})


const Signup = () => {

    const dispatch = useDispatch();
    const {auth} = useSelector(store=>store);
    const toast = useToast();


    const navigate = useNavigate();
    const initialValues = {
        email:"",
        username:"",
        name:"",
        password:""
    }
    const handleSubmit = (values, actions) =>{
        console.log(values);
        dispatch(signupAction(values))
        actions.setSubmitting(false)
    }
    const handleNavigate = () => navigate("/login");

    useEffect(()=>{
        if (auth.signup?.username){
            navigate("/login");
            toast({
                title: `Tài khoản ${auth.signup?.username} đã được tạo`,
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
        }
    },[auth.signup])
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

                            <Field name="username">
                                {({field, form})=>
                                (<FormControl isInvalid={form.errors && form.touched.username}>
                                    <Input className="w-full" {...field} id="username" placeholder="Tên người dùng"></Input>
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                </FormControl>)}
                            </Field>

                            <Field name="name">
                                {({field, form})=>
                                (<FormControl isInvalid={form.errors && form.touched.name}>
                                    <Input className="w-full" {...field} id="name" placeholder="Tên đầy đủ"></Input>
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>)}
                            </Field>

                            <Field name="password">
                                {({field, form})=>
                                (<FormControl isInvalid={form.errors && form.touched.password}>
                                    <Input className="w-full" {...field} id="password" type="password" placeholder="Mật khẩu"></Input>
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>)}
                            </Field>
                            <p className="text-center text-sm">Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram.</p>
                            <p className="text-center text-sm">Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách quyền riêng tư và Chính sách cookie của chúng tôi.</p>
                            <Button className="w-full" mt={4} colorScheme="blue" type="submit" isLoading={formikProps.isSubmitting}>
                                    Đăng ký
                            </Button>
                        </Form>
                    }
                        
                    </Formik>
                </Box>
            </div>
            <div className="border w-full border-slate-300 mt-5">
                <p className="text-center py-2 text-sm">Bạn có tài khoản? <span onClick={handleNavigate} className="ml-2 text-blue-700 cursor-pointer">Đăng nhập</span>
                </p>
            </div>
        </div>
     );
}
 
export default Signup;