import { Button, Card } from "@nextui-org/react";
import {
  DollarSign,
  Package,
  Users,
  Truck,
  Factory,
  ClipboardList,
} from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Manajemen Keuangan",
    desc: "Pengelolaan akuntansi, pelaporan keuangan, dan anggaran perusahaan.",
    icon: <DollarSign />,
  },
  {
    title: "Pengelolaan Persediaan",
    desc: "Melacak, mengelola, dan mengoptimalkan persediaan barang.",
    icon: <Package />,
  },
  {
    title: "Manajemen Sumber Daya Manusia",
    desc: "Mengelola payroll, rekrutmen, dan data karyawan.",
    icon: <Users />,
  },
  {
    title: "Manajemen Rantai Pasok",
    desc: "Mengoptimalkan aliran barang dari pemasok ke pelanggan.",
    icon: <Truck />,
  },
  {
    title: "Manajemen Produksi",
    desc: "Merencanakan, mengelola, dan mengoptimalkan proses produksi.",
    icon: <Factory />,
  },
  {
    title: "Manajemen Proyek",
    desc: "Mengawasi, mengelola, dan melacak perkembangan proyek secara terpusat.",
    icon: <ClipboardList />,
  },
];

export default function OurSolutions() {
  return (
    <>
      <div className="container px-4 py-8 md:p-20">
        <div className="text-center">
          <h2 className="mb-4 text-xl font-bold md:text-3xl">Our Solutions</h2>
          <p className="mx-auto mb-20 text-sm text-gray-500 md:w-1/2 md:text-base">
            Mencatat setiap barang yang keluar masuk dan mencatat setiap
            keuntungan yang didapatkan setiap harinya.
          </p>
        </div>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="grid gap-8 md:grid-cols-3"
        >
          {solutions.map((sol) => (
            <Card key={sol.title} className="p-4">
              <Button isIconOnly disabled color="primary" className="mb-4">
                {sol.icon}
              </Button>

              <p className="font-bold">{sol.title}</p>
              <p>{sol.desc}</p>
            </Card>
          ))}
        </motion.div>
      </div>
    </>
  );
}
