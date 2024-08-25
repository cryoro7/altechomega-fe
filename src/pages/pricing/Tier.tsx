import { Button, Card, Chip } from "@nextui-org/react";
import { Check } from "lucide-react";

interface TierProps {
  tier: {
    index: number;
    title: string;
    desc: string;
    oldPrice: number;
    newPrice: number;
    pricePerMonth: number;
    discount: number;
    benefits: string[];
  };
}

export default function Tier(props: TierProps) {
  const { tier } = props;

  const rpFormat = (num: number) => {
    return num.toLocaleString("id");
  };

  return (
    <>
      <Card className="border-primary">
        <p className="bg-primary p-2 text-center text-xl font-bold text-white">
          Tier {tier.index}
        </p>

        <div className="p-4">
          <p className="mb-4 font-bold">{tier.title}</p>
          <p className="mb-4">{tier.desc}</p>

          <div className="box-equal mb-8 gap-4">
            <p className="line-through">Rp{rpFormat(tier.oldPrice)}</p>

            <Chip color="danger">DISKON {tier.discount}%</Chip>
          </div>

          <p className="mb-4">
            Rp <b className="text-3xl">{rpFormat(tier.newPrice)}</b> /bln
          </p>

          <p className="mb-4 font-bold text-primary">+3 bulan gratis</p>

          <Button color="primary" size="lg" className="mb-2 w-full font-bold">
            Pilih Paket
          </Button>

          <p className="mb-4 text-sm text-gray-500">
            Rp{rpFormat(tier.pricePerMonth)} /bln saat diperpanjang
          </p>

          <hr className="mb-4" />

          {tier.benefits.map((ben) => (
            <div key={`${tier.title}-${ben}`} className="flex gap-2">
              <Check color="green" />
              <p className="flex-1 text-sm">{ben}</p>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
