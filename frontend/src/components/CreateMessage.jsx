import React, { useState } from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  Button,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  useToast, // Import useToast
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Formik, Form, Field } from "formik";
import axiosInstance from "../utils/axiosInstance";

function CreateMessage({ selectedMessage }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast(); // Initialize the toast

  const handleSendEmail = async (values) => {
    try {
      const response = await axiosInstance.post("/user/send-email", values);
      console.log("Email sent successfully:", response.data);

      // Display success toast
      toast({
        title: "Email sent.",
        description: "Your email has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      // Display error toast
      toast({
        title: "Error sending email.",
        description: "There was an error sending your email. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box position="relative" my={4}>
      <Divider mt={1} maxWidth="50vw" margin="auto" />

      <div className="message-content-outer" mt={2} height={"auto"}>
        <div className="message-content-inner">
          {selectedMessage ? (
            <>
              <div className="sender-details">
                <Text fontWeight="bold" className="mail-title">
                  {selectedMessage.subject}
                </Text>
                <Text className="mail-from">
                  from: {selectedMessage.sender}
                  {selectedMessage.cc ? ` cc: ${selectedMessage.cc}` : ""}
                </Text>
                <Text className="mail-to">to: {selectedMessage.to}</Text>
              </div>
              <div className="sender-message-content">
                <pre>{selectedMessage.body}</pre>
              </div>
            </>
          ) : (
            <Text p={5}>Select a message to see details here.</Text>
          )}
        </div>
      </div>

      {/* Reply Button */}
      <Flex justifyContent="flex-start" mt={4}>
        <Button
          leftIcon={<ArrowForwardIcon />}
          size="md"
          width="136px"
          height="40px"
          padding="8px 40px 8px 24px"
          borderRadius="4px"
          background="linear-gradient(91.73deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)"
          opacity="1"
          color="white"
          onClick={onOpen} // Open modal when clicked
        >
          Reply
        </Button>
      </Flex>

      {/* Modal for Sending Email */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send Email</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                sendingTo: selectedMessage ? selectedMessage.sender : "",
                sendingFrom: "pragatipriya00@gmail.com", // Set default sender email
                subject: selectedMessage ? selectedMessage.subject : "",
                message: "",
              }}
              onSubmit={handleSendEmail}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="sendingTo">
                    {({ field }) => (
                      <Input {...field} placeholder="Sending To" mb={4} />
                    )}
                  </Field>
                  <Field name="sendingFrom">
                    {({ field }) => (
                      <Input {...field} placeholder="Sending From" mb={4} />
                    )}
                  </Field>
                  <Field name="subject">
                    {({ field }) => (
                      <Input {...field} placeholder="Subject" mb={4} />
                    )}
                  </Field>
                  <Field name="message">
                    {({ field }) => (
                      <Textarea {...field} placeholder="Message" mb={4} />
                    )}
                  </Field>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      colorScheme="blue"
                    >
                      Send
                    </Button>
                  </ModalFooter>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default CreateMessage;
