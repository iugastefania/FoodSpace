import React, {useState} from 'react';
import {
    Container,
    Form,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Text,
    Icon,
    FormButton,
    SigninLink
} from "./SignUpElements";
import Background from '../../assets/restaurant_bg.png'
import {HeroBg, ImageBg} from "../HeroSection/HeroElements";
import Axios from 'axios'


const SignUp = () => {

    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('http://localhost:3001/register', {
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <>
            <HeroBg>
                <ImageBg src={Background}/>
            </HeroBg>
            <Container>
                <FormWrap>
                    <Icon to="/">FoodSpace</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Create your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput
                                type='email' required
                                onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }}
                            />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput
                                type='password' required
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}
                            />
                            {/* <FormLabel htmlFor='for'>Confirm Password</FormLabel>
                            <FormInput type='password' required/> */}
                            <FormButton onClick={register} type='submit'>Continue</FormButton>
                            <Text>Already have an Account?
                                <SigninLink id='Links-signin' to='/signin'>Sign In</SigninLink>
                            </Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignUp;