import { Avatar } from "@nextui-org/react";
import { motion } from "framer-motion";

const devs = [
  { img: "/about/man1.png", name: "Angga Wijaya", desc: "Frontend Developer" },
  { img: "/about/man2.png", name: "Kamiswara Ezra", desc: "Backend Developer" },
  {
    img: "/about/woman1.png",
    name: "Anjel Aritonang",
    desc: "DevOps Engineer",
  },
  { img: "/about/woman2.png", name: "Ria Ezekiel", desc: "QA Engineer" },
];

export default function Developers() {
  return (
    <>
      <section className="p-4 md:p-20">
        <div className="mb-10 text-center font-bold">
          <p className="text-sm text-primary">OUR DEVELOPERS</p>
          <h2 className="text-3xl">Our Expert Developers</h2>
        </div>

        <div className="box-center flex-wrap gap-10 pb-10 md:px-20 md:pb-0">
          {devs.map((dev, i: number) => (
            <motion.div
              key={`dev-${i}`}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="w-40"
            >
              <div className="box-center relative p-2">
                <Avatar src={dev.img} alt={dev.name} size="lg" />
              </div>

              <div className="bg-gray-200 p-2 text-center text-sm">
                <p className="font-bold">{dev.name}</p>

                <p className="text-gray-500">{dev.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
