import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary" variant="bordered">
        Login
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>

              <ModalBody>
                <div className="box-between my-8">
                  <p className="text-3xl font-bold">Login</p>

                  <Link to={`#`} className="text-primary">
                    Register
                  </Link>
                </div>

                <Input label="Email" />
                <Input label="Password" className="mb-4" />

                <p className="text-sm text-gray-500">
                  Login atau daftar terlebih dahulu.
                </p>
              </ModalBody>

              <ModalFooter>
                <Button
                  color="primary"
                  size="lg"
                  className="mb-2 w-full font-bold"
                >
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
