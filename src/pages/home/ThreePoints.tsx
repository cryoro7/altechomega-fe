import { Button } from "@nextui-org/react";
import { PenTool, ToggleRightIcon, TowerControl } from "lucide-react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Integrasi Data",
    desc: "Menggabungkan fungsi bisnis ke dalam satu platform terpusat.",
    icon: <PenTool />,
  },
  {
    title: "Kemampuan Kustomisasi",
    desc: "Disesuaikan dengan kebutuhan, mudah berkembang sesuai bisnis.",
    icon: <TowerControl />,
  },
  {
    title: "Pengalaman Pengguna",
    desc: "Intuitif, mudah digunakan, meningkatkan kinerja pengguna.",
    icon: <ToggleRightIcon />,
  },
];

export default function ThreePoints() {
  return (
    <>
      <div className="container relative z-10 grid gap-8 px-4 py-8 md:grid-cols-3 md:p-20">
        {points.map((point, i) => (
          <motion.div
            key={point.title}
            initial={{ y: i % 2 ? 100 : -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="flex gap-4"
          >
            <div>
              <Button isIconOnly color="primary" disabled>
                {point.icon}
              </Button>
            </div>

            <div>
              <p className="font-bold">{point.title}</p>
              <p className="text-gray-500">{point.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
