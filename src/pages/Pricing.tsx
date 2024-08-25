import CustomBreadcrumb from "../components/CustomBreadcrumb";
import ImgWords from "./home/ImgWords";
import ThreePoints from "./home/ThreePoints";
import Tier from "./pricing/Tier";
import { motion } from "framer-motion";

const starterBenefits = [
  "Mencatat barang masuk",
  "Mencatat barang keluar",
  "Hasil keuntungan",
];

const proBenefits = ["Analisa dengan Chart", "Support 7x24 jam"];

const enterpriseBenefits = ["Export data ke Excel", "AI Prediksi penghasilan"];

const tiers = [
  {
    title: "Starter",
    desc: "Fitur dasar untuk bisnis kecil, mencakup manajemen keuangan dan persediaan.",
    oldPrice: 109900,
    newPrice: 24990,
    pricePerMonth: 49900,
    discount: 77,
    benefits: starterBenefits,
  },
  {
    title: "Professional",
    desc: "Solusi lengkap untuk bisnis menengah, termasuk manajemen HR dan produksi.",
    oldPrice: 129900,
    newPrice: 45900,
    pricePerMonth: 93900,
    discount: 64,
    benefits: [...starterBenefits, ...proBenefits],
  },
  {
    title: "Enterprise",
    desc: "Fitur premium untuk perusahaan besar, dengan kustomisasi dan analitik.",
    oldPrice: 349000,
    newPrice: 150000,
    pricePerMonth: 199000,
    discount: 57,
    benefits: [...starterBenefits, ...proBenefits, ...enterpriseBenefits],
  },
];

export default function Pricing() {
  return (
    <>
      <CustomBreadcrumb img="/home/office2.jpg" title="Pricing" />

      <ThreePoints />

      <hr className="my-8" />

      <div className="container">
        <div className="mt-10 p-4 text-center md:mt-20">
          <p className="mb-2 text-sm font-bold text-primary">
            Pilih paket ERP lebih tenang dengan jaminan 30 hari uang kembali.
          </p>

          <h2 className="text-3xl font-bold">
            Pilih paket ERP untuk bisnis Anda!
          </h2>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="grid gap-8 p-4 md:grid-cols-3 md:p-20"
        >
          {tiers.map((tier, i) => (
            <Tier key={tier.title} tier={{ ...tier, index: i }} />
          ))}
        </motion.div>
      </div>

      <hr className="my-8" />

      <ImgWords />
    </>
  );
}
