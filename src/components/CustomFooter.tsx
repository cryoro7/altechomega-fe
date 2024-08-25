import { Button, Chip, Input } from "@nextui-org/react";
import {
  Facebook,
  Linkedin,
  Mail,
  Map,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

export default function CustomFooter() {
  return (
    <>
      <footer
        style={{ backgroundImage: `url('/home/office3.jpg')` }}
        className="relative bg-cover bg-center px-4 py-4 text-white md:px-40 md:py-10"
      >
        <div>
          <div className="relative z-20 mb-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            <div className="col-span-2 md:col-span-1">
              <p className="mb-4 text-xl font-bold">Social Media</p>

              {[
                <Twitter key={`twitter`} size={15} color="white" />,
                <Facebook key={`facebook`} size={15} color="white" />,
                <Youtube key={`youtube`} size={15} color="white" />,
                <Linkedin key={`linkedin`} size={15} color="white" />,
              ].map((icon, i) => (
                <Button
                  key={`icon-${i}`}
                  isIconOnly
                  radius="full"
                  variant="bordered"
                  size="sm"
                  className="mr-2"
                >
                  {icon}
                </Button>
              ))}
            </div>

            <div className="hidden md:block">
              <p className="mb-4 text-xl font-bold">Address</p>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Map color="white" />}
              >
                123 Street, New York, USA
              </Chip>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Phone color="white" />}
              >
                +012 345 67890
              </Chip>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Mail color="white" />}
              >
                info@example.com
              </Chip>
            </div>

            <div className="hidden md:block">
              <p className="mb-4 text-xl font-bold">Newsletter</p>
              <p className="mb-4 text-sm">Lorem ipsum dolor sit amet.</p>

              <Input
                placeholder="Your email"
                className="text-black"
                endContent={
                  <Button color="primary" size="sm">
                    Send
                  </Button>
                }
              />
            </div>
          </div>

          <div className="relative z-20 grid gap-4 md:hidden md:grid-cols-4">
            <div>
              <p className="mb-4 text-xl font-bold">Address</p>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Map color="white" />}
              >
                123 Street, New York, USA
              </Chip>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Phone color="white" />}
              >
                +012 345 67890
              </Chip>

              <Chip
                variant="light"
                className="gap-4 text-white"
                startContent={<Mail color="white" />}
              >
                info@example.com
              </Chip>
            </div>

            <div>
              <p className="mb-4 text-xl font-bold">Newsletter</p>
              <p className="mb-4 text-sm">Lorem ipsum dolor sit amet.</p>

              <Input
                placeholder="Your email"
                className="text-black"
                endContent={
                  <Button color="primary" size="sm">
                    Send
                  </Button>
                }
              />
            </div>
          </div>
        </div>

        <div className="relative z-20 mt-4 border-t pt-4 text-white">
          <p className="text-sm">&copy; ERP, All Right Reserved.</p>
        </div>

        <div className="absolute inset-0 z-10 bg-black/80" />
      </footer>
    </>
  );
}
