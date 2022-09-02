import {
  VStack,
  ButtonGroup,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  Input,
  Heading,
} from "@chakra-ui/react";
import { useFormik, FormikProps } from "formik";
import React from "react";
import * as yup from "yup";

export default function Login() {
  interface FormValues {
    username: string;
    password: string;
  }
  const personSchema = yup.object({
    username: yup
      .string()
      .required("Username required!")
      .min(6, "Username must be between 6 and 20 characters")
      .max(20, "Username must be between 6 and 20 characters"),
    password: yup
      .string()
      .required("Password required!")
      .min(
        8,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const formik: FormikProps<FormValues> = useFormik<FormValues>({
    initialValues: { username: "", password: "" },
    validationSchema: personSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });

  return (
    <VStack
      w={{ base: "90%", md: "500px" }}
      m="auto"
      justify="center"
      h="100vh"
      spacing="1rem"
    >
      <Heading>Log In</Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <FormLabel fontSize="lg">Username</FormLabel>
          <Input
            name="username"
            placeholder="Enter Username"
            autoComplete="off"
            fontSize="lg"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Input>
          <FormErrorMessage>Invalid Username</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel fontSize="lg">Password</FormLabel>
          <Input
            name="password"
            placeholder="Enter Password"
            autoComplete="off"
            fontSize="lg"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></Input>
          <FormErrorMessage>Invalid Password</FormErrorMessage>
        </FormControl>
        <ButtonGroup pt="1rem">
          <Button colorScheme="teal" type="submit">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </ButtonGroup>
      </form>
    </VStack>
  );
}
