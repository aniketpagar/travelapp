import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { AiFillFacebook, AiFillGithub } from 'react-icons/ai';
// import GoogleLogin from "GoogleLogin"
// import LoginModal from "../css/login.css"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  width: 400px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from { transform: translateY(-50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const Title = styled.h2`
  color: #2d3748;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InputGroup = styled.div`
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 4px;
  display: block;
`;

const SubmitButton = styled.button`
  background: #667eea;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #5a67d8;
    transform: translateY(-1px);
  }
`;

const SocialLogin = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const SocialButton = styled.button`
  padding: 10px;
  border: 2px solid #e2e8f0;
  border-radius: 10px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    border-color: #667eea;
    transform: translateY(-1px);
  }
`;

const LoginModal = ({ onClose }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    // Add your login logic here
    console.log(data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>Welcome Back</Title>
        
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputGroup>
            <Input
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              placeholder="Password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters'
                }
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? 'Signing In...' : 'Sign In'}
          </SubmitButton>
        </Form>

        <SocialLogin>
          <SocialButton type="button">
            <FcGoogle size={24} />
            {/* <GoogleLogin /> */}
          </SocialButton>
          <SocialButton type="button">
            <AiFillFacebook size={24} />
          </SocialButton>
        </SocialLogin>
      </ModalContent>
    </Overlay>
  );
};

export default LoginModal;